import Input from "@/components/Input";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Input variant="outlined" label="Nombre Categoria" />
      <div className="h-full w-full mt-5">{children}</div>
    </>
  );
}
