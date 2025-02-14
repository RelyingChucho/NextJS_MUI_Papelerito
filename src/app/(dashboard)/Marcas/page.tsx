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
interface Marcas {
  id: number;
  nombre: string;
}

// Interfaz para la respuesta del API
interface MarcasApiResponse {
  marcas: Marcas[];
  totalMarcas: number;
}

// Define las columnas para la tabla
const MarcasColumns: ColumnData<Marcas>[] = [
  {
    dataKey: "nombre",
    label: "Nombre",
    width: 200,
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

  const baseURL = "http://192.168.100.241:3000/api/Marcas";

  let marcas: Marcas[] = [];
  let totalMarcas = 0;

  try {
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
      console.error("Error en la petición:", errorText);
    } else {
      // Interpreta la respuesta como CategoriasApiResponse
      const responseData: MarcasApiResponse = await response.json();

      // Transforma cada categoría para que se adapte a la interfaz Categorias
      marcas = responseData.marcas.map((item) => ({
        id: item.id,
        nombre: item.nombre,
      }));
      totalMarcas = responseData.totalMarcas;
    }
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }

  return (
    <>
      <VirtualizedTable<Marcas> columns={MarcasColumns} data={marcas} />
      <div className="w-full flex flex-wrap justify-around items-center gap-5">
        <Total total={totalMarcas} label="Total de Categorias: " />
        <DeleteParams />
      </div>
    </>
  );
}
