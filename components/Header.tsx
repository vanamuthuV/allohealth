// components/Header.tsx
"use client";

import React, { useState } from "react";
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar"; // Import AvatarImage and AvatarFallback

const Header = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);


  console.log(isProfileMenuOpen)

  const handleLogout = () => {
    // Add your logout functionality here
    //@ts-expect-error  'yo'
    alert("Logging out...");
    setIsProfileMenuOpen(false);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-purple-600 text-white shadow-md">
      <h1 className="text-lg font-semibold">Allo Health</h1>

      <div className="relative">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="p-1 rounded-full">
              <Avatar className="w-10 h-10">
                <AvatarImage
                  src="https://via.placeholder.com/40" // Replace with actual profile image URL
                  alt="Profile"
                />
                <AvatarFallback>AB</AvatarFallback> {/* Fallback initials */}
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
