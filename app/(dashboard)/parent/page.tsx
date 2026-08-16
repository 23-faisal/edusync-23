import AnnouncementComponent from "@/components/shared/AnnouncementComponent";
import BigCalendar from "@/components/shared/BigCalendar";

const ParentPage = () => {
  return (
    <div className="p-4 flex flex-col gap-4 xl:flex-row">
      {/* left  */}
      <div className="w-full xl:w-2/3 ">
        <div className="bg-white p-4 rounded-xl ">
          <h1 className="text-xl font-semibold ">Schedule (John Doe)</h1>
          <div className="h-full">
            <BigCalendar />
          </div>
        </div>
      </div>
      {/* right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <AnnouncementComponent />
      </div>
    </div>
  );
};

export default ParentPage;
