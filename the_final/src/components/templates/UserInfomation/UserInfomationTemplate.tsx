import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Square3Stack3DIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useAuth } from "hooks";
import { Button, Input, Modal } from "components";
import "../../../sass/main.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, RegisterSchemaType } from "schema";
import { NotiAlert, NotiSuccess } from "constant";
import { useAppDispatch } from "store";
import { updateUserThunk } from "store/manageUser/thunk";
import { UserInfo } from "types";
import { CalendarOutlined, FieldTimeOutlined } from "@ant-design/icons";
import { cancelEnrollThunk } from "store/CourseManagement/thunk";
import { useCourse } from "hooks/useCourse";

export const UserInfomationTemplate = () => {
  let { user } = useAuth();
  user = user as UserInfo;
  const {isDelete} = useCourse();
  const dispatch = useAppDispatch();
  console.log ("user ",user)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    mode: "onChange",
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<RegisterSchemaType> = (value) => {
    dispatch(
      updateUserThunk({ ...value, maLoaiNguoiDung: user?.maLoaiNguoiDung })
    )
      .unwrap()
      .then(() => {
        NotiSuccess("Account Updated!");
        setIsModalOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleOk = async () => {
    const updateFlag = await NotiAlert();
    console.log(updateFlag);
    if (updateFlag) {
      handleSubmit(onSubmit)();
    }
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const data = [
    {
      label: "Profile",
      icon: UserCircleIcon,
    },
    {
      label: "Dashboard",
      icon: Square3Stack3DIcon,
    },
  ];

  return (
    <div className="mt-[90px]">
      <div className="h-[80px] bg-blue-500 flex items-center">
        <p className="text-white text-xl ml-4">USER INFORMATION</p>
      </div>
      <div className="grid grid-cols-4">
        <div className="col-span-1 h-full bg-yellow-300">
          <div className="flex flex-col items-center mt-16">
            <img
              className="w-[50px] md:w-[100px]"
              src="/public/image/avatar.svg"
              alt=""
            />
            <h2 className="mt-4 text-xl">{user?.hoTen}</h2>
            <p>
              <span className="text-sky-700 md:inline-block hidden">Role:</span>{" "}
              {user?.maLoaiNguoiDung == "HV" ? "Developer" : "Admin"}
            </p>
          </div>
        </div>
        <div className="col-span-3 h-full bg-green-400">
          <div>
            <Tabs value="profile">
              <TabsHeader className="h-[50px] w-[50%] ml-[12px] sticky z-[5] ">
                <Tab value={"profile"} className="">
                  <div className="flex items-center gap-2">
                    {React.createElement(data[0].icon, {
                      className: "w-5 h-5",
                    })}
                    {data[0].label}
                  </div>
                </Tab>
                <Tab value={"dashboard"}>
                  <div className="flex items-center gap-2">
                    {React.createElement(data[1].icon, {
                      className: "w-5 h-5",
                    })}
                    {data[1].label}
                  </div>
                </Tab>
              </TabsHeader>
              <TabsBody>
                <TabPanel value={"profile"}>
                  <div className="w-full">
                    <section className=" bg-gray-100  bg-opacity-50 h-full rounded-[10px] overflow-hidden">
                      <div className=" md:mx-0 mx-auto container max-w-2xl md:max-w-full md:w-full shadow-md ">
                        <div className="bg-white space-y-6">
                          <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
                            <h2 className="md:w-1/3 max-w-sm mx-auto">
                              Account
                            </h2>
                            <div className="md:w-2/3 max-w-sm mx-auto">
                              <label className="text-sm text-gray-400">
                                Email
                              </label>
                              <div className="w-full inline-flex border">
                                <div className="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                                  <svg
                                    fill="none"
                                    className="w-6 text-gray-400 mx-auto"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                  </svg>
                                </div>
                                <input
                                  type="email"
                                  className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                                  placeholder="email@example.com"
                                  disabled
                                  value={user?.email}
                                />
                              </div>
                            </div>
                          </div>

                          <hr />
                          <div className="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
                            <h2 className="md:w-1/3 mx-auto max-w-sm">
                              Personal info
                            </h2>
                            <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
                              <div>
                                <label className="text-sm text-gray-400">
                                  Full name
                                </label>
                                <div className="w-full inline-flex border">
                                  <div className="w-1/12 pt-2 bg-gray-100">
                                    <svg
                                      fill="none"
                                      className="w-6 text-gray-400 mx-auto"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                      />
                                    </svg>
                                  </div>
                                  <input
                                    type="text"
                                    className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                                    placeholder="Charly Olivas"
                                    disabled
                                    value={user?.hoTen}
                                  />
                                </div>
                              </div>
                              <div>
                                <label className="text-sm text-gray-400">
                                  Phone number
                                </label>
                                <div className="w-full inline-flex border">
                                  <div className="pt-2 w-1/12 bg-gray-100">
                                    <svg
                                      fill="none"
                                      className="w-6 text-gray-400 mx-auto"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                                      />
                                    </svg>
                                  </div>
                                  <input
                                    type="text"
                                    className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                                    placeholder="12341234"
                                    disabled
                                    value={user?.soDT}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <hr />
                          <div className="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
                            <h2 className="md:w-1/3 mx-auto max-w-sm">
                              Other Information
                            </h2>
                            <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
                              <div>
                                <label className="text-sm text-gray-400">
                                  Account Type
                                </label>
                                <div className="w-full inline-flex border">
                                  <div className="w-1/12 pt-2 bg-gray-100">
                                    <svg
                                      fill="none"
                                      className="w-6 text-gray-400 mx-auto"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"
                                      />
                                    </svg>
                                  </div>
                                  <input
                                    type="text"
                                    className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                                    placeholder="Charly Olivas"
                                    disabled
                                    value={user?.maLoaiNguoiDung}
                                  />
                                </div>
                              </div>
                              <div>
                                <label className="text-sm text-gray-400">
                                  Group Type
                                </label>
                                <div className="w-full inline-flex border">
                                  <div className="pt-2 w-1/12 bg-gray-100">
                                    <svg
                                      fill="none"
                                      className="w-6 text-gray-400 mx-auto"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
                                      />
                                    </svg>
                                  </div>
                                  <input
                                    type="text"
                                    className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                                    placeholder="12341234"
                                    disabled
                                    value={user?.maNhom}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr />
                          <div className="w-full p-4 text-right text-gray-500">
                            <button
                              className="inline-flex items-center focus:outline-none mr-4 bg-indigo-400 rounded-md text-center py-2 px-4 text-white"
                              onClick={() => {
                                reset(user);
                                showModal();
                              }}
                            >
                              <svg
                                fill="none"
                                className="w-4 text-white mr-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                />
                              </svg>
                              Update account
                            </button>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </TabPanel>
                <TabPanel value={"dashboard"}>
                  <div className="w-full">
                    <section className=" bg-gray-100  bg-opacity-50 h-full rounded-[10px] overflow-hidden">
                      <div className=" md:mx-0 mx-auto container max-w-2xl md:max-w-full md:w-full shadow-md ">
                        {user?.chiTietKhoaHocGhiDanh.map((e) => (
                          <div>
                            <div
                              key={e.maKhoaHoc}
                              className="grid grid-cols-4 gap-1 mb-5"
                            >
                              <div className="col-span-1">
                                <img
                                  className="w-[300px]"
                                  src={e.hinhAnh}
                                  alt={e.tenKhoaHoc}
                                />
                              </div>
                              <div className="col-span-3 ml-2">
                                <h3 className="font-bold text-xl">
                                  {e.tenKhoaHoc}
                                </h3>
                                <p className="text-[#6a6666] h-[30%]">
                                  {e.moTa.substring(0,100)}...
                                </p>
                                <span>
                                  <FieldTimeOutlined /> 8 hr &nbsp;&nbsp;{" "}
                                  <CalendarOutlined /> 8 days{" "}
                                </span>
                                <p>Rating: {e.danhGia}/10</p>
                                <p className="flex justify-between items-center">
                                  <p className="flex gap-2 items-center">
                                    <div className="w-[40px]">
                                      <img
                                        className="w-[40px]"
                                        src="/public/image/avatar.svg"
                                        alt="avatar"
                                      />
                                    </div>
                                    <span className="text-xl">Kevin Khanh</span>
                                  </p>
                                  <Button loading={isDelete} type="primary" danger className="mr-4 hover:scale-105" onClick={()=>{
                                    dispatch(cancelEnrollThunk({taiKhoan:user.taiKhoan,maKhoaHoc:e.maKhoaHoc})).unwrap().then(()=>{
                                      NotiSuccess("Delete Successfully!");
                                    }).catch((err)=>{
                                      console.log(err)
                                    })
                                  }}>
                                    Delete
                                  </Button>
                                </p>
                              </div>
                            </div>
                            <hr className="w-full my-2 h-[5px] bg-red-500" />
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                </TabPanel>
              </TabsBody>
            </Tabs>
          </div>
        </div>
      </div>
      <div>
        <Modal
          className="UserInfomation"
          title={
            <div>
              <p className="pt-5">EDIT INFORMATION </p>
              <hr />
            </div>
          }
          closeIcon={false}
          open={isModalOpen}
          centered
          onCancel={handleCancel}
          onOk={handleOk}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
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
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default UserInfomationTemplate;
