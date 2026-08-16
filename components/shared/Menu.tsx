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

const MenuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: Home,
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "parent", "student"],
      },
      {
        icon: GraduationCap,
        label: "Teacher",
        href: "/teacher",
        visible: ["admin", "teacher"],
      },
      {
        icon: Users,
        label: "Student",
        href: "/student",
        visible: ["admin", "teacher"],
      },
      {
        icon: Users2,
        label: "Parent",
        href: "/parent",
        visible: ["admin", "teacher"],
      },
      {
        icon: Book,
        label: "Subjects",
        href: "/subjects",
        visible: ["admin", "teacher"],
      },
      {
        icon: Presentation,
        label: "Classes",
        href: "/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: Dices,
        label: "Lessons",
        href: "/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: ClipboardPen,
        label: "Exams",
        href: "/exams",
        visible: ["admin", "teacher", "parent", "student"],
      },
      {
        icon: NotebookPen,
        label: "Assignments",
        href: "/assignments",
        visible: ["admin", "teacher", "parent", "student"],
      },
      {
        icon: CalendarCheck,
        label: "Attendance",
        href: "/attendance",
        visible: ["admin", "teacher", "parent", "student"],
      },
      {
        icon: CalendarRange,
        label: "Events",
        href: "/Events",
        visible: ["admin", "teacher", "parent", "student"],
      },
      {
        icon: Calendar1,
        label: "Calender",
        href: "/Calender",
        visible: ["admin", "teacher", "parent", "student"],
      },
      {
        icon: MessageSquareMore,
        label: "Message",
        href: "/Message",
        visible: ["admin", "teacher", "parent", "student"],
      },
      {
        icon: Megaphone,
        label: "Announcement",
        href: "/announcement",
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
  return (
    <div className="flex flex-col gap-6">
      {MenuItems.map((i) => (
        <div key={i.title} className="">
          <span className="text-sm text-muted-foreground font-semibold hidden lg:block">
            {i.title}
          </span>
          <div className="flex flex-col  lg:gap-2 items-center lg:items-start justify-center lg:justify-start ">
            {i.items.map((item) => {
              if (item.visible.includes(role)) {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2 px-2 md:px-4 py-2 hover:bg-blue-200 w-full rounded-md transition ease-in-out duration-100 "
                  >
                    <Icon size={18} />
                    <span className="hidden lg:block">{item.label}</span>
                  </Link>
                );
              }
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuComponent;
