import { User } from "@3ab-users/types/users";
import { useCallback, useState } from "react";

export function useDeleteUser(onDeleted: () => void) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = useCallback(
    async (user: User) => {
      try {
        setIsLoading(true);
        console.log(`Deleting user #${user.id}`); // TODO: api
        await new Promise((resolve) => setTimeout(resolve, 1500));
        onDeleted();
      } finally {
        setIsLoading(false);
      }
    },
    [onDeleted],
  );

  return { handleDelete, isLoading };
}
