// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";
import { defineConfig } from "file:///C:/workspace/vue3-mars/node_modules/.pnpm/vite@4.1.4_@types+node@18.14.2/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/workspace/vue3-mars/node_modules/.pnpm/@vitejs+plugin-vue@4.0.0_vite@4.1.4_vue@3.2.47/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///C:/workspace/vue3-mars/node_modules/.pnpm/vite-plugin-dts@2.2.0_@types+node@18.14.2_vite@4.1.4/node_modules/vite-plugin-dts/dist/index.mjs";
import { vitePluginMars3d } from "file:///C:/workspace/vue3-mars/node_modules/.pnpm/vite-plugin-mars3d@2.1.0/node_modules/vite-plugin-mars3d/dist/index.js";
var __vite_injected_original_dirname = "C:\\workspace\\vue3-mars";
var __vite_injected_original_import_meta_url = "file:///C:/workspace/vue3-mars/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    dts({ include: "./packages" }),
    vitePluginMars3d()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "packages/index.ts"),
      name: "vue3Mars3d",
      fileName: "vue3-mars3d"
    },
    rollupOptions: {
      external: ["vue", "mars3d"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
          mars3d: "mars3d"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFx3b3Jrc3BhY2VcXFxcdnVlMy1tYXJzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFx3b3Jrc3BhY2VcXFxcdnVlMy1tYXJzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi93b3Jrc3BhY2UvdnVlMy1tYXJzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcblxyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xyXG5pbXBvcnQgeyB2aXRlUGx1Z2luTWFyczNkIH0gZnJvbSAndml0ZS1wbHVnaW4tbWFyczNkJ1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgICB2dWUoKSxcclxuICAgICAgICBkdHMoeyBpbmNsdWRlOiAnLi9wYWNrYWdlcycgfSksXHJcbiAgICAgICAgdml0ZVBsdWdpbk1hcnMzZCgpXHJcbiAgICBdLFxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICAgIGFsaWFzOiB7XHJcbiAgICAgICAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgICAgbGliOiB7XHJcbiAgICAgICAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3BhY2thZ2VzL2luZGV4LnRzJyksXHJcbiAgICAgICAgICAgIG5hbWU6ICd2dWUzTWFyczNkJyxcclxuICAgICAgICAgICAgZmlsZU5hbWU6ICd2dWUzLW1hcnMzZCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgZXh0ZXJuYWw6IFsndnVlJywgJ21hcnMzZCddLFxyXG4gICAgICAgICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydHM6ICduYW1lZCcsXHJcbiAgICAgICAgICAgICAgICBnbG9iYWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdnVlOiAnVnVlJyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJzM2Q6ICdtYXJzM2QnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBQLFNBQVMsZUFBZSxXQUFXO0FBRTdSLFNBQVMsZUFBZTtBQUN4QixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsd0JBQXdCO0FBTmpDLElBQU0sbUNBQW1DO0FBQWdILElBQU0sMkNBQTJDO0FBUzFNLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVM7QUFBQSxJQUNMLElBQUk7QUFBQSxJQUNKLElBQUksRUFBRSxTQUFTLGFBQWEsQ0FBQztBQUFBLElBQzdCLGlCQUFpQjtBQUFBLEVBQ3JCO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDTCxPQUFPO0FBQUEsTUFDSCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3hEO0FBQUEsRUFDSjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0gsS0FBSztBQUFBLE1BQ0QsT0FBTyxRQUFRLGtDQUFXLG1CQUFtQjtBQUFBLE1BQzdDLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNkO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDWCxVQUFVLENBQUMsT0FBTyxRQUFRO0FBQUEsTUFDMUIsUUFBUTtBQUFBLFFBQ0osU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLFVBQ0wsS0FBSztBQUFBLFVBQ0wsUUFBUTtBQUFBLFFBQ1o7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
