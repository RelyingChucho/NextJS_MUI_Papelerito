import * as React from "react";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
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
      <DashboardLayout slots={{ toolbarActions: ThemeToggle }} sidebarExpandedWidth={275} >
        <div className="p-5 h-full w-full">{props.children}</div>
      </DashboardLayout>
    </NextAppProvider>
  );
}
