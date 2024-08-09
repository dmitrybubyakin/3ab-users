import { UserFields } from "@3ab-users/types/users";
import { useForm } from "react-hook-form";

export function useCreateUserForm(onCreated: () => void) {
  const methods = useForm<UserFields>();

  const handleSubmit = methods.handleSubmit(async (data) => {
    console.log(`Updating user with ${JSON.stringify(data)}`); // TODO: api
    await new Promise((resolve) => setTimeout(resolve, 1500));
    onCreated();
  });

  return { methods, handleSubmit };
}
