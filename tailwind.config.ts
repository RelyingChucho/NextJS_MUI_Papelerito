import type { Config } from "tailwindcss";

export default {
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
    },
  },
  plugins: [],
  important: true, // Cambiamos a true en lugar de "#__next"
} satisfies Config;
