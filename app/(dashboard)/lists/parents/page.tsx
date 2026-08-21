import { TeacherPagination } from "@/components/shared/Pagination";
import ParentsTable from "@/components/shared/ParentsTable";
import TableSearch from "@/components/shared/TableSearch";
import { Button } from "@/components/ui/button";
import { ArrowDownWideNarrow, Funnel, ListFilterPlus } from "lucide-react";

const ParentsListPage = () => {
  return (
    <div className=" rounded-md bg-white p-4 flex-1 m-4 ml-0 ">
      {/* TOP */}
      <div className="flex flex-col md:flex-row items-center justify-between ">
        <div className="py-4 md:py-0 font-semibold ">All Parents</div>
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
        <ParentsTable />
      </div>
      {/* BOTTOM */}
      <div className="">
        <TeacherPagination />
      </div>
    </div>
  );
};

export default ParentsListPage;
