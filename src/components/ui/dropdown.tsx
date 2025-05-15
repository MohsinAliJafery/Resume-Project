// components/ui/dropdown.tsx

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";
import { MoreVertical } from "react-feather"; // You can use any other icon

export const Dropdown = ({ children }: any) => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger className="p-1 rounded-md">
      <MoreVertical />
    </DropdownMenu.Trigger>
    <DropdownMenu.Content className="bg-white shadow-md rounded-md w-48">
      {children}
    </DropdownMenu.Content>
  </DropdownMenu.Root>
);

Dropdown.Trigger = DropdownMenu.Trigger;
Dropdown.Content = DropdownMenu.Content;
Dropdown.Item = DropdownMenu.Item;
