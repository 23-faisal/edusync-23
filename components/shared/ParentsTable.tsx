"use client";

import { SquarePen, Trash } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { parentsData } from "@/lib/data";
import { Button } from "../ui/button";

type Parents = {
  id: number;
  name: string;
  students: string[];
  email: string;
  phone: string;
  address: string;
};

const ParentsTable = () => {
  return (
    <Table className="text-sm  md:text-md mt-10">
      <TableCaption> </TableCaption>
      <TableHeader>
        <TableRow className="bg-blue-100 hover:bg-blue-100 transition ease-in-out duration-75">
          <TableHead className="min-w-[100px]">Info</TableHead>
          <TableHead className="hidden md:table-cell">Students Name</TableHead>
          <TableHead className="hidden md:table-cell">Phone</TableHead>
          <TableHead className="hidden md:table-cell">Address</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {parentsData.map((data: Parents) => (
          <TableRow
            key={data.id}
            className="odd:bg-teal-50 even:bg-yellow-50 hover:bg-gray-50 transition duration-100 ease-in-out "
          >
            <TableCell className="h-20 ">
              <div className="flex items-center gap-2 h-full">
                <div>
                  <p>{data.name}</p>
                  <span>{data.email}</span>
                </div>
              </div>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {data.students.join(", ")}
            </TableCell>

            <TableCell className="hidden md:table-cell">{data.phone}</TableCell>
            <TableCell className="hidden md:table-cell">
              {data.address}
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

export default ParentsTable;
