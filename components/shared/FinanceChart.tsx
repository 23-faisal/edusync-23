"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface Items {
  label: string;
  value: string;
}

const chartData = [
  { month: "January", income: 222, expense: 150 },
  { month: "February", income: 97, expense: 180 },
  { month: "March", income: 167, expense: 120 },
  { month: "April", income: 242, expense: 260 },
  { month: "May", income: 373, expense: 290 },
  { month: "June", income: 301, expense: 340 },
  { month: "July", income: 245, expense: 180 },
  { month: "August", income: 409, expense: 320 },
  { month: "September", income: 159, expense: 210 },
  { month: "October", income: 261, expense: 190 },
  { month: "November", income: 327, expense: 350 },
  { month: "December", income: 292, expense: 210 },
];

const items: Items[] = [
  { label: "2026", value: "2026" },
  { label: "2025", value: "2025" },
  { label: "2024", value: "2024" },
  { label: "2023", value: "2023" },
  { label: "2022", value: "2022" },
  { label: "2021", value: "2021" },
  { label: "2020", value: "2020" },
];

const chartConfig = {
  income: {
    label: "Income",
    color: "#93C5FD",
  },
  expense: {
    label: "Expense",
    color: "#FDE68A",
  },
} satisfies ChartConfig;

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl p-4 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Finance</h1>
        <div>
          <Select defaultValue="2026">
            <SelectTrigger className="w-32 bg-blue-500 text-white border-2 ">
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>

            <SelectContent className="bg-white text-black ">
              <SelectGroup>
                <SelectLabel>Select a year</SelectLabel>

                {items.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-12 mt-6">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-blue-300" />
          <span className="font-medium">Income</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-yellow-300" />
          <span className="font-medium">Expense</span>
        </div>
      </div>

      {/* Chart */}
      <CardContent className="flex-1 p-0 mt-6">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 10,
              right: 10,
              top: 20,
              bottom: 10,
            }}
          >
            <defs>
              <linearGradient id="fillIncome" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-income)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-income)"
                  stopOpacity={0.1}
                />
              </linearGradient>

              <linearGradient id="fillExpense" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-expense)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-expense)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tickFormatter={(value) => value.slice(0, 3)}
            />

            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="dot"
                  labelFormatter={(value) => value}
                />
              }
            />

            <Area
              type="monotone"
              dataKey="expense"
              stroke="var(--color-expense)"
              fill="url(#fillExpense)"
              strokeWidth={3}
            />

            <Area
              type="monotone"
              dataKey="income"
              stroke="var(--color-income)"
              fill="url(#fillIncome)"
              strokeWidth={3}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </div>
  );
};
export default FinanceChart;
