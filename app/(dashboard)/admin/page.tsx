import UserCard from "@/components/shared/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4 gap-4 flex flex-col md:flex-row">
      {/* left side */}
      <div className="w-full md:w-2/2 lg:w-2/3">
        <div className="flex gap-4 w-full  flex-wrap ">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
      </div>
      {/* right side */}
      <div className="w-full md:w-1/3 lg:w-1/3">right side</div>
    </div>
  );
};

export default AdminPage;
