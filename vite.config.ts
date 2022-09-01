import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import progress from "vite-plugin-progress";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            includeAssets: ["favicon.svg"],
            injectRegister: "inline",
            manifest: {
                background_color: "#000",
                description: "App where you add birthdays and gifts",
                display: "fullscreen",
                icons: [
                    {
                        purpose: "any",
                        sizes: "any",
                        src: "favicon.svg",
                        type: "image/svg+xml"
                    }
                ],
                name: "Gift List",
                short_name: "GiftList",
                theme_color: "#000"
            },
            workbox: {
                globPatterns: ["**/*.{js,html,svg, gz}"]
            }
        }),
        viteCompression(),
        progress()
    ]
});
