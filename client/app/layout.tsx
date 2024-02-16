import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ContextWrapper from "./_components/ContextWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-red-950">
        <ContextWrapper>
          {children}
        </ContextWrapper>
      </body>
    </html>
  );
}
