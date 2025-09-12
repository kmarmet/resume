import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
 esbuild: {
  loader: "jsx", // or 'tsx' for TypeScript with JSX
  include: [/src\/.*\.[jt]sx?$/, /src\/.*\.css$/],
 },
 build: {
  assetsDir: ".",
  outDir: "dist",
  emptyOutDir: true,
  minify: "esbuild", // default, very fast
 },

 plugins: [react()],
});
