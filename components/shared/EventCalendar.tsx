"use client";

import { Calendar } from "@/components/ui/calendar";
import { Ellipsis } from "lucide-react";
import { useState } from "react";

// temporary data
const data = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00PM to 2:00PM",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, quaerat doloremque? Quisquam a sunt error facilis assumenda atque architecto cum praesentium dolores totam quibusdam optio magnam accusamus culpa, ad amet.",
  },
  {
    id: 2,
    title: " sit amet consectetur",
    time: "2:00PM to 4:00PM",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, quaerat doloremque? Quisquam a sunt error facilis assumenda atque architecto cum praesentium dolores totam quibusdam optio magnam accusamus culpa, ad amet.",
  },
  {
    id: 3,
    title: "Quisquam a sunt",
    time: "8:00PM to 9:00PM",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, quaerat doloremque? Quisquam a sunt error facilis assumenda atque architecto cum praesentium dolores totam quibusdam optio magnam accusamus culpa, ad amet.",
  },
  {
    id: 4,
    title: "magnam accusamus culpa",
    time: "4:00PM to 6:00PM",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, quaerat doloremque? Quisquam a sunt error facilis assumenda atque architecto cum praesentium dolores totam quibusdam optio magnam accusamus culpa, ad amet.",
  },
];

const EventCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="bg-white rounded-xl">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="w-full rounded-xl bg-white"
      />
      <div className="flex flex-col gap-2 p-4 ">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-xl ">Events</h1>
          <Ellipsis />
        </div>
        <div>
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white p-2 my-4 rounded-sm border border-t-4 odd:border-t-blue-500 even:border-t-yellow-500 border-slate-100 w-full"
            >
              <div className="flex items-center justify-between w-full">
                <h1 className="font-semibold text-lg capitalize">
                  {item.title}
                </h1>
                <p className="font-semibold text-slate-300 text-xs">
                  {item.time}
                </p>
              </div>
              <p className="w-full text-slate-500 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
