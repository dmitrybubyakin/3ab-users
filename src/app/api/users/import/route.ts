import prisma from "@3ab-users/lib/prisma";
import { User } from "@prisma/client";
import xlsx from "node-xlsx";

export async function POST(req: Request) {
  const formData = await req.formData();

  const file = formData.get("file") as File;

  const [worksheet] = xlsx.parse(await file.arrayBuffer());

  if (!worksheet) {
    return Response.json([]);
  }

  const result = await prisma.user.createMany({
    data: worksheet.data.slice(1).map(([, name, email, createdAt]: string[]) => {
      return {
        name,
        email,
        createdAt: new Date(createdAt),
      } satisfies Omit<User, "id">;
    }),
  });

  return Response.json(result, { status: 201 });
}
