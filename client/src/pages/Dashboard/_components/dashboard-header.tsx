import { NavLink } from "react-router-dom";
import { Gift, LogOut, PlusCircle, Search, Sparkles } from "lucide-react";

import { useAuth } from "@/contexts/auth-context";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import LogoButton from "@/components/logo";

const dashboardHeaderLinks = [
  {
    label: "My Groups",
    icon: Gift,
    to: "/dashboard",
  },
  {
    label: "Create Group",
    icon: PlusCircle,
    to: "/groups/create",
  },
  {
    label: "Find Groups",
    icon: Search,
    to: "/groups/find",
  },
  {
    label: "Features",
    icon: Sparkles,
    to: "/features",
  },
];

const DashboardHeader = () => {
  const { user, logout } = useAuth();

  const getInitials = (name: string) => {
    const words = name.split(" ");
    const initials = words
      .slice(0, 2)
      .map((word) => word[0].toUpperCase())
      .join("");
    return initials;
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="sticky z-50 w-full px-4 lg:px-6 border-b">
      <div className="flex justify-between h-14">
        <LogoButton />
        <nav className="flex flex-1 items-center space-x-4 justify-end">
          {dashboardHeaderLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-muted-foreground",
                  isActive && "text-muted-foreground"
                )
              }
            >
              <link.icon className="h-4 w-4 mr-1 mb-1 inline-block" />
              <span className="hidden sm:inline-block">{link.label}</span>
            </NavLink>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="link" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>{getInitials(user!.name)}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {user!.name}
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {user!.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2 text-red-600" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
};

export default DashboardHeader;
