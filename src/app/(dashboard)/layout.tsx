import * as React from "react";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import ThemeToggle from "@/themeToggle";
import { NextAppProvider } from "@toolpad/core/nextjs";
import { NAVIGATION } from "@/app/(dashboard)/navigation";

export default function DashboardPagesLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <NextAppProvider navigation={NAVIGATION}>
      <DashboardLayout slots={{ toolbarActions: ThemeToggle }}>
        <PageContainer>{props.children}</PageContainer>
      </DashboardLayout>
    </NextAppProvider>
  );
}
