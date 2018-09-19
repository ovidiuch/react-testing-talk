/* eslint-env node */
import { join } from 'path';
import { readFile, writeFile } from 'fs-extra';

const FILES = {
  '1-redux-state/__tests__/tight/ui.js':
    '2-component-state/__tests__/tight/ui.js',
  '2-component-state/StatefulLoginForm.js':
    '3-generic-form/StatefulLoginForm.js',
  '2-component-state/__tests__/tight/state.js':
    '3-generic-form/__tests__/tight/state.js',
  '2-component-state/__tests__/loose/index.js':
    '3-generic-form/__tests__/loose/index.js'
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
  return `// NOTE: Auto copied from ${sourcePath}.
// Don't edit by hand! Edit source and run \`yarn copy-example-files\` instead.\n${source}`;
}
