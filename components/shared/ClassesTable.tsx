import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableCell,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import { classesData } from "@/lib/data";
import { SquarePen, Trash } from "lucide-react";

type Classes = {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
};
const ClassesTable = () => {
  return (
    <Table className="text-sm  md:text-md mt-10">
      <TableCaption> </TableCaption>
      <TableHeader>
        <TableRow className="bg-blue-100 hover:bg-blue-100 transition ease-in-out duration-75">
          <TableHead className="min-w-[100px]">Class Name</TableHead>
          <TableHead className="hidden md:table-cell">Capacity</TableHead>
          <TableHead className="hidden md:table-cell">Grade</TableHead>
          <TableHead className="hidden md:table-cell">Supervisor</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {classesData.map((data: Classes) => (
          <TableRow
            key={data.id}
            className="odd:bg-teal-50 even:bg-yellow-50 hover:bg-gray-50 transition duration-100 ease-in-out "
          >
            <TableCell className="h-20 ">{data.name}</TableCell>
            <TableCell className="hidden md:table-cell">
              {data.capacity}
            </TableCell>
            <TableCell className="hidden md:table-cell">{data.grade}</TableCell>
            <TableCell className="hidden md:table-cell">
              {data.supervisor}
            </TableCell>

            <TableCell className="text-right">
              <Button
                size="icon"
                className="bg-teal-500 hover:bg-teal-600 active:bg-teal-700 transition ease-in-out duration-100 "
              >
                <SquarePen />
              </Button>
              <Button
                size="icon"
                className="bg-red-500 hover:bg-red-600 active:bg-red-700 transition ease-in-out duration-100 "
              >
                <Trash />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ClassesTable;
