/**
 * GitHub Pages serves 404.html for unknown paths — copy SPA shell so deep links work.
 */
import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
copyFileSync(resolve(root, 'dist/index.html'), resolve(root, 'dist/404.html'));
