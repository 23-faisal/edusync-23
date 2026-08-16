import AnnouncementComponent from "@/components/shared/AnnouncementComponent";
import BigCalendar from "@/components/shared/BigCalendar";
import EventCalendar from "@/components/shared/EventCalendar";

const StudentPage = () => {
  return (
    <div className="p-4 flex flex-col gap-4 xl:flex-row">
      {/* left  */}
      <div className="w-full xl:w-2/3 ">
        <div className="bg-white p-4 rounded-xl ">
          <h1 className="text-xl font-semibold ">Schedule (4A)</h1>
          <div className="h-full">
            <BigCalendar />
          </div>
        </div>
      </div>
      {/* right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <AnnouncementComponent />
      </div>
    </div>
  );
};

export default StudentPage;
