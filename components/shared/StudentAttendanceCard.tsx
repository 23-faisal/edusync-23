"use client";

import { Ellipsis } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export const description = "A multiple bar chart";

const chartData = [
  { month: "Sunday", present: 305, absent: 200 },
  { month: "Monday", present: 237, absent: 120 },
  { month: "Tuesday", present: 753, absent: 190 },
  { month: "Wednesday", present: 573, absent: 190 },
  { month: "Thursday", present: 609, absent: 130 },
];

const chartConfig = {
  present: {
    label: "present",
    color: "#22C55E",
  },
  absent: {
    label: "absent",
    color: "#EF4444",
  },
} satisfies ChartConfig;

const StudentAttendanceCard = () => {
  return (
    <div className="bg-white rounded-xl p-4 h-full flex flex-col gap-8 ">
      {/* title */}
      <div className="flex items-center justify-between  ">
        <h1 className="font-semibold text-lg">Attendance</h1>
        <Ellipsis className="text-gray-500 cursor-pointer" />
      </div>
      {/* middle */}
      <div className="flex items-center  gap-16 ">
        <div className="flex gap-1 items-center">
          <div className="h-5 w-5 rounded-full bg-green-500" />
          <h2 className="font-bold text-lg">Present</h2>
        </div>

        <div className="flex gap-1 items-center">
          <div className="h-5 w-5 rounded-full bg-red-500" />
          <h2 className="font-bold text-lg">Absent</h2>
        </div>
      </div>
      {/* bar chart  */}
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="present" fill="var(--color-present)" radius={4} />
            <Bar dataKey="absent" fill="var(--color-absent)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </div>
  );
};

export default StudentAttendanceCard;
