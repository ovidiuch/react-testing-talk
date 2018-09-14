/* eslint-env node */
import { join } from 'path';
import { readFile, writeFile } from 'fs-extra';

const FILES = {
  '1-redux-state/LoginForm.js': '2-component-state/LoginForm.js',
  '1-redux-state/__tests__/tight.component.js':
    '2-component-state/__tests__/tight.component.js'
};

const EXAMPLES_DIR = join(__dirname, '../examples');

(async () => {
  await Promise.all(
    Object.keys(FILES).map(async sourcePath => {
      const targetPath = FILES[sourcePath];
      const source = await readFile(getAbsPath(sourcePath), 'utf8');

      const body = addHeader(sourcePath, source);
      await writeFile(getAbsPath(targetPath), body, 'utf8');
    })
  );
})();

function getAbsPath(examplePath) {
  return join(EXAMPLES_DIR, examplePath);
}

function addHeader(sourcePath, source) {
  return `// NOTE: Auto copied from 1-redux-state/__tests__/tight.component.js.
// Don't edit by hand! Edit source and run \`yarn copy-example-files\` instead.\n${source}`;
}
