// src/app/(dashboard)/Categorias/page.tsx
import DeleteParams from "@/components/DeleteParams";
import Total from "@/components/Total";
import { ColumnData, VirtualizedTable } from "@/components/VirtualizedTable";
import { Metadata } from "next";
import Alerta from "@/components/Alerta";
import Input from "@/components/Input";
import CustomSelect, { Option } from "@/components/OrdenarPor";

export const metadata: Metadata = {
  title: "Categorias",
  description: "En esta parte se Consultan las Categorias",
};

const ordenarOptions: Option[] = [
  { value: "asc", label: "Nombre: A-Z", param: "ordenNombre" },
  { value: "desc", label: "Nombre: Z-A", param: "ordenNombre" },
];

// La interfaz que usará tu tabla
interface Categorias {
  id: number;
  nombre: string;
  atributos: string; // Convertiremos la cadena en un arreglo (o lo dejamos como string si así lo deseas)
}

// Interfaz para la respuesta del API
interface CategoriasApiResponse {
  categoriasFormateadas: Categorias[];
  totalCategorias: number;
}

// Define las columnas para la tabla
const categoriasColumns: ColumnData<Categorias>[] = [
  {
    dataKey: "nombre",
    label: "Nombre",
    width: 200,
  },
  {
    dataKey: "atributos",
    label: "Atributos",
    width: 150,
  },
];

// Define los props que recibe la página
interface PageProps {
  // Nota: Next.js espera que searchParams sea un Promise (o undefined)
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// Componente de página asíncrono (Server Component)
// ... (imports y metadatos permanecen iguales)

export default async function Page({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const baseURL = "http://192.168.100.241:3000/api/Categorias";

  let formattedCategorias: Categorias[] = [];
  let totalCategorias = 0;
  let status = 200;

  try {
    const params = new URLSearchParams();
    if (resolvedSearchParams?.nombre) {
      params.append("nombre", resolvedSearchParams.nombre as string);
    }
    if (resolvedSearchParams?.ordenNombre) {
      params.append("ordenNombre", resolvedSearchParams.ordenNombre as string);
    }

    const url = params.toString() ? `${baseURL}?${params.toString()}` : baseURL;
    const response = await fetch(url, { cache: "no-store" });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error en la petición:", errorText);
      status = response.status;
    } else {
      const responseData: CategoriasApiResponse = await response.json();
      formattedCategorias = responseData.categoriasFormateadas.map((item) => ({
        id: item.id,
        nombre: item.nombre,
        atributos: item.atributos,
      }));
      totalCategorias = responseData.totalCategorias;
    }
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }

  return (
    <>
      <div className="h-full w-full flex flex-col items-center justify-center gap-5">
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
        {status === 200 ? (
          <Alerta severity="success" text="Categorias Encontradas" />
        ) : (
          <Alerta severity="error" text="Error al Buscar las Categorias" />
        )}
        <VirtualizedTable<Categorias>
          columns={categoriasColumns}
          data={formattedCategorias}
        />
        <div className="w-full flex flex-wrap justify-around items-center gap-5">
          <Total total={totalCategorias} label="Total de Categorias: " />
          <DeleteParams />
        </div>
      </div>
    </>
  );
}
