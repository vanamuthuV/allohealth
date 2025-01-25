import './globals.css'

export const metadata = {
  title: "Allo Desk",
  description: "Healthcare Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}
