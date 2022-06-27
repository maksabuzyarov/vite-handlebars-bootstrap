import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import handlebarsPlugin from 'vite-plugin-handlebars';
import layouts from 'handlebars-layouts';
import handlebars from 'handlebars';
import helpers from 'handlebars-helpers';
import { v4 as uuidv4 } from 'uuid';

const rootDir = dirname(fileURLToPath(import.meta.url));

export default {
  root: 'src',
  build: {
    outDir: '../dist',
  },
  css: {
    devSourcemap: true,
  },
  plugins: [
    handlebarsPlugin({
      context() {
        return {};
      },
      partialDirectory: resolve(rootDir, 'src/partials'),
      helpers: {
        uuid() {
          return uuidv4();
        },
        ...helpers({ handlebars }),
        ...layouts(handlebars),
      },
    }),
  ],
  clearScreen: false,
};
