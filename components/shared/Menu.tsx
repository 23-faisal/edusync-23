import {
  Calendar1,
  CalendarCheck,
  CalendarRange,
  ClipboardPen,
  Dices,
  GraduationCap,
  Home,
  Icon,
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

const MenuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: Home,
        label: "Home",
        href: "/",
      },
      {
        icon: GraduationCap,
        label: "Teacher",
        href: "/teacher",
      },
      {
        icon: Users,
        label: "Student",
        href: "/student",
      },
      {
        icon: Users2,
        label: "Parent",
        href: "/parent",
      },

      {
        icon: Presentation,
        label: "Classes",
        href: "/classes",
      },
      {
        icon: Dices,
        label: "Lessons",
        href: "/lessons",
      },
      {
        icon: ClipboardPen,
        label: "Exams",
        href: "/exams",
      },
      {
        icon: NotebookPen,
        label: "Assignments",
        href: "/assignments",
      },
      {
        icon: CalendarCheck,
        label: "Attendance",
        href: "/attendance",
      },
      {
        icon: CalendarRange,
        label: "Events",
        href: "/Events",
      },
      {
        icon: Calendar1,
        label: "Calender",
        href: "/Calender",
      },
      {
        icon: MessageSquareMore,
        label: "Message",
        href: "/Message",
      },
      {
        icon: Megaphone,
        label: "Announcement",
        href: "/announcement",
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
      },
      {
        icon: Settings,
        label: "Settings",
        href: "/settings",
      },
      {
        icon: LogOut,
        label: "Logout",
        href: "/logout",
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
          <div className="flex flex-col  lg:gap-2 items-center lg:items-start justify-center lg:justify-start">
            {i.items.map((j) => {
              const Icon = j.icon;
              return (
                <Link
                  key={j.href}
                  href={j.href}
                  className="flex items-center gap-2 p-2 "
                >
                  <Icon size={18} />
                  <span className="hidden lg:block">{j.label}</span>
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
