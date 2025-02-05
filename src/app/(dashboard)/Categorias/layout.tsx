export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full bg-teal-600 dark:bg-red-600">{children}</div>
  );
}
