import * as React from "react";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import ThemeToggle from "@/themeToggle";
import { NextAppProvider } from "@toolpad/core/nextjs";
import { NAVIGATION } from "@/app/(dashboard)/navigation";
import { Skeleton, Typography } from "@mui/material";
import Image from "next/image";
import { Suspense } from "react";

export default function DashboardPagesLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={<Skeleton variant="rounded" width={"100%"} height={"100%"} />}
    >
      <NextAppProvider
        navigation={NAVIGATION}
        branding={{
          logo: (
            <Image
              src="/papeleria.gif"
              alt=""
              width={40}
              height={40}
              unoptimized
            />
          ),
          homeUrl: "/",
          title: (
            <Typography className="text-teal-600 dark:text-white font-cormorantGaramond text-lg sm:text-2xl md:text-3xl font-bold">
              EL GRAN PAPELERITO
            </Typography>
          ) as unknown as string,
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
    </Suspense>
  );
}
