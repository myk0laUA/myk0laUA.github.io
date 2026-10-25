import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const htmlPath = new URL('index.html', root);
const css = readFileSync(new URL('styles.css', root), 'utf8').replace(/\r\n/g, '\n');
const version = createHash('sha256').update(css).digest('hex').slice(0, 12);
const href = `styles.css?v=${version}`;
const html = readFileSync(htmlPath, 'utf8');
const pattern = /href="styles\.css(?:\?v=[a-zA-Z0-9-]+)?"/g;

if ([...html.matchAll(pattern)].length !== 1) {
  throw new Error('Expected exactly one portfolio stylesheet link.');
}

const updated = html.replace(pattern, `href="${href}"`);
if (process.argv.includes('--check')) {
  if (html !== updated) {
    console.error('Stylesheet version is stale. Run: node scripts/version-styles.mjs');
    process.exitCode = 1;
  } else {
    console.log(`Stylesheet version is current: ${href}`);
  }
} else {
  if (html !== updated) writeFileSync(htmlPath, updated);
  console.log(`Stylesheet URL: ${href}`);
}
