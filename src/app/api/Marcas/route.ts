import { NextResponse } from "next/server";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const whereClause: Prisma.marcasWhereInput = {};

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

    const marcas = await prisma.marcas.findMany({
      where: whereClause,
      ...(orderClause.length > 0 && { orderBy: orderClause }),
    });

    const totalMarcas = await prisma.marcas.count({
      where: whereClause,
    });

    return NextResponse.json({ marcas, totalMarcas });
  } catch (error) {
    console.error("Error en GET /api/search/marcas:", error);
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
