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
  const resolvedSearchParams = await Promise.resolve(searchParams);
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

  // Opcional: Verifica que el response esté bien
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error en la petición: ${response.status} - ${errorText}`);
  }

  const categorias: Categorias[] = await response.json();

  return (
    <VirtualizedTable<Categorias>
      columns={categoriasColumns}
      data={categorias}
    />
  );
}
