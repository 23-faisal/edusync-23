import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { teachersData } from "@/lib/data";
import Image from "next/image";
import { Button } from "../ui/button";
import { SquarePen, Trash } from "lucide-react";

type Teacher = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
};

export function TeacherListTable() {
  return (
    <Table className="text-sm  md:text-md mt-10">
      <TableCaption> </TableCaption>
      <TableHeader>
        <TableRow className="bg-blue-100 hover:bg-blue-100 transition ease-in-out duration-75">
          <TableHead className="min-w-[100px]">Info</TableHead>
          <TableHead className="hidden md:table-cell">TeacherId</TableHead>
          <TableHead className="hidden md:table-cell">Subjects</TableHead>
          <TableHead className="hidden md:table-cell">Classes</TableHead>
          <TableHead className="hidden md:table-cell">Phone</TableHead>
          <TableHead className="hidden md:table-cell">Address</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {teachersData.map((data: Teacher) => (
          <TableRow
            key={data.id}
            className="odd:bg-teal-50 even:bg-yellow-50 hover:bg-gray-50 transition duration-100 ease-in-out "
          >
            <TableCell className="h-80px ">
              <div className="flex items-center gap-2 h-full">
                <div className="h-10 w-10">
                  <Image
                    src={data.photo}
                    className="rounded-full h-full w-full object-cover"
                    height={30}
                    width={30}
                    alt={data.name}
                  />
                </div>
                <div>
                  <p>{data.name}</p>
                  <span>{data.email}</span>
                </div>
              </div>
            </TableCell>
            <TableCell className="hidden md:table-cell">{data.id}</TableCell>
            <TableCell className="hidden md:table-cell">
              {data.subjects.join(", ")}{" "}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {data.classes.join(", ")}{" "}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {data.phone}{" "}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {data.address}{" "}
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
}
