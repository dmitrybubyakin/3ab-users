import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@3ab-users/components/ui/alert-dialog";
import { Button } from "@3ab-users/components/ui/button";
import { useToast } from "@3ab-users/components/ui/use-toast";
import { useDeleteAllUsers } from "@3ab-users/components/users/use-delete-all-users";
import { useCallback, useState } from "react";

type UsersDeleteAllAlertProps = {
  trigger: React.ReactNode;
};

export function UsersDeleteAllAlert({ trigger }: UsersDeleteAllAlertProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const { handleDelete, isLoading } = useDeleteAllUsers(
    useCallback(() => {
      toast({ description: "Items deleted successfully!" });
      setOpen(false);
    }, [toast]),
    useCallback(() => {
      toast({ variant: "destructive", description: "Items deleting failed!" });
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
          <Button onClick={() => handleDelete()} loading={isLoading}>
            Delete
          </Button>
          <AlertDialogCancel disabled={isLoading}>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
