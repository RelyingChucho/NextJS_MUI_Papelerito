import Input from "@/components/Input";
import CustomSelect, { Option } from "@/components/OrdenarPor";

export default function Layout({ children }: { children: React.ReactNode }) {
  const ordenarOptions: Option[] = [
    { value: "asc", label: "Nombre: A-Z", param: "ordenNombre" },
    { value: "desc", label: "Nombre: Z-A", param: "ordenNombre" },
  ];
  return (
    <>
      <div className="w-full h-full flex flex-col gap-5 items-center">
        <div className="w-full h-fit flex flex-row md:flex-wrap justify-evenly gap-5">
          <Input
            variant="outlined"
            label="Nombre Categoria"
            className="w-64"
            param
            paramName="nombre"
          />
          <CustomSelect options={ordenarOptions} label="Ordenar Por:" param />
        </div>
        <div className="h-full w-full flex flex-col items-center justify-center gap-5">
          {children}
        </div>
      </div>
    </>
  );
}
