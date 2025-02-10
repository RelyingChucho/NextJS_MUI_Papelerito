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

    const categorias = await prisma.categorias.findMany({
      where: whereClause,
    });

    // Formatear los atributos
    const categoriasFormateadas = categorias.map((categoria) => ({
      ...categoria,
      atributos: Array.isArray(categoria.atributos)
        ? categoria.atributos.join(", ")
        : "",
    }));

    return NextResponse.json(categoriasFormateadas);
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
