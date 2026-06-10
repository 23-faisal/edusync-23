import { Megaphone, MessageSquareMore, Search } from "lucide-react";
import { Input } from "../ui/input";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between p-4 ">
        {/* SEARCH BAR */}
        <div className="hidden md:block  relative">
          <Search className="h-5 w-5 absolute top-2 left-2 " />
          <Input
            className="bg-transparent outline-none  pl-8 "
            placeholder="Search..."
          />
        </div>
        {/* PROFILE */}
        <div className="flex items-center gap-6 justify-end w-full ">
          <MessageSquareMore className="cursor-pointer" />
          <div className="relative ">
            <Megaphone className="cursor-pointer" />
            <span className="absolute -right-4 -top-4 h-6 w-6 bg-red-500  text-white font-bold  rounded-full flex items-center justify-center text-xs ">
              1
            </span>
          </div>

          <div className="flex flex-col  ">
            <span className="text-sm font-semibold leading-3">John Doe</span>
            <span className="text-xs text-slate-500 text-right">Admin</span>
          </div>
          <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center  ">
            <span className="font-bold text-lg ">J</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
