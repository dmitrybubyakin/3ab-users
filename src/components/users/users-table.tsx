"use client";

import { Table, TableBody, TableCell, TableHeader, TableRow } from "@3ab-users/components/ui/table";

import { UsersTableRow } from "@3ab-users/components/users/users-table-row";
import { User } from "@3ab-users/types/users";

type UsersTableProps = {
  users: User[];
};

export function UsersTable({ users }: UsersTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Created At</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <UsersTableRow key={user.id} user={user} />
        ))}
      </TableBody>
    </Table>
  );
}
