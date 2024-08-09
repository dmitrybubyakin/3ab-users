import { ImportUsersFields } from "@3ab-users/types/users";
import { useForm } from "react-hook-form";
import { useSWRConfig } from "swr";

export function useImportUsersForm(onImported: () => void, onFailed: () => void) {
  const { mutate } = useSWRConfig();

  const methods = useForm<ImportUsersFields>();

  const handleSubmit = methods.handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);

    const response = await fetch(`/api/users/import`, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      mutate("/api/users");
      onImported();
    } else {
      onFailed();
    }
  });

  return { methods, handleSubmit };
}
