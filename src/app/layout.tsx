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
  variable: "--font-lora",
  subsets: ["latin"],
});

const likeBaskerville = Libre_Baskerville({
  variable: "--font-like_baskerville",
  subsets: ["latin"],
  weight: "400",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant_garamond",
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
        className={`${lora.variable} ${likeBaskerville.variable} ${cormorantGaramond.variable} antialiased`}
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
