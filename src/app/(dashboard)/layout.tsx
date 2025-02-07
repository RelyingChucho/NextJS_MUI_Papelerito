import * as React from "react";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import ThemeToggle from "@/themeToggle";
import { NextAppProvider } from "@toolpad/core/nextjs";
import { NAVIGATION } from "@/app/(dashboard)/navigation";
import { Typography } from "@mui/material";

export default function DashboardPagesLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <NextAppProvider
      navigation={NAVIGATION}
      branding={{
        logo: <img src="/papeleria.gif" />,
        homeUrl: "/",
        title: (
          <Typography className="text-teal-600 dark:text-white font-cormorantGaramond text-xl sm:text-2xl md:text-3xl font-bold">
            EL GRAN PAPELERITO
          </Typography>
        ),
      }}
    >
      <DashboardLayout
        slots={{ toolbarActions: ThemeToggle }}
        sidebarExpandedWidth={275}
        sx={{
          // Estilos para los ítems del menú
          ".MuiListItemButton-root": {
            "&:hover": {
              backgroundColor: "#0f766e", // Color al pasar el mouse
              color: "#FFFFFF",
              ".MuiSvgIcon-root": {
                color: "#FFFFFF",
              },
            },
            "&.Mui-selected": {
              backgroundColor: "#0d9488", // Color cuando el ítem está seleccionado
              ".MuiSvgIcon-root": {
                color: "#FFFFFF",
              },
              ".MuiTypography-root": {
                color: "#FFFFFF",
              },
            },
            "&.Mui-selected:hover": {
              backgroundColor: "#2dd4bf", // Color cuando el ítem seleccionado tiene hover
            },
          },
        }}
      >
        <div className="p-5 h-full w-full">{props.children}</div>
      </DashboardLayout>
    </NextAppProvider>
  );
}
