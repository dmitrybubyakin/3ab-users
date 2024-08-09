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
import { useImportUsersForm } from "@3ab-users/components/users/use-import-users-form";
import { UsersImportFormFields } from "@3ab-users/components/users/users-import-form-fields";
import { useCallback, useState } from "react";
import { FormProvider } from "react-hook-form";

type UsersImportDialogProps = {
  trigger: React.ReactNode;
};

export function UsersImportDialog({ trigger }: UsersImportDialogProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const { methods, handleSubmit } = useImportUsersForm(
    useCallback(() => {
      toast({ description: "Items imported successfully!" });
      setOpen(false);
    }, [toast]),
    useCallback(
      (description: string) => {
        toast({ variant: "destructive", description });
      },
      [toast],
    ),
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Import Items</DialogTitle>
              <DialogDescription>Select the xlsx file</DialogDescription>
            </DialogHeader>
            <UsersImportFormFields />
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
