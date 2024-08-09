import { User } from "@3ab-users/types/users";
import { useCallback, useState } from "react";
import { useSWRConfig } from "swr";

export function useDeleteUser(onDeleted: () => void, onFailed: () => void) {
  const { mutate } = useSWRConfig();
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = useCallback(
    async (user: User) => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/users/${user.id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
          mutate("/api/users");
          onDeleted();
        } else {
          onFailed();
        }
      } finally {
        setIsLoading(false);
      }
    },
    [onDeleted],
  );

  return { handleDelete, isLoading };
}
