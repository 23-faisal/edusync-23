import type { Metadata } from "next";
import "@/app/globals.css";
import Link from "next/link";
import Image from "next/image";
import MenuComponent from "@/components/shared/Menu";
import Navbar from "@/components/dashboard/Navbar";

export const metadata: Metadata = {
  title: "EduSync One",
  description:
    "EduSync One aims to simplify school operations by bringing all academic and administrative activities into one unified platform, improving efficiency, transparency, and communication among administrators, teachers, students, and parents. ",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex ">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[18%] xl:w-[16%]  ring-1 ring-slate-200 shadow-[1px_0_12px_-3px_var(--tw-ring-color)] ">
        <Link
          href={"/"}
          className="flex items-center justify-center lg:justify-start gap-2 p-4"
        >
          <Image
            src={"/images/logo.png"}
            alt="EduSync One"
            height={32}
            width={32}
          />
          <span className="text-xl font-semibold tracking-tight hidden lg:block ">
            EduSync 23
          </span>
        </Link>
        <MenuComponent />
      </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[82%] xl:w-[84%] bg=[#F7F8FA] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
