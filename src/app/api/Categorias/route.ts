import { NextResponse } from "next/server";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const whereClause: Prisma.categoriasWhereInput = {};

    if (searchParams.has("nombre")) {
      whereClause.nombre = {
        contains: searchParams.get("nombre") || "",
      };
    }

    const orderClause: Prisma.categoriasOrderByWithRelationInput[] = [];

    // Ordenar por "nombre"
    if (searchParams.has("ordenNombre")) {
      const ordenNombre = searchParams.get("ordenNombre");
      if (ordenNombre === "asc" || ordenNombre === "desc") {
        orderClause.push({ nombre: ordenNombre });
      }
    }

    const categorias = await prisma.categorias.findMany({
      where: whereClause,
      ...(orderClause.length > 0 && { orderBy: orderClause }),
    });

    const totalCategorias = await prisma.categorias.count({
      where: whereClause,
    });

    // Formatear los atributos
    const categoriasFormateadas = categorias.map((categoria) => ({
      ...categoria,
      atributos: Array.isArray(categoria.atributos)
        ? categoria.atributos.join(", ")
        : "",
    }));

    return NextResponse.json({ categoriasFormateadas, totalCategorias });
  } catch (error) {
    console.error("Error en GET /api/search/categoria:", error);
    return NextResponse.json(
      {
        error: "Error interno del servidor",
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
