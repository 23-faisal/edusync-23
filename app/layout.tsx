import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "EduSync 23",
  description:
    "EduSync 23 aims to simplify school operations by bringing all academic and administrative activities into one unified platform, improving efficiency, transparency, and communication among administrators, teachers, students, and parents. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={cn("h-full antialiased", figtree.className)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
