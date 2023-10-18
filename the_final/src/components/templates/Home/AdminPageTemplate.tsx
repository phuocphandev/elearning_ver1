import { AdminNavbar } from "components/templates/Admin";
import { Outlet } from "react-router-dom";

export const AdminPageTemplate = () => {
  return (
    <div
      className="grid grid-cols-6 h-[100vh] overflow-hidden gap-0"
      style={{ backgroundColor: "cyan" }}
    >
      <div className="col-span-1">
        <AdminNavbar />
      </div>
      <div className=" col-span-5 w-[95%] bg-blue-100 m-auto h-[90vh]">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminPageTemplate