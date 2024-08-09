import { User, UserFields } from "@3ab-users/types/users";
import { useForm } from "react-hook-form";

export function useUpdateUserForm({ id, ...user }: User, onSaved: () => void) {
  const methods = useForm<UserFields>({
    defaultValues: {
      ...user,
    },
  });

  const handleSubmit = methods.handleSubmit(async (data) => {
    console.log(`Updating user #${id} with ${JSON.stringify(data)}`); // TODO: api
    await new Promise((resolve) => setTimeout(resolve, 1500));
    onSaved();
  });

  return { methods, handleSubmit };
}
