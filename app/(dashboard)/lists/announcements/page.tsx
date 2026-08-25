import AnnouncementsTable from "@/components/shared/AnnouncementsTable";
import { TeacherPagination } from "@/components/shared/Pagination";
import TableSearch from "@/components/shared/TableSearch";
import { Button } from "@/components/ui/button";
import { ArrowDownWideNarrow, Funnel, ListFilterPlus } from "lucide-react";
import React from "react";

const AnnouncementsPage = () => {
  return (
    <div className=" rounded-md bg-white p-4 flex-1 m-4 ml-0 ">
      {/* TOP */}
      <div className="flex flex-col md:flex-row items-center justify-between ">
        <div className="py-4 md:py-0 font-semibold ">All Announcements</div>
        <div className="flex flex-col md:flex-row  items-center gap-2 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4">
            <Button className="bg-amber-300 hover:bg-amber-400">
              <Funnel />
            </Button>
            <Button className="bg-amber-300 hover:bg-amber-400">
              <ArrowDownWideNarrow />
            </Button>
            <Button className="bg-amber-300 hover:bg-amber-400">
              <ListFilterPlus />
            </Button>
          </div>
        </div>
      </div>
      {/* LIST */}
      <div className="">
        <AnnouncementsTable />
      </div>
      {/* BOTTOM */}
      <div className="">
        <TeacherPagination />
      </div>
    </div>
  );
};

export default AnnouncementsPage;
