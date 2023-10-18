import {
  DeleteFilled,
  InfoCircleFilled,
  PlusOutlined,
  SettingOutlined,
  ToolFilled,
} from "@ant-design/icons";
import { Button } from "components";
import { Pagination } from "flowbite-react";
import { useAuth } from "hooks";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "store";
import { getAccountThunk } from "store/manageUser/thunk";

export const UserAdmin = () => {
  const [searchData, setSearchData] = useState(null);
  const { AllAccount } = useAuth();
  const dispatch = useAppDispatch();
  const handleInput = (event) => {
    setSearchData(event.target.value);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);

  useEffect(() => {
    dispatch(getAccountThunk(currentPage));
  }, [currentPage]);
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <form className=" w-[40%]">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-[30px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[30px]"
              placeholder="Input to filter..."
              onChange={handleInput}
            />
          </div>
        </form>
        <div>
          <Button type="primary">
            <div>
              <span>Add Course</span> <PlusOutlined />
            </div>
          </Button>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg text-center ">
        <table className="w-full text-sm text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
            <tr>
              <th scope="col" className=" py-5 align-middle break-words whitespace-normal">
                #
              </th>
              <th scope="col" className=" py-5 align-middle break-words whitespace-normal">
                Username
              </th>
              <th scope="col" className=" py-5 align-middle break-words whitespace-normal">
                Category
              </th>
              <th scope="col" className=" py-5 align-middle break-words whitespace-normal">
                Full Name
              </th>
              <th scope="col" className=" py-5 align-middle break-words whitespace-normal">
                Email
              </th>
              <th scope="col" className=" py-5 align-middle break-words whitespace-normal">
                Phone Number
              </th>
              <th scope="col" className=" py-5 align-middle break-words whitespace-normal">
                <SettingOutlined />
              </th>
            </tr>
          </thead>
          <tbody>
            {AllAccount?.items.map((e, index) => {
              index = index + 1;
              return (
                <tr className={index % 2 == 0 ? "bg-gray-50" : "bg-white"}>
                  <td className=" py-4">{index}</td>
                  <td className=" py-4">{e?.taiKhoan}</td>
                  <td className=" py-4">{e?.tenLoaiNguoiDung}</td>
                  <td className=" py-4">{e?.hoTen}</td>
                  <td className=" py-4">{e?.email}</td>
                  <td className=" py-4">{e?.soDT}</td>
                  <td className="flex items-center m-auto py-4 gap-3">
                    <div className="hover:scale-125 transition ease-in-out delay-75 duration-500 cursor-pointer">
                      <InfoCircleFilled
                        style={{ color: "var(--primary)", fontSize: "25px" }}
                      />
                    </div>
                    <div className="hover:scale-125 transition ease-in-out delay-75 duration-500 cursor-pointer">
                      <ToolFilled
                        style={{ color: "orange", fontSize: "25px" }}
                      />
                    </div>
                    <div className="hover:scale-125 transition ease-in-out delay-75 duration-500 cursor-pointer">
                      <DeleteFilled
                        style={{ color: "red", fontSize: "25px" }}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
        {AllAccount && (
          <Pagination
            currentPage={currentPage}
            onPageChange={onPageChange}
            showIcons
            totalPages={AllAccount?.totalPages}
          />
        )}
      </div>
    </div>
  );
};

export default UserAdmin;
