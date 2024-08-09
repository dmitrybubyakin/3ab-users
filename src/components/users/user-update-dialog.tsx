"use client";

import { Button } from "@3ab-users/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@3ab-users/components/ui/dialog";
import { useToast } from "@3ab-users/components/ui/use-toast";
import { useUpdateUserForm } from "@3ab-users/components/users/use-update-user-form";
import { UserFormFields } from "@3ab-users/components/users/user-form-fields";
import { User } from "@3ab-users/types/users";
import { useCallback, useState } from "react";
import { FormProvider } from "react-hook-form";

type UserUpdateDialogProps = {
  trigger: React.ReactNode;
  user: User;
};

export function UserUpdateDialog({ trigger, user }: UserUpdateDialogProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const { methods, handleSubmit } = useUpdateUserForm(
    user,
    useCallback(() => {
      toast({ description: "Item updated successfully!" });
      setOpen(false);
    }, [toast]),
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Edit Item</DialogTitle>
              <DialogDescription>Update the item details</DialogDescription>
            </DialogHeader>
            <UserFormFields />
            <DialogFooter>
              <Button type="submit" loading={methods.formState.isSubmitting}>
                Save
              </Button>
              <DialogClose asChild>
                <Button variant="outline" disabled={methods.formState.isSubmitting}>
                  Cancel
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
