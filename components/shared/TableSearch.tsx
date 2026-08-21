

import { Search } from "lucide-react";


const TableSearch = () => {
  return (
    <div className="w-full flex md:w-auto items-center gap-2 text-xs rounded-full ring-[1.5px] ring-slate-300 px-4 py-1 ">
      <Search className="w-5 h-5" />
      <input className=" outline-none" />
    </div>
  );
};

export default TableSearch;
