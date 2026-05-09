/**
 * GitHub Pages serves 404.html for unknown paths — copy SPA shell so deep links work.
 * Usage: node scripts/copy-spa-fallback.mjs [outDir]
 * Default outDir: dist
 */
import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';

const outDirName = process.argv[2] || 'dist';
const root = resolve(import.meta.dirname, '..');
copyFileSync(resolve(root, outDirName, 'index.html'), resolve(root, outDirName, '404.html'));
