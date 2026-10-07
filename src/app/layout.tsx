import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmadiyya International School | AIS",
  description:
    "Ahmadiyya International School — Best Among Equals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}