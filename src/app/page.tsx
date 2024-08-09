"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@3ab-users/components/ui/alert-dialog";
import { Button } from "@3ab-users/components/ui/button";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@3ab-users/components/ui/table";
import { useToast } from "@3ab-users/components/ui/use-toast";
import { UsersHeader } from "@3ab-users/components/users/users-header";
import { UsersTable } from "@3ab-users/components/users/users-table";
import { FilePenLine, TrashIcon } from "lucide-react";

export default function Home() {
  const { toast } = useToast();

  return (
    <div className="container mx-auto p-4">
      <UsersHeader />
      <UsersTable
        users={[
          {
            id: 1,
            name: "Dmitry Bubyakin",
            email: "dimabubyakin97@gmail.com",
            createdAt: "1996-06-26",
          },
          {
            id: 2,
            name: "John Doe",
            email: "dimabubyakin97@gmail.com",
            createdAt: "2000-06-26",
          },
        ]}
      />
    </div>
  );
}
