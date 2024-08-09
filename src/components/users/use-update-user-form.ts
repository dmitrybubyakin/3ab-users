import { formatDate } from "@3ab-users/lib/utils";
import { User, UserFields } from "@3ab-users/types/users";
import { useForm } from "react-hook-form";
import { useSWRConfig } from "swr";

export function useUpdateUserForm(
  { id, ...user }: User,
  onSaved: () => void,
  onFailed: () => void,
) {
  const { mutate } = useSWRConfig();

  const methods = useForm<UserFields>({
    defaultValues: {
      ...user,
      createdAt: formatDate(new Date(user.createdAt)),
    },
  });

  const handleSubmit = methods.handleSubmit(async (data) => {
    const response = await fetch(`/api/users/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      mutate("/api/users");
      onSaved();
    } else {
      onFailed();
    }
  });

  return { methods, handleSubmit };
}
