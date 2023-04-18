/*
 * @Date: 2023-03-29 13:09:36
 * @LastEditors: Zrui
 * @LastEditTime: 2023-04-18 19:33:56
 * @FilePath: /ZruiBlog/vite.config.ts
 * @Description: 描述
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8060,
  },
});
