import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import { viteSingleFile } from 'vite-plugin-singlefile';
// ref: https://chaika.hatenablog.com/entry/2022/05/14/083000 ('@/'とか、エイリアスimportを有効にする)
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['v-list-recognize-title'].includes(tag)
        }
      }
    }),
    vuetify({
      autoImport: true
    }),
    // テンプレート側設定
    viteSingleFile(),
    tsconfigPaths({ loose: true }), // ref: https://github.com/aleclarson/vite-tsconfig-paths/issues/60 {loose: true}を追加してエイリアスを設定する
    basicSsl()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
    // テンプレート側設定
    // alias: {
    //   "@": resolve(__dirname, "./src"),
    // },
  },
  css: {
    preprocessorOptions: {
      scss: {}
    }
  },
  build: {
    chunkSizeWarningLimit: 1024 * 1024, // Set the limit to 1 MB
    // テンプレート側設定
    outDir: '../dist',
    emptyOutDir: true
  },
  optimizeDeps: {
    exclude: ['vuetify'],
    entries: ['./src/**/*.vue']
  }
});
