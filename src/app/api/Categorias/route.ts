import { NextResponse } from "next/server";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Definir tipo para el filtro WHERE
    const whereClause: Prisma.categoriasWhereInput = {};

    // Construir filtro
    if (searchParams.has("nombre")) {
      whereClause.nombre = {
        contains: searchParams.get("nombre") || "",
      };
    }

    const categorias = await prisma.categorias.findMany({
      where: whereClause,
    });

    return NextResponse.json(categorias);
  } catch (error) {
    console.error("Error en GET /api/search/categoria:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}