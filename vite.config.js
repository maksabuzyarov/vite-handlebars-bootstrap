import handlebars from 'vite-plugin-handlebars';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const rootDir = dirname(fileURLToPath(import.meta.url));

export default {
  root: 'src',
  build: {
    outDir: '../dist'
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(rootDir, 'src/partials'),
    }),
  ]
}
