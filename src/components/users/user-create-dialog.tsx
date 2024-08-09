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
import { useCreateUserForm } from "@3ab-users/components/users/use-create-user-form";
import { UserFormFields } from "@3ab-users/components/users/user-form-fields";
import { useCallback, useState } from "react";
import { FormProvider } from "react-hook-form";

type UserCreateDialogProps = {
  trigger: React.ReactNode;
};

export function UserCreateDialog({ trigger }: UserCreateDialogProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const { methods, handleSubmit } = useCreateUserForm(
    useCallback(() => {
      toast({ description: "Item created successfully!" });
      setOpen(false);
    }, [toast]),
    useCallback(() => {
      toast({ variant: "destructive", description: "Item creating failed!" });
    }, [toast]),
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Create New Item</DialogTitle>
              <DialogDescription>Fill in the details for the new item</DialogDescription>
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
