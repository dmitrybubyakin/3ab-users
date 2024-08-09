"use client";

import { Button } from "@3ab-users/components/ui/button";
import { UserCreateDialog } from "@3ab-users/components/users/user-create-dialog";
import { UsersImportDialog } from "@3ab-users/components/users/users-import-dialog";
import { Upload } from "lucide-react";

export function UsersHeader() {
  return (
    <div className="flex justify-end mb-4 space-x-4">
      <UserCreateDialog trigger={<Button>Create New</Button>} />
      <UsersImportDialog
        trigger={
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Upload XLSX
          </Button>
        }
      />
    </div>
  );
}
