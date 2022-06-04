import handlebarsPlugin from 'vite-plugin-handlebars';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import layouts from 'handlebars-layouts';
import handlebars from 'handlebars';
import helpers from 'handlebars-helpers';

const rootDir = dirname(fileURLToPath(import.meta.url));

export default {
  root: 'src',
  build: {
    outDir: '../dist',
  },
  plugins: [
    handlebarsPlugin({
      partialDirectory: resolve(rootDir, 'src/partials'),
      helpers: {  ...helpers, ...layouts(handlebars) },
    }),
  ],
  clearScreen: false,
};
