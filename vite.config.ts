import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
  /**
   * Defines global constant replacments
   * @see https://vitejs.dev/config/shared-options.html#define
   */
  define: {
    global: "globalThis",
  },
  /**
   * Enables react
   * @see https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md
   */
  plugins: [react()],
});
