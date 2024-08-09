import { User as PrismaUser } from "@prisma/client";

export type User = Omit<PrismaUser, "createdAt"> & {
  createdAt: string;
};

export type UserFields = Omit<User, "id" | "createdAt"> & {
  createdAt: string;
};

export type ImportUsersFields = {
  file: FileList;
};
