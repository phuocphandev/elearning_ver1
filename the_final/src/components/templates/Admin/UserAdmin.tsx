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
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterSchema, RegisterSchemaType } from "schema";
import { manageUser } from "services/manageUser";
import { useAppDispatch } from "store";
import "../../../sass/main.scss";
import {
  authorCourseThunk,
  cancelEnrollThunk,
} from "store/CourseManagement/thunk";
import {
  deleteAccountThunk,
  getAccountFilterThunk,
  getAccountThunk,
  getCourseNotEnrollThunk,
  getCourseUnAuthorThunk,
  getCourseAuthorThunk,
  updateUserThunk,
} from "store/manageUser/thunk";

export const UserAdmin = () => {
  const [search, setSearch] = useState(null);
  const {
    AllAccount,
    isDelete,
    CourseNotEnroll,
    CourseNotAuthor,
    CourseAuthor,
  } = useAuth();
  const [currentPage1, setCurrentPage1] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(1);
  const [currentPage3, setCurrentPage3] = useState(1);
  const [update, setUpDate] = useState({ state: false, type: "" });
  const [account, setAccount] = useState("");
  const [option, setOption] = useState({ tenKH: "...", maKH: "" });
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

  const newCourseNotAuthor = [];
  let indexArr = [];
  for (let i = 0; i < CourseNotAuthor?.length; i++) {
    indexArr.push(CourseNotAuthor[i]);
    if (indexArr?.length == 2) {
      newCourseNotAuthor.push(indexArr);
      indexArr = [];
    }
  }
  if (indexArr.length !== 0) {
    newCourseNotAuthor.push(indexArr);
  }

  // Phan trang - xac thuc
  const newCourseAuthor = [];
  let indexArr2 = [];
  for (let i = 0; i < CourseAuthor?.length; i++) {
    indexArr2.push(CourseAuthor[i]);
    if (indexArr2?.length == 2) {
      newCourseAuthor.push(indexArr2);
      indexArr2 = [];
    }
  }
  if (indexArr2.length !== 0) {
    newCourseAuthor.push(indexArr2);
  }
  const emptyForm = {
    taiKhoan: "",
    hoTen: "",
    email: "",
    matKhau: "",
    soDT: "",
    maNhom: "",
  };
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
    if (update.state) {
      dispatch(updateUserThunk({ ...value, maLoaiNguoiDung: update.type }))
        .unwrap()
        .then(() => {
          reset(emptyForm);
          NotiSuccess("Updated!");
          dispatch(getAccountThunk(currentPage1));
          setIsModal1Open(false);
          setUpDate({ state: false, type: "" });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      try {
        await manageUser.register(value);
        NotiSuccess("Create account successfully!");
        reset(emptyForm);
        setIsModal1Open(false);
      } catch (error) {
        NotiError(error?.response?.data);
      }
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
      dispatch(
        getAccountFilterThunk({ tuKhoa: search, soTrang: currentPage1 })
      );
    } else {
      dispatch(getAccountThunk(currentPage1));
    }
  }, [currentPage1, search]);

  //Responsive th:
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const category = "Category";
  const truncatedCategory =
    windowWidth < 768 ? category.substring(0, 4) + ".." : category;
  const username = " UserName";
  const truncatedUserName =
    windowWidth < 768 ? username.substring(0, 4) + ".." : username;
  const FullName = " FullName";
  const truncatedFullName =
    windowWidth < 768 ? FullName.substring(5, 8) + ".." : FullName;
  const PhoneNumber = " Phone Number";
  const truncatedPhoneNumber =
    windowWidth < 768 ? PhoneNumber.substring(0, 5) + ".." : PhoneNumber;

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
          <Button
            type="primary"
            onClick={() => {
              showModal1();
              reset(emptyForm);
            }}
          >
            <div>
              <span>Add User</span> <PlusOutlined />
            </div>
          </Button>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg text-center ">
        <table className="md:w-full text-sm text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 w-full ">
            <tr>
              <th
                scope="col"
                className=" py-5 align-middle break-words whitespace-normal  w-[2%] "
              >
                #
              </th>
              <th
                scope="col"
                className=" py-5 align-middle break-words whitespace-normal  w-[20%] "
              >
                {truncatedUserName}
              </th>
              <th
                scope="col"
                className=" py-5 align-middle break-words whitespace-normal  w-[7%] "
              >
                {truncatedCategory}
              </th>
              <th
                scope="col"
                className=" py-5 align-middle break-words whitespace-normal  w-[21%] "
              >
                {truncatedFullName}
              </th>
              <th
                scope="col"
                className=" py-5 align-middle break-words whitespace-normal  w-[20%] "
              >
                Email
              </th>
              <th
                scope="col"
                className=" py-5 align-middle break-words whitespace-normal  w-[10%] "
              >
                {truncatedPhoneNumber}
              </th>
              <th
                scope="col"
                className=" py-5 align-middle break-words whitespace-normal  w-[20%] "
              >
                <SettingOutlined />
              </th>
            </tr>
          </thead>
          <tbody>
            {AllAccount?.items.map((e, index) => {
              index = index + 1;
              return (
                <tr
                  key={index}
                  className={`${
                    index % 2 == 0 ? "bg-gray-50 " : "bg-white"
                  } hover:bg-gray-700`}
                >
                  <td className=" py-4 w-[2%] whitespace-normal break-words break-all  ">
                    {index}
                  </td>
                  <td className=" py-4 w-[20%] whitespace-normal break-words break-all  ">
                    {e?.taiKhoan}
                  </td>
                  <td className=" py-4 w-[7%] whitespace-normal break-words break-all  ">
                    {e?.tenLoaiNguoiDung}
                  </td>
                  <td className=" py-4 w-[21%] whitespace-normal break-words break-all  ">
                    {e?.hoTen}
                  </td>
                  <td className=" py-4 w-[20%] whitespace-normal break-words break-all  ">
                    {e?.email}
                  </td>
                  <td className=" py-4 w-[10%] whitespace-normal break-words break-all  ">
                    {e?.soDT}
                  </td>
                  <td className="md:flex justify-center items-center m-auto py-4 gap-3 w-[20%] whitespace-normal break-words break-all  ">
                    <div className="hover:scale-125 transition ease-in-out delay-75 duration-500 cursor-pointer">
                      <InfoCircleFilled
                        style={{ color: "var(--primary)", fontSize: "25px" }}
                        onClick={() => {
                          showModal2();
                          setAccount(e.taiKhoan);
                          dispatch(getCourseNotEnrollThunk(e?.taiKhoan));
                          dispatch(
                            getCourseAuthorThunk({ taiKhoan: e?.taiKhoan })
                          );
                          dispatch(
                            getCourseUnAuthorThunk({ taiKhoan: e?.taiKhoan })
                          );
                          if (!isModal2Open) {
                            setDropdown(false);
                          }
                        }}
                      />
                    </div>
                    <div className="hover:scale-125 transition ease-in-out delay-75 duration-500 cursor-pointer">
                      <ToolFilled
                        style={{ color: "orange", fontSize: "25px" }}
                        onClick={() => {
                          setIsModal1Open(true);
                          setUpDate({ state: true, type: e?.maLoaiNguoiDung });
                          reset(e);
                        }}
                      />
                    </div>
                    <div
                      className={`hover:scale-125 transition ease-in-out delay-75 duration-500 cursor-pointer ${
                        isDelete ? "pointer-events-none" : ""
                      }`}
                    >
                      <DeleteFilled
                        style={{ color: "red", fontSize: "25px" }}
                        onClick={() => {
                          if (AllAccount?.items.length == 1) {
                            setCurrentPage1(currentPage1 - 1);
                          }
                          dispatch(deleteAccountThunk(e?.taiKhoan))
                            .unwrap()
                            .then(() => {
                              NotiSuccess("Deleted!");
                            })
                            .catch((err) => {
                              NotiError(err?.response?.data);
                            });
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
        {AllAccount && (
          <Pagination
            currentPage={currentPage1}
            onPageChange={onPageChange1}
            showIcons
            totalPages={AllAccount?.totalPages}
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
            disabled={update.state}
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
          <div className="flex justify-center gap-4 items-center mt-4">
            {update?.state ? (
              <Button htmlType={"submit"} type="primary" className="w-25%">
                {" "}
                UPDATE
              </Button>
            ) : (
              <Button htmlType={"submit"} type="primary" className="w-25%">
                {" "}
                ADD USER
              </Button>
            )}

            <Button
              htmlType={"button"}
              type="primary"
              className="w-25%"
              onClick={() => {
                setIsModal1Open(false);
              }}
            >
              {" "}
              CLOSE
            </Button>
          </div>
        </form>
      </Modal>
      {/* Modal Regis Course */}
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
            <label className="text-white font-bold text-xl">
              Select Course:
            </label>
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
                {option?.tenKH.substring(0, 30)}
                {option?.tenKH.length > 30 ? "..." : ""}{" "}
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
                  {CourseNotEnroll?.map((e) => (
                    <li
                      key={e?.maKhoaHoc}
                      onClick={() => {
                        setOption({ tenKH: e?.tenKhoaHoc, maKH: e?.maKhoaHoc });
                        setDropdown(false);
                      }}
                      // className="border-b border-black mb-2 p-2"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                    >
                      {e?.tenKhoaHoc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Button
              onClick={() => {
                if (option.maKH == "...") {
                  NotiError("Please choose course!");
                } else {
                  dispatch(
                    authorCourseThunk({
                      maKhoaHoc: option.maKH,
                      taiKhoan: account,
                    })
                  )
                    .unwrap()
                    .then(() => {
                      NotiSuccess("Add Course Successfully!");
                      setOption({ ...option, tenKH: "..." });
                      dispatch(getCourseNotEnrollThunk(account));
                      dispatch(getCourseUnAuthorThunk({ taiKhoan: account }));
                      dispatch(getCourseAuthorThunk({ taiKhoan: account }));
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
            <p className="text-xl font-bold text-white">Unauthorized Course</p>
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
                  className=" py-5 align-middle break-words whitespace-normal w-[45%] "
                >
                  Course Name
                </th>
                <th
                  scope="col"
                  className=" py-5 align-middle break-words whitespace-normal w-[45%] "
                >
                  {/* <SettingOutlined /> */}
                  Course Status
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Co maKhoaHoc && tenKhoaHoc */}
              {newCourseNotAuthor?.[currentPage2 - 1]?.map((e, index) => {
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
                    <td className=" py-4 w-[45%] whitespace-normal break-words ">
                      {e?.tenKhoaHoc}
                    </td>
                    <td className="flex justify-center items-center m-auto py-4 gap-3 w-[45%] whitespace-normal break-words  ">
                      <div className="hover:scale-125 transition ease-in-out delay-75 duration-500 cursor-pointer">
                        <CheckCircleFilled
                          onClick={() => {
                            dispatch(
                              authorCourseThunk({
                                maKhoaHoc: e.maKhoaHoc,
                                taiKhoan: account,
                              })
                            );
                            dispatch(
                              getCourseUnAuthorThunk({ taiKhoan: account })
                            );
                            dispatch(
                              getCourseAuthorThunk({ taiKhoan: account })
                            );
                          }}
                          style={{ color: "green", fontSize: "25px" }}
                        />
                      </div>
                      <div className="hover:scale-125 transition ease-in-out delay-75 duration-500 cursor-pointer">
                        <DeleteFilled
                          onClick={() => {
                            if (
                              newCourseNotAuthor[currentPage2 - 1].length == 1
                            ) {
                              setCurrentPage2(currentPage2 - 1);
                            }
                            dispatch(
                              cancelEnrollThunk({
                                taiKhoan: account,
                                maKhoaHoc: e.maKhoaHoc,
                              })
                            )
                              .unwrap()
                              .then(() => {
                                dispatch(getCourseNotEnrollThunk(account));
                                dispatch(
                                  getCourseUnAuthorThunk({ taiKhoan: account })
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
              {/* <tr
                // className={`${
                //   index % 2 == 0 ? "bg-gray-50 " : "bg-white"
                // } hover:bg-gray-700`}
                className="text-center bg-gray-700"
              >
                <td className=" py-4 w-[10%] whitespace-normal break-words ">
                  a
                </td>
                <td className=" py-4 w-[45%] whitespace-normal break-words ">
                  b
                </td>
                <td className="flex justify-center items-center m-auto py-4 gap-3 w-[45%] whitespace-normal break-words  ">
                  c
                </td>
              </tr> */}
            </tbody>
          </table>
          <div className="flex justify-center">
            {CourseNotAuthor && (
              <Pagination
                currentPage={currentPage2}
                onPageChange={onPageChange2}
                showIcons
                totalPages={newCourseNotAuthor?.length}
              />
            )}
          </div>
          <hr className="h-[5px] bg-red-600" />
          {/* Da Ghi Danh  */}
          <div className="">
            <p className="text-xl font-bold text-white">Authorized Course</p>
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
                  className=" py-5 align-middle break-words whitespace-normal w-[45%] "
                >
                  Course Name
                </th>
                <th
                  scope="col"
                  className=" py-5 align-middle break-words whitespace-normal w-[45%] "
                >
                  {/* <SettingOutlined /> */}
                  Course Status
                </th>
              </tr>
            </thead>
            <tbody>
              {newCourseAuthor?.[currentPage3 - 1]?.map((e, index) => {
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
                    <td className=" py-4 w-[45%] whitespace-normal break-words ">
                      {e?.tenKhoaHoc}
                    </td>
                    <td className="flex justify-center items-center m-auto py-4 gap-3 w-[45%] whitespace-normal break-words  ">
                      <div className="hover:scale-125 transition ease-in-out delay-75 duration-500 cursor-pointer">
                        <DeleteFilled
                          onClick={() => {
                            if (
                              newCourseAuthor[currentPage3 - 1].length == 1 &&
                              currentPage3 >= 2
                            ) {
                              setCurrentPage3(currentPage3 - 1);
                            }
                            dispatch(
                              cancelEnrollThunk({
                                taiKhoan: account,
                                maKhoaHoc: e.maKhoaHoc,
                              })
                            )
                              .unwrap()
                              .then(() => {
                                dispatch(getCourseNotEnrollThunk(account));
                                dispatch(
                                  getCourseUnAuthorThunk({ taiKhoan: account })
                                );
                                dispatch(
                                  getCourseAuthorThunk({ taiKhoan: account })
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
            <Pagination
              currentPage={currentPage3}
              onPageChange={onPageChange3}
              showIcons
              totalPages={newCourseAuthor?.length}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UserAdmin;
