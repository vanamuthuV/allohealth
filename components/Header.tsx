"use client";

import React from "react";
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar"; // Import AvatarImage and AvatarFallback
import { useRouter } from "next/navigation"; // Correct import for Next.js 13+

const Header = () => {
  const router = useRouter();

  const handleLogout = () => {
    try {
      localStorage.clear(); // Clear the local storage
      router.push("/login"); // Redirect to the login page
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <header className="flex items-center justify-between p-4 bg-purple-600 text-white shadow-md">
      <h1 className="text-lg font-semibold">Allo Health</h1>

      <div className="relative">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="p-1 rounded-full"
              aria-label="Profile Menu"
            >
              <Avatar className="w-10 h-10">
                <AvatarImage
                  src="https://via.placeholder.com/40" // Replace with the actual profile image URL
                  alt="Profile"
                />
                <AvatarFallback>A0</AvatarFallback> {/* Fallback initials */}
              </Avatar>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
