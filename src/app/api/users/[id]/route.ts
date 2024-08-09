import prisma from "@3ab-users/lib/prisma";
import { User } from "@prisma/client";

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);

  const body = await req.json();

  const data: Omit<User, "id"> = {
    name: body.name,
    email: body.email,
    createdAt: new Date(body.createdAt),
  };

  const result = await prisma.user.update({ where: { id }, data });

  return Response.json(result);
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);

  await prisma.user.delete({ where: { id } });

  return Response.json({});
}
