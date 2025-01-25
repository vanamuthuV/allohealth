"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useRouter } from "next/navigation";
import { useToast } from "../../hooks/use-toast";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    masterPassword: "",
  });

  const { toast } = useToast();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e: unknown) => {
    //@ts-expect-error tihis
    e.preventDefault();

    const validCredentials = {
      username: "allo001",
      password: "12345678",
      masterPassword: "allo4life",
    };

    if (
      formData.username === validCredentials.username &&
      formData.password === validCredentials.password &&
      formData.masterPassword === validCredentials.masterPassword
    ) {
      // Successful login
      router.push("/dashboard");
      localStorage.setItem(
        "token",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
      );
    } else {
      // Trigger toast notification
      toast({
        title: "Invalid credentials",
        description:
          "Please check your username, password, and master password.",
        variant: "destructive",
      });
    }
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
              <p className="text-sm text-gray-700 mt-4 p-4 border border-purple-300 rounded-lg bg-purple-50">
                <strong>Test Credentials:</strong>
                <ul className="mt-2 space-y-1">
                  <li>
                    <strong>Username:</strong> allo001
                  </li>
                  <li>
                    <strong>Password:</strong> 12345678
                  </li>
                  <li>
                    <strong>Master Password:</strong> allo4life
                  </li>
                </ul>
                <span className="block mt-3 text-purple-700">
                  Need a new account? Contact the DB admin at{" "}
                  <a
                    href="mailto:vanamuthuvjob@gmail.com"
                    className="text-purple-800 font-medium underline"
                  >
                    vanamuthuvjob@gmail.com
                  </a>
                  .
                </span>
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
