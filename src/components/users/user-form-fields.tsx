import { Input } from "@3ab-users/components/ui/input";
import { Label } from "@3ab-users/components/ui/label";
import { UserFields } from "@3ab-users/types/users";
import { useFormContext } from "react-hook-form";

export function UserFormFields() {
  const { register } = useFormContext<UserFields>();

  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Name
        </Label>
        <Input id="name" className="col-span-3" required {...register("name")} />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="email" className="text-right">
          Email
        </Label>
        <Input id="email" type="email" className="col-span-3" required {...register("email")} />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="createdAt" className="text-right">
          Created At
        </Label>
        <Input
          id="createdAt"
          type="date"
          className="col-span-3"
          required
          {...register("createdAt")}
        />
      </div>
    </div>
  );
}
