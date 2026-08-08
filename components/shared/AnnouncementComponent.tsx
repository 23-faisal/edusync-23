const AnnouncementComponent = () => {
  return (
    <div className="flex flex-col  gap-4 p-4 bg-white rounded-xl ">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-xl ">Announcement</h1>
        <p className="text-sm text-slate-400">View all</p>
      </div>

      <div className="flex flex-col rounded-md p-4 mt-4 gap-4">
        <div className="rounded-md p-4 bg-teal-100">
          <div className="flex items-center justify-between mb-2 ">
            <h1 className="text-md font-semibold ">Lorem ipsum dolor sit</h1>
            <span className="text-xs px-2 py-1 font-semibold  bg-white rounded-lg text-slate-600">
              2026-08-09
            </span>
          </div>
          <span className="text-sm  text-muted-foreground ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
            aliquid doloremque quia impedit iure
          </span>
        </div>{" "}
        <div className="rounded-md p-4 bg-teal-100">
          <div className="flex items-center justify-between mb-2 ">
            <h1 className="text-md font-semibold ">Lorem ipsum dolor sit</h1>
            <span className="text-xs px-2 py-1 font-semibold  bg-white rounded-lg text-slate-600">
              2026-08-08
            </span>
          </div>
          <span className="text-sm  text-muted-foreground ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
            aliquid doloremque quia impedit iure
          </span>
        </div>{" "}
        <div className="rounded-md p-4 bg-teal-100">
          <div className="flex items-center justify-between mb-2 ">
            <h1 className="text-md font-semibold ">Lorem ipsum dolor sit</h1>
            <span className="text-xs px-2 py-1 font-semibold  bg-white rounded-lg text-slate-600">
              2026-08-07
            </span>
          </div>
          <span className="text-sm  text-muted-foreground ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
            aliquid doloremque quia impedit iure
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementComponent;
