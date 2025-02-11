// src/app/(dashboard)/Categorias/page.tsx
import { ColumnData, VirtualizedTable } from "@/components/VirtualizedTable";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categorias",
  description: "En esta parte se Consultan las Categorias",
};

// Define el tipo de datos
interface Categorias {
  id: string;
  nombre: string;
  atributos: string[];
}

// Define las columnas
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

// Define los props que recibe la página.
// Nota: Puede que `searchParams` venga como objeto o como promesa.
interface PageProps {
  searchParams:
    | { [key: string]: string | string[] | undefined }
    | Promise<{ [key: string]: string | string[] | undefined }>;
}

// Componente de página asíncrono (Server Component)
export default async function Page({ searchParams }: PageProps) {
  // Asegúrate de esperar (await) a searchParams para obtener el objeto real.
  const resolvedSearchParams = await Promise.resolve(searchParams);

  const baseURL = "http://192.168.100.241:3000/api/Categorias";

  // Extrae el parámetro `nombre` de la URL (si existe)
  const nombre = resolvedSearchParams?.nombre ?? "";
  const query = nombre ? `?nombre=${nombre}` : "";
  const url = baseURL + query;

  // Realiza el fetch en el servidor.
  // Con { cache: "no-store" } aseguras que la data se actualice en cada petición.
  const response = await fetch(url, { cache: "no-store" });
  const categorias: Categorias[] = await response.json();

  return (
    <VirtualizedTable<Categorias>
      columns={categoriasColumns}
      data={categorias}
    />
  );
}
