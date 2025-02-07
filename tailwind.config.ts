import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Asegurar que cubre toda la estructura
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blancoPrincipal: "#F3F4F6",
        blaconSecundario: "#FFFEFE",
        oscuroPrincipal: "#252728",
        oscuroSecundario: "#1D1C1C",
      },
      fontFamily: {
        lora: "var(--font-lora)",
        likeBaskerville: "var(--font-like_baskerville)",
        cormorantGaramond: "var(--font-cormorant_garamond)",
      },
    },
  },
  corePlugins: {
    preflight: false, // Mantenemos desactivado el reset de Tailwind
  },
  plugins: [],
  darkMode: ["class", '[data-toolpad-color-scheme="dark"]'],
  important: true, // Cambiamos a true en lugar de "#__next"
} satisfies Config;
