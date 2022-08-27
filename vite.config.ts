import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import progress from "vite-plugin-progress";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), viteCompression(), progress()],
});
