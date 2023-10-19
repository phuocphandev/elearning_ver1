import {
  DeleteFilled,
  InfoCircleFilled,
  PlusOutlined,
  SettingOutlined,
  ToolFilled,
  CheckCircleFilled,
} from "@ant-design/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Modal } from "components";
import { NotiError, NotiSuccess } from "constant";
import { Pagination } from "flowbite-react";
import { useAuth } from "hooks";
import { useCourse } from "hooks/useCourse";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterSchema, RegisterSchemaType } from "schema";
import { manageUser } from "services/manageUser";
import { useAppDispatch } from "store";
import {
  authorCourseThunk,
  cancelEnrollThunk,
  deleteCourseThunk,
  getCourseFilterThunk,
  getCoursePagiThunk,
} from "store/CourseManagement/thunk";
import {
  getUserNotEnrollThunk,
  getUserUnAuthorThunk,
  getUserAuthorThunk,
} from "store/manageUser/thunk";

export const CourseAdmin = () => {
  const [search, setSearch] = useState(null);
  const { CourseListPagi, isDelete } = useCourse();
  const { UserNotEnroll, UserNotAuthor, UserAuthor } = useAuth();
  const [currentPage1, setCurrentPage1] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(1);
  const [currentPage3, setCurrentPage3] = useState(1);
  const [ID, setID] = useState("");
  const [option, setOption] = useState({ tenND: "...", taiKhoan: "" });
  const dispatch = useAppDispatch();
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const showModal1 = () => {
    setIsModal1Open(true);
  };
  const handleCancel1 = () => {
    setIsModal1Open(false);
  };
  const showModal2 = () => {
    setIsModal2Open(true);
  };
  const handleCancel2 = () => {
    setIsModal2Open(false);
  };

  // Phan Trang - Cho Xac Thuc:

  const newUserNotAuthor = [];
  let indexArr = [];
  for (let i = 0; i < UserNotAuthor?.length; i++) {
    indexArr.push(UserNotAuthor[i]);
    if (indexArr?.length == 2) {
      newUserNotAuthor.push(indexArr);
      indexArr = [];
    }
  }
  if (indexArr.length !== 0) {
    newUserNotAuthor.push(indexArr);
  }

  // console.log("UserNotAuthor: ", UserNotAuthor);

  // Phan trang - xac thuc
  const newUserAuthor = [];
  let indexArr2 = [];
  for (let i = 0; i < UserAuthor?.length; i++) {
    indexArr2.push(UserAuthor[i]);
    if (indexArr2?.length == 2) {
      newUserAuthor.push(indexArr2);
      indexArr2 = [];
    }
  }
  if (indexArr2.length !== 0) {
    newUserAuthor.push(indexArr2);
  }
  // console.log("CourseAuthor: ", CourseAuthor);

  //===================================
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    mode: "onChange",
    resolver: zodResolver(RegisterSchema),
  });
  const onSubmit: SubmitHandler<RegisterSchemaType> = async (value) => {
    try {
      await manageUser.register(value);
      NotiSuccess("Create account successfully!");
      reset();
      setIsModal1Open(false);
    } catch (error) {
      NotiError(error?.response?.data);
    }
  };

  const handleInput = (event) => {
    setCurrentPage1(1);
    setSearch(event.target.value);
  };
  const onPageChange1 = (page: number) => setCurrentPage1(page);
  const onPageChange2 = (page: number) => setCurrentPage2(page);
  const onPageChange3 = (page: number) => setCurrentPage3(page);

  useEffect(() => {
    if (search) {
      dispatch(getCourseFilterThunk({ tuKhoa: search, soTrang: currentPage1 }));
    } else {
      dispatch(getCoursePagiThunk(currentPage1));
    }
  }, [currentPage1, search]);
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
          <Button type="primary" onClick={showModal1}>
            <div>
              <span>Add User</span> <PlusOutlined />
            </div>
          </Button>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg text-center">
        <table className="w-full text-sm text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
            <tr>
              <th
                scope="col"
                className=" py-5 align-middle break-words whitespace-normal w-[2%] "
              >
                #
              </th>
              <th
                scope="col"
                className=" py-5 align-middle break-words whitespace-normal w-[15%] "
              >
                Course ID
              </th>
              <th
                scope="col"
                className=" py-5 align-middle break-words whitespace-normal w-[13%] "
              >
                Course Name
              </th>
              <th
                scope="col"
                className=" py-5 align-middle break-words whitespace-normal w-[30%] "
              >
                Picture
              </th>
              <th
                scope="col"
                className=" py-5 align-middle break-words whitespace-normal w-[10%] "
              >
                Views
              </th>
              <th
                scope="col"
                className=" py-5 align-middle break-words whitespace-normal w-[15%] "
              >
                Creator
              </th>
              <th
                scope="col"
                className=" py-5 align-middle break-words whitespace-normal w-[15%] "
              >
                <SettingOutlined />
              </th>
            </tr>
          </thead>
          <tbody>
            {CourseListPagi?.items.map((e, index) => {
              return (
                <tr
                  className={`${
                    index % 2 == 0
                      ? "bg-gray-50 text-center h-[100px]"
                      : "bg-white h-[100px]"
                  } hover:bg-gray-700 text-center `}
                  key={index}
                >
                  <td className=" py-4 w-[2%] whitespace-normal break-words ">
                    {index}
                  </td>
                  <td className=" py-4 w-[15%] whitespace-normal break-words ">
                    {e?.maKhoaHoc}
                  </td>
                  <td className=" py-4 w-[13%] whitespace-normal break-words ">
                    {e?.tenKhoaHoc}
                  </td>
                  <td
                    className="py-4 w-[18%]"
                    style={{
                      backgroundImage: `URL(${e?.hinhAnh})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundClip: "content-box",
                    }}
                  ></td>
                  <td className=" py-4 w-[10%] whitespace-normal break-words ">
                    {e?.luotXem}
                  </td>
                  <td className=" py-4 w-[15%] whitespace-normal break-words ">
                    {e?.nguoiTao.hoTen}
                  </td>
                  <td className="flex justify-center py-8 gap-3 w-[100%] h-[100%] whitespace-normal break-words ">
                    <div className="hover:scale-125 transition ease-in-out delay-75 duration-500 cursor-pointer ">
                      <InfoCircleFilled
                        style={{ color: "var(--primary)", fontSize: "25px" }}
                        onClick={() => {
                          showModal2();
                          setID(e.maKhoaHoc);
                          dispatch(
                            getUserNotEnrollThunk({ maKhoaHoc: e?.maKhoaHoc })
                          );
                          dispatch(getUserAuthorThunk({ maKhoaHoc: e?.maKhoaHoc }));
                          dispatch(getUserUnAuthorThunk({ maKhoaHoc: e?.maKhoaHoc }));
                          if (!isModal2Open) {
                            setDropdown(false);
                          }
                        }}
                      />
                    </div>
                    <div className="hover:scale-125 transition ease-in-out delay-75 duration-500 cursor-pointer ">
                      <ToolFilled
                        style={{ color: "orange", fontSize: "25px" }}
                      />
                    </div>
                    <div
                      className={`hover:scale-125 transition ease-in-out delay-75 duration-500 cursor-pointer ${
                        isDelete ? "pointer-events-none" : ""
                      }  `}
                    >
                      <DeleteFilled
                        style={{ color: "red", fontSize: "25px" }}
                        onClick={() => {
                          if (CourseListPagi?.items.length == 1) {
                            setCurrentPage1(currentPage1 - 1);
                          }
                          dispatch(deleteCourseThunk(e?.maKhoaHoc));
                        }}
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
        {CourseListPagi && (
          <Pagination
            currentPage={currentPage1}
            onPageChange={onPageChange1}
            showIcons
            totalPages={CourseListPagi?.totalPages}
          />
        )}
      </div>
      {/* Modal add user */}
      <Modal
        closeIcon={false}
        open={isModal1Open}
        centered
        footer={null}
        onCancel={handleCancel1}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="taiKhoan"
            type="text"
            placeholder="Username"
            register={register}
            error={errors?.taiKhoan?.message}
          />
          <Input
            name="hoTen"
            type="text"
            placeholder="Full Name"
            register={register}
            error={errors?.hoTen?.message}
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            register={register}
            error={errors?.email?.message}
          />
          <Input
            name="matKhau"
            type="password"
            placeholder="Password"
            register={register}
            error={errors?.matKhau?.message}
          />
          <Input
            name="soDT"
            type="phone"
            placeholder="Phone"
            register={register}
            error={errors?.soDT?.message}
          />
          <Input
            name="maNhom"
            type="text"
            placeholder="Group (From GP01 to GP09)"
            register={register}
            error={errors?.maNhom?.message}
          />
          <Button htmlType={"submit"} type="primary" className="w-full">
            {" "}
            ADD USER
          </Button>
          <Button htmlType={"button"} type="primary" className="w-full">
            {" "}
            CLOSE
          </Button>
        </form>
      </Modal>
      {/* Modal User */}
      <Modal
        closeIcon={false}
        open={isModal2Open}
        centered
        footer={null}
        onCancel={handleCancel2}
        width={"50%"}
      >
        <div>
          <div className="flex justify-evenly">
            <label>Select User:</label>
            {/* Dropdown */}
            <div className="flex flex-col relative w-[40%]">
              <button
                onClick={() => {
                  setDropdown(!dropdown);
                }}
                id="dropdownHoverButton"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                {option?.tenND.substring(0, 30)}
                {option?.tenND.length > 30 ? "..." : ""}{" "}
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* Dropdown menu */}
              <div
                id="dropdownHover"
                className={`z-10  bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 absolute top-[45px] w-full left-0 ${
                  dropdown ? "" : "hidden"
                }  `}
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 h-[200px] overflow-y-auto text-center adminScrollbar">
                  {UserNotEnroll?.map((e, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setOption({ tenND: e?.hoTen, taiKhoan: e?.taiKhoan });
                        setDropdown(false);
                      }}
                      // className="border-b border-black mb-2 p-2"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                    >
                      {e?.hoTen}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Button
              onClick={() => {
                if (option.taiKhoan == "") {
                  NotiError("Please choose user!");
                } else {
                  dispatch(
                    authorCourseThunk({
                      maKhoaHoc: ID,
                      taiKhoan: option.taiKhoan,
                    })
                  )
                    .unwrap()
                    .then(() => {
                      NotiSuccess("Add Course Successfully!");
                      setOption({ ...option, tenND: "..." });
                      dispatch(getUserNotEnrollThunk({maKhoaHoc:ID}));
                      dispatch(getUserUnAuthorThunk({ maKhoaHoc:ID }));
                      dispatch(getUserAuthorThunk({ maKhoaHoc:ID}));
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }
              }}
            >
              Enroll
            </Button>
          </div>
          <hr className="h-[5px] bg-red-600" />
          {/* Cho Xac Thuc  */}
          <div className="">
            <p className="text-xl font-bold text-white">Unauthorized User</p>
          </div>
          <table className="w-full text-sm text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
              <tr>
                <th
                  scope="col"
                  className=" py-5 align-middle break-words whitespace-normal w-[10%] "
                >
                  #
                </th>
                <th
                  scope="col"
                  className=" py-5 align-middle break-words whitespace-normal w-[35%] "
                >
                  Username
                </th>
                <th
                  scope="col"
                  className=" py-5 align-middle break-words whitespace-normal w-[35%] "
                >
                  Full Name
                </th>
                <th
                  scope="col"
                  className=" py-5 align-middle break-words whitespace-normal w-[20%] "
                >
                  {/* <SettingOutlined /> */}
                  User Status
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Co maKhoaHoc && tenKhoaHoc */}

              {newUserNotAuthor?.[currentPage2 - 1]?.map((e, index) => {
                index += 1;
                return (
                  <tr
                    className={`${
                      index % 2 == 0 ? "bg-gray-50 text-center" : "bg-white"
                    } hover:bg-gray-700 text-center`}
                    key={index}
                  >
                    <td className=" py-4 w-[10%] whitespace-normal break-words ">
                      {index}
                    </td>
                    <td className=" py-4 w-[35%] whitespace-normal break-words ">
                      {e?.taiKhoan}
                    </td>
                    <td className=" py-4 w-[35%] whitespace-normal break-words ">
                      {e?.hoTen}
                    </td>
                    <td className="flex justify-center items-center m-auto py-4 gap-3 w-[45%] whitespace-normal break-words  ">
                      <div className="hover:scale-125 transition ease-in-out delay-75 duration-500 cursor-pointer">
                        <CheckCircleFilled
                          onClick={() => {
                            dispatch(
                              authorCourseThunk({
                                maKhoaHoc: ID,
                                taiKhoan: option?.taiKhoan,
                              })
                            );
                            dispatch(getUserUnAuthorThunk({ maKhoaHoc: ID }));
                            dispatch(getUserAuthorThunk({ maKhoaHoc: ID }));
                          }}
                          style={{ color: "green", fontSize: "25px" }}
                        />
                      </div>
                      <div className="hover:scale-125 transition ease-in-out delay-75 duration-500 cursor-pointer">
                        <DeleteFilled
                          onClick={() => {
                            if (
                              newUserNotAuthor[currentPage2 - 1].length == 1
                            ) {
                              setCurrentPage2(currentPage2 - 1);
                            }
                            dispatch(
                              cancelEnrollThunk({
                                taiKhoan: option.taiKhoan,
                                maKhoaHoc: ID,
                              })
                            )
                              .unwrap()
                              .then(() => {
                                dispatch(
                                  getUserNotEnrollThunk({ maKhoaHoc: ID })
                                );
                                dispatch(
                                  getUserUnAuthorThunk({ maKhoaHoc: ID })
                                );
                              })
                              .catch((err) => {
                                console.log(err);
                              });
                          }}
                          style={{ color: "red", fontSize: "25px" }}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex justify-center">
            {UserNotAuthor && (
              <Pagination
                currentPage={currentPage2}
                onPageChange={onPageChange2}
                showIcons
                totalPages={newUserNotAuthor?.length}
              />
            )}
          </div>
          <hr className="h-[5px] bg-red-600" />
          {/* Da Ghi Danh  */}
          <div className="">
            <p className="text-xl font-bold text-white">Authorized User</p>
          </div>
          <table className="w-full text-sm text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
              <tr>
                <th
                  scope="col"
                  className=" py-5 align-middle break-words whitespace-normal w-[10%] "
                >
                  #
                </th>
                <th
                  scope="col"
                  className=" py-5 align-middle break-words whitespace-normal w-[35%] "
                >
                  Username
                </th>
                <th
                  scope="col"
                  className=" py-5 align-middle break-words whitespace-normal w-[35%] "
                >
                  Full Name
                </th>
                <th
                  scope="col"
                  className=" py-5 align-middle break-words whitespace-normal w-[20%] "
                >
                  {/* <SettingOutlined /> */}
                  User Status
                </th>
              </tr>
            </thead>
            <tbody>
              {newUserAuthor?.[currentPage3 - 1]?.map((e, index) => {
                index += 1;
                return (
                  <tr
                    className={`${
                      index % 2 == 0 ? "bg-gray-50 text-center" : "bg-white"
                    } hover:bg-gray-700 text-center`}
                    key={index}
                  >
                    <td className=" py-4 w-[10%] whitespace-normal break-words ">
                      {index}
                    </td>
                    <td className=" py-4 w-[35%] whitespace-normal break-words ">
                      {e?.taiKhoan}
                    </td>
                    <td className=" py-4 w-[35%] whitespace-normal break-words ">
                      {e?.hoTen}
                    </td>
                    <td className="flex justify-center items-center m-auto py-4 gap-3 w-[25%] whitespace-normal break-words  ">
                      <div className="hover:scale-125 transition ease-in-out delay-75 duration-500 cursor-pointer">
                        <DeleteFilled
                          onClick={() => {
                            if (
                              newUserAuthor[currentPage3 - 1].length == 1 &&
                              currentPage3 >= 2
                            ) {
                              setCurrentPage3(currentPage3 - 1);
                            }
                            dispatch(
                              cancelEnrollThunk({
                                taiKhoan: (
                                  <option value="" className=""></option>
                                ),
                                maKhoaHoc: ID,
                              })
                            )
                              .unwrap()
                              .then(() => {
                                dispatch(
                                  getUserNotEnrollThunk({ maKhoaHoc: ID })
                                );
                                dispatch(
                                  getUserUnAuthorThunk({ maKhoaHoc: ID })
                                );
                                dispatch(getUserAuthorThunk({ maKhoaHoc: ID }));
                              })
                              .catch((err) => {
                                console.log(err);
                              });
                          }}
                          style={{ color: "red", fontSize: "25px" }}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex justify-center">
            <Pagination
              currentPage={currentPage3}
              onPageChange={onPageChange3}
              showIcons
              totalPages={newUserAuthor?.length}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CourseAdmin;
