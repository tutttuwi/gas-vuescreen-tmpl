import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteSingleFile } from "vite-plugin-singlefile";
// ref: https://chaika.hatenablog.com/entry/2022/05/14/083000 ('@/'とか、エイリアスimportを有効にする)
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  plugins: [
    vue(),
    viteSingleFile(),
    tsconfigPaths({ loose: true }), // ref: https://github.com/aleclarson/vite-tsconfig-paths/issues/60 {loose: true}を追加してエイリアスを設定する
  ],
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
