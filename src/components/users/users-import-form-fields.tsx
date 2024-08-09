import { Input } from "@3ab-users/components/ui/input";
import { Label } from "@3ab-users/components/ui/label";
import { ImportUsersFields } from "@3ab-users/types/users";
import { useFormContext } from "react-hook-form";

export function UsersImportFormFields() {
  const { register } = useFormContext<ImportUsersFields>();

  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="file" className="text-right">
          File
        </Label>
        <Input
          id="file"
          type="file"
          className="col-span-3"
          accept=".xlsx"
          required
          {...register("file")}
        />
      </div>
    </div>
  );
}
