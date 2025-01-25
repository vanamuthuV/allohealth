"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (
      token ===
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    ) {
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  }, [router]); // Dependency array to ensure useEffect only runs once after initial render

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Loader className="animate-spin" />
    </div>
  ); // You can show a loading state while checking
}
