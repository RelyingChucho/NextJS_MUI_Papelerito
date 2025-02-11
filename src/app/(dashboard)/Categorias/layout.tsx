import Input from "@/components/Input";
import CustomSelect, { Option } from "@/components/OrdenarPor";

export default function Layout({ children }: { children: React.ReactNode }) {
  const ordenarOptions: Option[] = [
    { value: "asc", label: "Ascendente", param: "ordenNombre" },
    { value: "desc", label: "Descendente", param: "ordenNombre" },
  ];
  return (
    <>
      <div className="w-full h-full flex flex-col gap-5 items-center">
        <div className="w-full h-fit flex flex-row flex-wrap justify-evenly">
          <Input
            variant="outlined"
            label="Nombre Categoria"
            className="w-64"
            param
            paramName="nombre"
          />
          <CustomSelect options={ordenarOptions} label="Ordenar Por" param />
        </div>
        <div className="h-full w-full">{children}</div>
      </div>
    </>
  );
}
