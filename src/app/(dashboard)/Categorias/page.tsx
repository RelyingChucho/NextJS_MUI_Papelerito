// src/app/(dashboard)/Categorias/page.tsx
import DeleteParams from "@/components/DeleteParams";
import Total from "@/components/Total";
import { ColumnData, VirtualizedTable } from "@/components/VirtualizedTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categorias",
  description: "En esta parte se Consultan las Categorias",
};

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
export default async function Page({ searchParams }: PageProps) {
  // Al ser searchParams un Promise, lo resolvemos:
  const resolvedSearchParams = await searchParams;

  const baseURL = "http://192.168.100.241:3000/api/Categorias";

  // Construye los parámetros de búsqueda
  const params = new URLSearchParams();
  if (resolvedSearchParams?.nombre) {
    params.append("nombre", resolvedSearchParams.nombre as string);
  }
  if (resolvedSearchParams?.ordenNombre) {
    params.append("ordenNombre", resolvedSearchParams.ordenNombre as string);
  }

  // Arma la URL final
  const url = params.toString() ? `${baseURL}?${params.toString()}` : baseURL;
  console.log("Fetch URL:", url);

  // Realiza el fetch con cache "no-store"
  const response = await fetch(url, { cache: "no-store" });

  // Verifica que la respuesta sea correcta
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error en la petición: ${response.status} - ${errorText}`);
  }

  // Interpreta la respuesta como CategoriasApiResponse
  const responseData: CategoriasApiResponse = await response.json();

  // Transforma cada categoría para que se adapte a la interfaz Categorias
  const formattedCategorias: Categorias[] =
    responseData.categoriasFormateadas.map((item) => ({
      id: item.id,
      nombre: item.nombre,
      // En este ejemplo dejamos la cadena sin transformar, pero aquí podrías separar la cadena en arreglo si lo requieres.
      atributos: item.atributos,
    }));

  return (
    <>
      <VirtualizedTable<Categorias>
        columns={categoriasColumns}
        data={formattedCategorias}
      />
      <div className="w-full flex flex-wrap justify-around items-center gap-5">
        <Total
          total={responseData.totalCategorias}
          label="Total de Categorias: "
        />
        <DeleteParams />
      </div>
    </>
  );
}
