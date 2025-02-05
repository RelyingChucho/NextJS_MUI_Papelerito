import * as React from "react";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import ThemeToggle from "@/themeToggle";

export default function DashboardPagesLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayout slots={{ toolbarActions: ThemeToggle }}>
      <PageContainer>{props.children}</PageContainer>
    </DashboardLayout>
  );
}
