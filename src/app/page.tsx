import ThemeToggle from "@/themeToggle";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <p className="dark:text-red-600 text-blue-600">Color</p>
    </>
  );
}
