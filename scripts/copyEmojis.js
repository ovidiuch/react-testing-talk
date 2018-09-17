/* eslint-env node */
import { join, basename } from 'path';
import { readFile, writeFile } from 'fs-extra';
import { promisify } from 'util';
import glob from 'glob';

const globAsync = promisify(glob);

const ROOT_DIR = join(__dirname, '..');
const SOURCE_MATCH = 'node_modules/twemoji/2/svg/*.svg';
const TARGET_DIR = join(ROOT_DIR, 'static/emoji');

(async () => {
  const paths = await globAsync(SOURCE_MATCH, {
    cwd: ROOT_DIR,
    absolute: true
  });

  await Promise.all(
    paths.map(async p => {
      const src = await readFile(p, 'utf8');
      await writeFile(join(TARGET_DIR, basename(p)), src, 'utf8');
    })
  );
})();
