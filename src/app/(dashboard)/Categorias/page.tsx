import { ColumnData, VirtualizedTable } from "@/components/VirtualizedTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categorias",
  description: "En esta parte se Consultan las Categorias",
};

// 1. Define tu tipo de datos
interface Categorias {
  id: string;
  nombre: string;
  atributos: string[];
}

// 2. Define las columnas
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


export default async function Page() {
  const data = await fetch("http://192.168.100.241:3000/api/Categorias");

  const categorias: Categorias[] = await data.json();

  console.log(categorias);

  return (
    <VirtualizedTable<Categorias>
      columns={categoriasColumns}
      data={categorias}
    />
  );
}
