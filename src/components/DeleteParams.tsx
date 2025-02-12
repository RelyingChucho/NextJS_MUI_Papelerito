"use client";

import { useRouter, usePathname } from "next/navigation";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function DeleteParams() {
  const router = useRouter();
  const pathname = usePathname();

  const handleDeleteParams = () => {
    // Navega a la misma ruta sin los parámetros de búsqueda
    router.push(pathname);
  };

  return (
    <Button
      variant="outlined"
      startIcon={<DeleteIcon />}
      onClick={handleDeleteParams}
      className="rounded-full h-10 border-teal-600 text-white bg-teal-600 hover:scale-110 transition-transform duration-300 font-libre-baskerville"
    >
      Borrar Filtros
    </Button>
  );
}
