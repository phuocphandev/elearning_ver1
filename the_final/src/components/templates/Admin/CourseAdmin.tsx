import {
  DeleteFilled,
  InfoCircleFilled,
  PlusOutlined,
  SettingOutlined,
  ToolFilled,
  CheckCircleFilled,
} from "@ant-design/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Modal } from "components";
import { NotiError, NotiSuccess } from "constant";
import { Pagination } from "flowbite-react";
import { useAuth } from "hooks";
import { useCourse } from "hooks/useCourse";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AddCourseSchema, AddCourseSchemaType } from "schema/AddCourse";
import { manageCourse } from "services";
import { useAppDispatch } from "store";
import "../../../sass/main.scss";
import {
  addCourseUploadImageThunk,
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
  const { UserNotEnroll, UserNotAuthor, UserAuthor, user } = useAuth();
  const [currentPage1, setCurrentPage1] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(1);
  const [currentPage3, setCurrentPage3] = useState(1);
  const [menu, setMenu] = useState([]);
  const [ID, setID] = useState("");
  const [option, setOption] = useState({ tenND: "...", taiKhoan: "" });
  const dispatch = useAppDispatch();
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [IMG, setIMG] = useState({ hinhAnh: undefined, name: undefined });
  const [urlIMG, setUrlImage] = useState("");
  const showModal1 = async () => {
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

  //===================================
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<AddCourseSchemaType>({
    mode: "onChange",
    resolver: zodResolver(AddCourseSchema),
  });

  ///format Date
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  //=========
  const onSubmit: SubmitHandler<AddCourseSchemaType> = async (value) => {

    if (IMG.name) {
      const today = new Date();
      const formattedDate = formatDate(today);
      const danhGia = parseInt(value.danhGia);
      const luotXem = parseInt(value.luotXem);

      const data = {
        ...value,
        biDanh: value.tenKhoaHoc,
        hinhAnh: {},
        taiKhoanNguoiTao: user.taiKhoan,
        ngayTao: formattedDate,
        danhGia: danhGia,
        luotXem: luotXem,
      };
      const formData = new FormData();
      for (let key in data) {
        if (key !== "hinhAnh") {
          formData.append(key, data[key]);
        } else {
          formData.append("File", IMG.hinhAnh, IMG.name);
        }
      }

      dispatch(addCourseUploadImageThunk(FormData))
        .unwrap()
        .then(() => {
          NotiSuccess("Add Course Successfully!");
          reset();
        })
        .catch((err) => {
          NotiError("Add Course Failed!");
          console.log(err);
        });
    } else {
      return;
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
  useEffect(() => {
    (async () => {
      try {
        const data = await manageCourse.getCourseMenu();
        setMenu(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleChangeFile = (e) => {
    let file = e.target.files[0];
    setIMG({ hinhAnh: file, name: file.name });
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setUrlImage(e?.target?.result as string);
    };
  };

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

  const CourseID = "Course ID";
  const truncatedCourseID =
    windowWidth < 768 ? "C."+CourseID.substring(7, 9) + ".." : CourseID;
  const CourseName = "CourseName";
  const truncatedCourseName =
    windowWidth < 768 ? CourseName.substring(6, 10) + ".." : CourseName;
  const Picture = " Picture";
  const truncatedPicture =
    windowWidth < 768 ? Picture.substring(0, 4) + ".." : Picture;
  const Creator = " Creator";
  const truncatedCreator =
    windowWidth < 768 ? Creator.substring(0, 5) + ".." : Creator;

  return (
    <div className="h-full">
      <div className="flex items-center justify-between p-5  ">
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
              <span>Add Course</span> <PlusOutlined />
            </div>
          </Button>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg text-center ">
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
                {truncatedCourseID}
              </th>
              <th
                scope="col"
                className=" py-5 align-middle break-words whitespace-normal w-[13%] "
              >
                {truncatedCourseName}
              </th>
              <th
                scope="col"
                className=" py-5 align-middle break-words whitespace-normal w-[30%] "
              >
                {truncatedPicture}
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
                {truncatedCreator}
              </th>
              <th
                scope="col"
                className=" py-5 align-middle break-words whitespace-normal w-[15%] "
              >
                <SettingOutlined />
              </th>
            </tr>
          </thead>
          <tbody className="md:text-[14px] text-[10px]">
            {CourseListPagi?.items.map((e, index) => {
              return (
                <tr
                  className={`${
                    index % 2 == 0
                      ? "bg-gray-50 text-center"
                      : "bg-white "
                  } hover:bg-gray-700 text-center h-[100px]`}
                  key={index}
                >
                  <td className=" py-4 w-[2%] whitespace-normal break-words break-all">
                    {index}
                  </td>
                  <td className=" py-4 w-[15%] whitespace-normal break-words break-all">
                    {e?.maKhoaHoc}
                  </td>
                  <td className=" py-4 w-[13%] whitespace-normal break-words break-all">
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
                  <td className=" py-4 w-[10%] whitespace-normal break-words break-all">
                    {e?.luotXem}
                  </td>
                  <td className=" py-4 w-[15%] whitespace-normal break-words break-all">
                    {e?.nguoiTao.hoTen}
                  </td>
                  <td className="md:flex justify-center py-8 gap-3 w-[100%] h-[100%] whitespace-normal break-words break-all">
                    <div className="hover:scale-125 transition ease-in-out delay-75 duration-500 cursor-pointer ">
                      <InfoCircleFilled
                        style={{ color: "var(--primary)"}}
                        className="md:text-[25px] text-[15px]"
                        onClick={async () => {
                          showModal2();
                          setID(e.maKhoaHoc);
                          dispatch(
                            getUserNotEnrollThunk({ maKhoaHoc: e?.maKhoaHoc })
                          );
                          dispatch(
                            getUserAuthorThunk({ maKhoaHoc: e?.maKhoaHoc })
                          );
                          dispatch(
                            getUserUnAuthorThunk({ maKhoaHoc: e?.maKhoaHoc })
                          );
                          if (!isModal2Open) {
                            setDropdown(false);
                          }
                        }}
                      />
                    </div>
                    <div className="hover:scale-125 transition ease-in-out delay-75 duration-500 cursor-pointer ">
                      <ToolFilled
                        style={{ color: "orange"}}
                        className="md:text-[25px] text-[15px]"
                      />
                    </div>
                    <div
                      className={`hover:scale-125 transition ease-in-out delay-75 duration-500 cursor-pointer ${
                        isDelete ? "pointer-events-none" : ""
                      }  `}
                    >
                      <DeleteFilled
                        style={{ color: "red" }}
                        className="md:text-[25px] text-[15px]"
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
        width={"50%"}
      >
        <div className="w-full h-[20px] text-center font-bold text-xl text-white mb-3">
          ADD COURSE
        </div>
        <hr className="mb-3" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-10 justify-evenly items-start">
            <div className="w-full">
              {/* Makhoahoc */}
              <div className="w-full mb-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path d="m678-134 46-46-64-64-46 46q-14 14-14 32t14 32q14 14 32 14t32-14Zm102-102 46-46q14-14 14-32t-14-32q-14-14-32-14t-32 14l-46 46 64 64ZM735-77q-37 37-89 37t-89-37q-37-37-37-89t37-89l148-148q37-37 89-37t89 37q37 37 37 89t-37 89L735-77ZM200-200v-560 560Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v245q-20-5-40-5t-40 3v-243H200v560h243q-3 20-3 40t5 40H200Zm280-670q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM280-600v-80h400v80H280Zm0 160v-80h400v34q-8 5-15.5 11.5T649-460l-20 20H280Zm0 160v-80h269l-49 49q-8 8-14.5 15.5T474-280H280Z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="input-group-1"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                    placeholder="Course ID"
                    {...register("maKhoaHoc")}
                  />
                </div>
                <p className="text-red-700">{errors?.maKhoaHoc?.message}</p>
              </div>
              {/*  */}
              {/* Danhmuckhoahoc */}
              <div className="w-full mb-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" />
                    </svg>
                  </div>
                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                    {...register("maDanhMucKhoaHoc")}
                  >
                    <option value={"null"}>Course Category</option>
                    {menu?.map((e) => (
                      <option value={e.maDanhMuc}>{e?.tenDanhMuc}</option>
                    ))}
                  </select>
                </div>
                <p className="text-red-700">
                  {errors?.maDanhMucKhoaHoc?.message}
                </p>
              </div>
              {/*  */}
              {/* Danhgia */}
              <div className="w-full mb-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path d="M80-400q-33 0-56.5-23.5T0-480v-240q0-12 5-23t13-19l198-198 30 30q6 6 10 15.5t4 18.5v8l-28 128h208q17 0 28.5 11.5T480-720v50q0 6-1 11.5t-3 10.5l-90 212q-7 17-22.5 26.5T330-400H80Zm238-80 82-194v-6H134l24-108-78 76v232h238ZM744 0l-30-30q-6-6-10-15.5T700-64v-8l28-128H520q-17 0-28.5-11.5T480-240v-50q0-6 1-11.5t3-10.5l90-212q8-17 23-26.5t33-9.5h250q33 0 56.5 23.5T960-480v240q0 12-4.5 22.5T942-198L744 0ZM642-480l-82 194v6h266l-24 108 78-76v-232H642Zm-562 0v-232 232Zm800 0v232-232Z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="input-group-1"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                    placeholder="Rating"
                    {...register("danhGia")}
                  />
                </div>
                <p className="text-red-700">{errors?.danhGia?.message}</p>
              </div>
              {/* Manhom */}
              <div className="w-full mb-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                    </svg>
                  </div>
                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                    {...register("maNhom")}
                  >
                    <option value={"null"}>Course Group</option>
                    {[...Array(15)].map((_, index) => {
                      return index < 9 ? (
                        <option value={`GP0${index + 1}`}>
                          GP0{index + 1}
                        </option>
                      ) : (
                        <option value={`GP${index + 1}`}>GP{index + 1}</option>
                      );
                    })}
                  </select>
                </div>
                <p className="text-red-700">{errors?.maNhom?.message}</p>
              </div>
              {/*  */}
            </div>
            <div className="w-full ">
              {/* Tenkhoahoc */}
              <div className="w-full mb-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path d="M563-491q73-54 114-118.5T718-738q0-32-10.5-47T679-800q-47 0-83 79.5T560-541q0 14 .5 26.5T563-491ZM120-120v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80ZM136-280l-56-56 64-64-64-64 56-56 64 64 64-64 56 56-64 64 64 64-56 56-64-64-64 64Zm482-40q-30 0-55-11.5T520-369q-25 14-51.5 25T414-322l-28-75q28-10 53.5-21.5T489-443q-5-22-7.5-48t-2.5-56q0-144 57-238.5T679-880q52 0 85 38.5T797-734q0 86-54.5 170T591-413q7 7 14.5 10.5T621-399q26 0 60.5-33t62.5-87l73 34q-7 17-11 41t1 42q10-5 23.5-17t27.5-30l63 49q-26 36-60 58t-63 22q-21 0-37.5-12.5T733-371q-28 25-57 38t-58 13Z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="input-group-1"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                    placeholder="Course Name"
                    {...register("tenKhoaHoc")}
                  />
                </div>
                <p className="text-red-700">{errors?.tenKhoaHoc?.message}</p>
              </div>
              {/*  */}
              {/* Ngaytao */}
              <div className="w-full mb-2 hidden">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="input-group-1"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                    placeholder="Create Date"
                  />
                </div>
                <p className="text-red-700"></p>
              </div>
              {/*  */}
              {/* Luotxem */}
              <div className="w-full mb-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="input-group-1"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                    placeholder="Views"
                    {...register("luotXem")}
                  />
                </div>
                <p className="text-red-700">{errors?.luotXem?.message}</p>
              </div>
              {/*  */}
              {/* Choosefile */}
              <input
                type="file"
                accept="image/png,image/jpg,image/jpeg "
                className="bg-cyan-600"
                onChange={handleChangeFile}
              ></input>
              {IMG.name && (
                <img
                  src={urlIMG}
                  alt={IMG.name}
                  className="w-[70px] h-[70px]"
                />
              )}
              <p className="text-red-700">
                {IMG.name ? "" : "Please input course picture!"}
              </p>
              {/*  */}
            </div>
          </div>
          {/* Mota */}
          <br />
          <p className="text-red-700">{errors?.moTa?.message}</p>
          <textarea
            className="w-full p-2"
            placeholder="  Add Description..."
            cols={30}
            rows={10}
            {...register("moTa")}
          ></textarea>
          {/*  */}

          <div className="flex justify-center mt-4">
            <Button htmlType={"submit"} type="primary" className="w-[20%]">
              {" "}
              ADD COURSE
            </Button>
            <Button
              htmlType={"button"}
              type="primary"
              className="w-[20%] ml-5"
              onClick={handleCancel1}
            >
              {" "}
              CLOSE
            </Button>
          </div>
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
                      dispatch(getUserNotEnrollThunk({ maKhoaHoc: ID }));
                      dispatch(getUserUnAuthorThunk({ maKhoaHoc: ID }));
                      dispatch(getUserAuthorThunk({ maKhoaHoc: ID }));
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
                                maKhoaHoc: ID,
                                taiKhoan: e?.taiKhoan,
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
                                maKhoaHoc: ID,
                                taiKhoan: e?.taiKhoan,
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
