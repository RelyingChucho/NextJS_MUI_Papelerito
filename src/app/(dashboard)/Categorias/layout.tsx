import { Skeleton } from "@mui/material";
import { Suspense } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense
      fallback={<Skeleton variant="rounded" width={"100%"} height={"100%"} />}
    >
      <div className="h-full w-full">{children}</div>
    </Suspense>
  );
}
