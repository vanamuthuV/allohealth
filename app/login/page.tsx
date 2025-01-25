"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    masterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic here
    console.log(formData);
    router.push("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <h1 className="text-xl font-bold">Login</h1>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="masterPassword">Master Password</Label>
              <Input
                id="masterPassword"
                name="masterPassword"
                type="password"
                placeholder="Enter the master password"
                value={formData.masterPassword}
                onChange={handleChange}
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                Note: For testing purposes, use &quot; trythis &quot; as the
                master password.
              </p>
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
