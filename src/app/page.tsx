"use client";
import { UsersHeader } from "@3ab-users/components/users/users-header";
import { UsersTable } from "@3ab-users/components/users/users-table";
import fetcher from "@3ab-users/lib/fetcher";
import { User } from "@3ab-users/types/users";
import useSWR from "swr";

export default function Home() {
  const { data } = useSWR<User[]>("/api/users", fetcher);

  return (
    <div className="container mx-auto p-4">
      <UsersHeader />
      <UsersTable users={data ?? []} />
    </div>
  );
}
