import { AdminNavbar } from "components/templates/Admin";
import { Outlet } from "react-router-dom";

export const AdminPageTemplate = () => {
  return (
    <div
      className="grid grid-cols-5 h-[100vh] overflow-hidden gap-0"
      style={{ backgroundColor: "cyan" }}
    >
      <div className="col-span-1">
        <AdminNavbar />
      </div>
      <div className=" col-span-4 flex items-center">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminPageTemplate