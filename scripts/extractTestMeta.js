/* eslint-env node */
import { join } from 'path';
import { promisify } from 'util';
import assert from 'assert';
import { readFile } from 'fs-extra';
import glob from 'glob';
import j from 'jscodeshift';

const globAsync = promisify(glob);

const TEST_MATCH = '*/__tests__/**/*.js';
const EXAMPLES_DIR = join(__dirname, '../examples');

(async () => {
  const testPaths = await globAsync(TEST_MATCH, {
    cwd: EXAMPLES_DIR,
    absolute: false
  });

  await Promise.all(
    testPaths.map(async testPath => {
      const testMeta = await getTestMetadataFromFile(
        join(EXAMPLES_DIR, testPath)
      );

      console.log({ testPath });
      console.log(testMeta.map(test => test.title));
    })
  );
})();

async function getTestMetadataFromFile(filePath) {
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
