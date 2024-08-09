import { ImportUsersFields } from "@3ab-users/types/users";
import { useForm } from "react-hook-form";

export function useImportUsersForm(onImported: () => void, onFailed: (error: string) => void) {
  const methods = useForm<ImportUsersFields>();

  const handleSubmit = methods.handleSubmit(async (data) => {
    try {
      console.log(`Importing users from ${data.file[0].name}`); // TODO: api
      await new Promise((resolve) => setTimeout(resolve, 1500));
      onImported();
    } catch (e) {
      console.error(e);
      onFailed("Importing users failed");
    }
  });

  return { methods, handleSubmit };
}
