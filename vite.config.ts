import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import Unfonts from "unplugin-fonts/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    react(),
    Unfonts({
      google: {
        families: [
          {
            name: "Fira Code",
            styles: "ital,wght@0,400..700;1,400..700",
          },
        ],
      },
    }),
  ],
});
