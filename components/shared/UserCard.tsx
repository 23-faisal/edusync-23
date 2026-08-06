import { Ellipsis } from "lucide-react";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="p-4  odd:bg-blue-300 even:bg-yellow-300 rounded-2xl flex-1 min-w-[130px] ">
      <div className="flex justify-between items-center">
        <span className="text-[10px] px-2 py-1 rounded-2xl text-green-600 bg-white">
          2025/26
        </span>
        <Ellipsis className="text-white" />
      </div>
      <h1 className="text-2xl font-semibold my-4">1336</h1>
      <h4 className="capitalize font-medium text-sm text-slate-500 ">{type}</h4>
    </div>
  );
};

export default UserCard;
