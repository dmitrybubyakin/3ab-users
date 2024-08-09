import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@3ab-users/components/ui/alert-dialog";
import { Button } from "@3ab-users/components/ui/button";
import { useToast } from "@3ab-users/components/ui/use-toast";
import { useDeleteUser } from "@3ab-users/components/users/use-delete-user";
import { User } from "@3ab-users/types/users";
import { useCallback, useState } from "react";

type UserDeleteAlertProps = {
  trigger: React.ReactNode;
  user: User;
};

export function UserDeleteAlert({ trigger, user }: UserDeleteAlertProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const { handleDelete, isLoading } = useDeleteUser(
    useCallback(() => {
      toast({ description: "Item deleted successfully!" });
      setOpen(false);
    }, [toast]),
  );

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button onClick={() => handleDelete(user)} loading={isLoading}>
            Delete
          </Button>
          <AlertDialogCancel disabled={isLoading}>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
