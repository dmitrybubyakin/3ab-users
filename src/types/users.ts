export type User = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
};

export type UserFields = Omit<User, "id">;

export type ImportUsersFields = {
  file: FileList;
};
