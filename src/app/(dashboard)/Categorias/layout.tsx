import Input from "@/components/Input";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full h-full flex flex-col gap-5 items-center">
        <Input
          variant="outlined"
          label="Nombre Categoria"
          className="w-64"
          param
          paramName="nombre"
        />
        <div className="h-full w-full">{children}</div>
      </div>
    </>
  );
}
