import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categorias",
  description: "En esta parte se Consultan las Categorias",
  authors: [{ name: "Jesus Alberto Martinez Santos" }],
  icons: "/papeleria.ico",
};

export default function Page() {
  return <div>Hola desde Categorias</div>;
}
