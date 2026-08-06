"use client";

import { Ellipsis } from "lucide-react";
import { RadialBarChart, RadialBar, LabelList } from "recharts";

import { CardContent } from "../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import Image from "next/image";

const chartData = [
  {
    gender: "total",
    students: 106,
    fill: "#fff",
  },
  {
    gender: "boys",
    students: 53,
    fill: "#93C5FD", // blue-300
  },
  {
    gender: "girls",
    students: 53,
    fill: "#FDE68A", // yellow-300
  },
];

const chartConfig = {
  students: {
    label: "Students",
  },
  boys: {
    label: "Boys",
    color: "#93C5FD",
  },
  girls: {
    label: "Girls",
    color: "#FDE68A",
  },
} satisfies ChartConfig;

const StudentContentChart = () => {
  const totalStudents = chartData.reduce((sum, item) => sum + item.students, 0);

  const boys = chartData[0].students;
  const girls = chartData[1].students;

  const boysPercentage = Math.round((boys / totalStudents) * 100);
  const girlsPercentage = Math.round((girls / totalStudents) * 100);

  return (
    <div className="bg-white rounded-xl p-4 h-full">
      {/* Title */}
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-lg">Students</h1>
        <Ellipsis className="text-gray-500 cursor-pointer" />
      </div>

      {/* Chart */}
      <div className="flex items-center justify-center my-8 relative">
        <Image
          src="/images/male-female.jpg"
          height={80}
          width={80}
          alt="students"
          className="z-50 absolute rounded-full"
        />
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[260px]"
          >
            <RadialBarChart
              data={chartData}
              innerRadius={45}
              outerRadius={110}
              startAngle={90}
              endAngle={-270}
            >
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel nameKey="gender" />}
              />

              <RadialBar dataKey="students" background cornerRadius={10}>
                <LabelList
                  dataKey="gender"
                  position="insideStart"
                  className="fill-white capitalize font-medium"
                  fontSize={14}
                />
              </RadialBar>
            </RadialBarChart>
          </ChartContainer>
        </CardContent>
      </div>

      {/* Bottom */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1 items-center">
          <div className="h-5 w-5 rounded-full bg-blue-300" />
          <h2 className="font-bold text-lg">{boys}</h2>
          <p className="text-sm text-gray-500">Boys ({boysPercentage}%)</p>
        </div>

        <div className="flex flex-col gap-1 items-center">
          <div className="h-5 w-5 rounded-full bg-yellow-300" />
          <h2 className="font-bold text-lg">{girls}</h2>
          <p className="text-sm text-gray-500">Girls ({girlsPercentage}%)</p>
        </div>
      </div>
    </div>
  );
};

export default StudentContentChart;
