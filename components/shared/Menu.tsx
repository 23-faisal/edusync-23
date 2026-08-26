"use client";

import {
  Book,
  Calendar1,
  CalendarCheck,
  CalendarRange,
  ClipboardPen,
  Dices,
  GraduationCap,
  Home,
  LogOut,
  Megaphone,
  MessageSquareMore,
  NotebookPen,
  Presentation,
  Settings,
  UserRound,
  Users,
  Users2,
} from "lucide-react";

import Link from "next/link";
import { role } from "@/lib/data";
import { usePathname } from "next/navigation";

const MenuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: Home,
        label: "Home",
        href: "/admin",
        visible: ["admin", "teacher", "parent", "student"],
      },
      {
        icon: GraduationCap,
        label: "Teacher",
        href: "/lists/teacher",
        visible: ["admin", "teacher"],
      },
      {
        icon: Users,
        label: "Students",
        href: "/lists/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: Users2,
        label: "Parent",
        href: "/lists/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: Book,
        label: "Subjects",
        href: "/lists/subjects",
        visible: ["admin", "teacher"],
      },
      {
        icon: Presentation,
        label: "Classes",
        href: "/lists/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: Dices,
        label: "Lessons",
        href: "/lists/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: ClipboardPen,
        label: "Exams",
        href: "/lists/exams",
        visible: ["admin", "teacher", "parent", "student"],
      },
      {
        icon: NotebookPen,
        label: "Assignments",
        href: "/lists/assignments",
        visible: ["admin", "teacher", "parent", "student"],
      },
      {
        icon: CalendarCheck,
        label: "Attendance",
        href: "/lists/attendances",
        visible: ["admin", "teacher", "parent", "student"],
      },
      {
        icon: CalendarRange,
        label: "Events",
        href: "/lists/events",
        visible: ["admin", "teacher", "parent", "student"],
      },
      {
        icon: Calendar1,
        label: "Calender",
        href: "/lists/calender",
        visible: ["admin", "teacher", "parent", "student"],
      },
      {
        icon: MessageSquareMore,
        label: "Message",
        href: "/lists/message",
        visible: ["admin", "teacher", "parent", "student"],
      },
      {
        icon: Megaphone,
        label: "Announcement",
        href: "/lists/announcements",
        visible: ["admin", "teacher", "parent", "student"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: UserRound,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "parent", "student"],
      },
      {
        icon: Settings,
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "parent", "student"],
      },
      {
        icon: LogOut,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "parent", "student"],
      },
    ],
  },
];

const MenuComponent = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-6">
      {MenuItems.map((i) => (
        <div key={i.title}>
          <span className="hidden text-sm font-semibold text-muted-foreground lg:block">
            {i.title}
          </span>

          <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start lg:gap-2">
            {i.items.map((item) => {
              if (!item.visible.includes(role)) return null;

              const Icon = item.icon;

              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex w-full items-center justify-center gap-4 rounded-md px-3 py-2
                    lg:justify-start
                    ${
                      isActive
                        ? "bg-blue-500 text-primary-foreground"
                        : "text-muted-foreground hover:bg-slate-200 hover:text-accent-foreground"
                    }
                  `}
                >
                  <Icon size={18} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuComponent;
