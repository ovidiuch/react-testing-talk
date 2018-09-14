/* eslint-env node */
import { join } from 'path';
import { promisify } from 'util';
import assert from 'assert';
import { readFile, writeFile } from 'fs-extra';
import glob from 'glob';
import { set } from 'lodash';
import j from 'jscodeshift';

const globAsync = promisify(glob);

const TEST_MATCH = '*/__tests__/**/*.js';
const TEST_TYPES = ['loose', 'tight'];
const EXAMPLES_DIR = join(__dirname, '../examples');
const OUTPUT_PATH = join(__dirname, '../test.metadata.json');

(async () => {
  const testPaths = await globAsync(TEST_MATCH, {
    cwd: EXAMPLES_DIR,
    absolute: false
  });

  const tests = {};

  await Promise.all(
    testPaths.map(async testPath => {
      const exampleName = getExampleNameFromTestPath(testPath);
      const testType = getTestTypeFromTestPath(testPath);
      const fileName = getFileNameFromTestPath(testPath);

      const testMetadata = await getMetadataFromTestFile(
        join(EXAMPLES_DIR, testPath)
      );

      // TODO: Include test.body as well
      const titles = testMetadata.map(test => test.title);

      set(tests, `${exampleName}.${testType}.${fileName}`, titles);
    })
  );

  await writeFile(OUTPUT_PATH, JSON.stringify(tests, null, 2), 'utf8');
})();

async function getMetadataFromTestFile(filePath) {
  const testFileSource = await readFile(filePath, 'utf8');
  const root = j(testFileSource);

  const testExpressions = root
    .find(j.CallExpression)
    .filter(path => path.node.callee.name === 'it');

  return testExpressions.nodes().map(node => ({
    title: getTestTitle(node),
    body: getTestBody(node, testFileSource)
  }));
}

function getTestTitle(testNode) {
  assertTestNode(testNode);

  return testNode.arguments[0].value;
}

function getTestBody(testNode, testFileSource) {
  assertTestNode(testNode);
  const { start, end } = testNode;

  return testFileSource.substring(start, end);
}

function assertTestNode(node) {
  assert.strictEqual(node.type, 'CallExpression');
  assert.strictEqual(node.callee.type, 'Identifier');
  assert.strictEqual(node.callee.name, 'it');
  assert.strictEqual(node.arguments[0].type, 'Literal');
  assert.strictEqual(node.arguments[1].type, 'ArrowFunctionExpression');
}

function getExampleNameFromTestPath(testPath) {
  return testPath.split('/')[0];
}

function getTestTypeFromTestPath(testPath) {
  const testType = testPath.match(/__tests__\/(.+?)\//)[1];
  assert(TEST_TYPES.indexOf(testType) !== -1);

  return testType;
}

function getFileNameFromTestPath(testPath) {
  return testPath
    .split('/')
    .pop()
    .replace(/\.js$/, '');
}
