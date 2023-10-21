import { AdminNavbar } from "components/templates/Admin";
import { Outlet } from "react-router-dom";

export const AdminPageTemplate = () => {
  return (
    <div
      className="xl:grid grid-cols-6 h-[100vh] overflow-y-auto gap-0 xl:pl-10"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="col-span-1 ">
        <AdminNavbar />
      </div>
      <div className=" col-span-5  w-full xl:w-[88%] bg-blue-100 m-auto xl:h-[90vh] p-2 xl:p-5 rounded-xl ">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminPageTemplate