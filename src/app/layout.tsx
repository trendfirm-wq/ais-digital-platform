import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "T.I. Ahmadiyya International School | AIS",
  description:
    "T.I. Ahmadiyya International School — Best Among Equals.",
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