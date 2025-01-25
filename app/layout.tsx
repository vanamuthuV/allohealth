"use client";

import "./globals.css";
import Header from "../components/Header";
import { usePathname } from "next/navigation";
import ToastContainer from "../components/toast-container";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        {/* Conditionally render Header only on '/dashboard' route */}
        {pathname === "/dashboard" && <Header />}
        {children}
      </body>
      <ToastContainer />
    </html>
  );
}
