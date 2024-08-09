import { Button } from "@3ab-users/components/ui/button";
import { TableCell, TableRow } from "@3ab-users/components/ui/table";
import { UserDeleteAlert } from "@3ab-users/components/users/user-delete-alert";
import { UserUpdateDialog } from "@3ab-users/components/users/user-update-dialog";
import { formatDate } from "@3ab-users/lib/utils";
import { User } from "@3ab-users/types/users";
import { FilePenLine, TrashIcon } from "lucide-react";

type UsersTableRowProps = {
  user: User;
};

export function UsersTableRow({ user }: UsersTableRowProps) {
  return (
    <TableRow>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{formatDate(new Date(user.createdAt))}</TableCell>
      <TableCell>
        <div className="flex space-x-2">
          <UserUpdateDialog
            trigger={
              <Button variant="outline" size="icon">
                <FilePenLine className="w-4 h-4" />
              </Button>
            }
            user={user}
          />
          <UserDeleteAlert
            trigger={
              <Button variant="outline" size="icon" color="red">
                <TrashIcon className="w-4 h-4" />
              </Button>
            }
            user={user}
          />
        </div>
      </TableCell>
    </TableRow>
  );
}
