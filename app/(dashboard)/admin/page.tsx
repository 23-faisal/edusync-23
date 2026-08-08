import AnnouncementComponent from "@/components/shared/AnnouncementComponent";
import EventCalendar from "@/components/shared/EventCalendar";
import FinanceChart from "@/components/shared/FinanceChart";
import StudentAttendanceCard from "@/components/shared/StudentAttendanceCard";
import StudentCountChart from "@/components/shared/StudentCountChart";
import UserCard from "@/components/shared/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4 gap-8 flex flex-col md:flex-row ">
      {/* left side */}
      <div className="w-full md:w-2/2 lg:w-2/3 flex flex-col gap-4">
        <div className="flex gap-4 w-full  flex-wrap ">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* middle chart */}
        <div className="flex flex-col lg:flex-row  gap-4 ">
          <div className="w-full lg:w-1/3 h-[450px]">
            <StudentCountChart />
          </div>
          <div className="w-full h-[450px] lg:w-2/3 ">
            <StudentAttendanceCard />
          </div>
        </div>
        {/* bottom chart */}
        <div className="w-full h-[650px] ">
          <FinanceChart />
        </div>
      </div>
      {/* right side */}
      <div className="w-full md:w-1/3 lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <AnnouncementComponent />
      </div>
    </div>
  );
};

export default AdminPage;
