import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { SquarePen, Trash } from "lucide-react";
import { resultsData } from "@/lib/data";

type Result = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  student: string;
  date: string;
  type: string;
  score: number;
};

const ResultTable = () => {
  return (
    <Table className="text-sm  md:text-md mt-10">
      <TableCaption> </TableCaption>
      <TableHeader>
        <TableRow className="bg-blue-100 hover:bg-blue-100 transition ease-in-out duration-75">
          <TableHead className="min-w-[100px]">Subject Name</TableHead>
          <TableHead className="hidden md:table-cell">Student</TableHead>
          <TableHead className="hidden md:table-cell">Score</TableHead>
          <TableHead className="hidden md:table-cell">Teacher</TableHead>
          <TableHead className="hidden md:table-cell">Class</TableHead>
          <TableHead className="hidden md:table-cell">Date</TableHead>

          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {resultsData.map((data: Result) => (
          <TableRow
            key={data.id}
            className="odd:bg-teal-50 even:bg-yellow-50 hover:bg-gray-50 transition duration-100 ease-in-out "
          >
            <TableCell className="h-20 ">{data.subject}</TableCell>
            <TableCell className="hidden md:table-cell">
              {data.student}
            </TableCell>
            <TableCell className="hidden md:table-cell">{data.score}</TableCell>
            <TableCell className="hidden md:table-cell">
              {data.teacher}
            </TableCell>
            <TableCell className="hidden md:table-cell">{data.class}</TableCell>
            <TableCell className="hidden md:table-cell">{data.date}</TableCell>

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

export default ResultTable;
