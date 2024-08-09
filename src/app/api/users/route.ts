import prisma from "@3ab-users/lib/prisma";
import { User } from "@prisma/client";

export async function GET() {
  const result = await prisma.user.findMany();

  return Response.json(result);
}

export async function POST(req: Request) {
  const body = await req.json();

  const data: Omit<User, "id"> = {
    name: body.name,
    email: body.email,
    createdAt: new Date(body.createdAt),
  };

  const result = await prisma.user.create({ data });

  return Response.json(result);
}

export async function DELETE() {
  await prisma.user.deleteMany();

  return Response.json({});
}
