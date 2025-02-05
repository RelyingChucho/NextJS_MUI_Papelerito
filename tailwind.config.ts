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
      },
    },
  },
  corePlugins: {
    preflight: false, // Mantenemos desactivado el reset de Tailwind
  },
  plugins: [],
  darkMode: "class",
  important: true, // Cambiamos a true en lugar de "#__next"
} satisfies Config;
