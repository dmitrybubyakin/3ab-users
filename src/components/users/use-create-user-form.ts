import { UserFields } from "@3ab-users/types/users";
import { useForm } from "react-hook-form";
import { useSWRConfig } from "swr";

export function useCreateUserForm(onSaved: () => void, onFailed: () => void) {
  const { mutate } = useSWRConfig();

  const methods = useForm<UserFields>();

  const handleSubmit = methods.handleSubmit(async (data) => {
    const response = await fetch(`/api/users`, {
      method: "POST",
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
