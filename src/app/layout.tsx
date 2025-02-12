import type { Metadata } from "next";
import { Lora, Libre_Baskerville, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme";

const lora = Lora({
  variable: "--font-lora", // ✔️ Coincide con Tailwind
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville", // Usar guión en lugar de underscore
  subsets: ["latin"],
  weight: "400",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond", // Usar guión en lugar de underscore
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "El Gran Papelerito",
  description: "Aplicacion para controlar el Inventario de la papeleria",
  authors: [{ name: "Jesus Alberto Martinez Santos" }],
  icons: "/papeleria.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${lora.variable} ${libreBaskerville.variable} ${cormorantGaramond.variable} antialiased [--mui-palette-background-paper:#FFFEFE] dark:[--mui-palette-background-paper:#1D1C1C]`}
      >
        <StyledEngineProvider injectFirst>
          <InitColorSchemeScript attribute="data-toolpad-color-scheme" />
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline /> {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </StyledEngineProvider>
      </body>
    </html>
  );
}
