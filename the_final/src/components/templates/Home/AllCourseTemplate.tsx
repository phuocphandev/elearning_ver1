import { Card } from "components";
import { PATH } from "constant";
import { Pagination } from "flowbite-react";
import { useCourse } from "hooks/useCourse";
import { useEffect, useState } from "react";
import { generatePath, useNavigate } from "react-router-dom";
import { useAppDispatch } from "store";
import { getCoursePagiThunk } from "store/CourseManagement/thunk";
import "../../../sass/main.scss";
import { Loading } from "pages";

export const AllCourseTemplate = () => {
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);
  const { CourseListPagi } = useCourse();
  const CourseList = CourseListPagi?.items;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(getCoursePagiThunk(currentPage));
  }, [currentPage]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="mt-[80px] AllCourseTemplate">
      <div
        className={`absolute top-0 left-0 h-full w-full z-[9999] ${
          loading ? "" : "hidden"
        }`}
      >
        <Loading />
      </div>
      <div className="h-[20vh] bg-[var(--tertiary)] flex items-center pl-[7%]  font-bold">
        <p className="text-white text-2xl ml-4">All Course Available</p>
      </div>
      <div>
        <div className="md:my-14 md:px-16 ">
          <div className="grid md:grid-cols-4 gap-[100px] CourseList">
            {CourseList?.map((course) => {
              const detailPath = generatePath("/" + PATH.detail, {
                courseID: course?.maKhoaHoc,
              });
              return (
                <div className="col-span-1 " key={course?.maKhoaHoc}>
                  <Card
                    cover={
                      <div className="">
                        <img
                          alt="example"
                          src={course?.hinhAnh}
                          className="h-[180px] w-full border-l-2 border-r-2 border-b-2 border-[var(--tertiary)] mr-5"
                        />
                      </div>
                    }
                    style={{
                      border: "3px solid var(--tertiary)",
                    }}
                    className="relative border-4 border-[var(--tertiary)] card overflow-hidden"
                  >
                    <Card.Meta
                      title={
                        <p
                          className="text-[var(--tertiary)] font-bold h-[50px]  flex items-center "
                          style={{ whiteSpace: "normal" }}
                        >
                          {course?.tenKhoaHoc.length>30?course?.tenKhoaHoc.substring(0,30)+' ...':course?.tenKhoaHoc}
                        </p>
                      }
                      description={
                        <p className="flex justify-center h-[70px]">
                          {course?.moTa.length > 100
                            ? `${course?.moTa.substring(0, 70)}...`
                            : course?.moTa}
                        </p>
                      }
                      className="relative"
                    />
                    <div
                      className="flex justify-centers items-center bg-[var(--tertiary)] absolute top-[150px] left-0 pr-3 "
                      style={{ borderRadius: "0 30px 30px 0" }}
                    >
                      <img
                        src="/public/image/CourseList/author.gif"
                        alt="author"
                        className="w-[40px] block"
                      />
                      {/* <img src='/public/image/CourseList/authorStatic.png' alt="author" className="w-[40px] " /> */}
                      <p className="">{course?.nguoiTao?.hoTen}</p>
                    </div>
                    {/* Time road */}
                    <div className="time flex gap-5 justify-center mt-5">
                      <div className="flex">
                        <img
                          src="/public/image/CourseList/clock.png"
                          alt="clock"
                          className="w-[20px] block"
                        />
                        <p className="font-bold text-[var(--tertiary)]">23H</p>
                      </div>
                      <div className="flex">
                        <img
                          src="/public/image/CourseList/calendar.png"
                          alt="calendar"
                          className="w-[20px] block"
                        />
                        <p className="font-bold text-[var(--tertiary)]">2.5M</p>
                      </div>
                      <div className="flex">
                        <img
                          src="/public/image/CourseList/enroll.png"
                          alt="enroll"
                          className="w-[20px] block"
                        />
                        <p className="font-bold text-[var(--tertiary)]">3.2k</p>
                      </div>
                    </div>
                    {/* Author  */}
                    <div className="mt-2 border-t-2 w-full flex justify-between">
                      <div className="mt-2 flex items-center gap-1">
                        <img
                          src="/public/image/avatar.svg"
                          alt="avatar"
                          className="w-[30px]"
                        />
                        <p className="text-gray-500 font-bold">John Cena</p>
                      </div>
                      {/* Price  */}
                      <div className="relative">
                        <p className="text-gray-200 line-through">1.100.000</p>
                        <div className="text-[var(--primary)] text-xl">
                          400.000<span className="text-[9px]">vnđ</span>
                          <img
                            src="/public/image/CourseList/sale.png"
                            alt="sale"
                            className="absolute w-[30px] top-0 right-0"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="cardLayer bg-gray-800 bg-opacity-80 flex flex-col ">
                      <div className="flex gap-5 flex-col items-center justify-center w-[90%] m-auto mt-5">
                        <p className="text-[var(--primary)] flex justify-center font-bold text-xl bg-black px-3 py-1 bg-opacity-40 rounded-xl  ease-in-out duration-500 transition-all  hover:-translate-y-2">
                          From Zero To Hero
                        </p>
                        <p className="text-white bg-black px-3 py-1 bg-opacity-40 rounded-xl  ease-in-out duration-500 transition-all  hover:-translate-y-2">
                          Welcome to our Fullstack Bootcamp E-Learning Page!
                          Dive into a transformative learning experience
                          designed to propel you into the world of fullstack
                          development. Our comprehensive course combines
                          front-end and back-end technologies, equipping you
                          with the skills to create dynamic, end-to-end web
                          applications.
                        </p>
                      </div>
                      {/* Time road */}
                      <div className="time flex gap-5 justify-center mt-5 border-t-2 w-[90%] m-auto mb-5 ">
                        <div className="flex">
                          <img
                            src="/public/image/CourseList/clock.png"
                            alt="clock"
                            className="w-[20px] block"
                          />
                          <p className="font-bold text-[var(--tertiary)]">
                            23H
                          </p>
                        </div>
                        <div className="flex">
                          <img
                            src="/public/image/CourseList/calendar.png"
                            alt="calendar"
                            className="w-[20px] block"
                          />
                          <p className="font-bold text-[var(--tertiary)]">
                            2.5M
                          </p>
                        </div>
                        <div className="flex">
                          <img
                            src="/public/image/CourseList/enroll.png"
                            alt="enroll"
                            className="w-[20px] block"
                          />
                          <p className="font-bold text-[var(--tertiary)]">
                            3.2k
                          </p>
                        </div>
                      </div>
                      <button
                        className="bg-[var(--primary)] py-2 px-4 rounded text-white  w-[90%] m-auto hover:bg-[var(--quaternary)] ease-in-out duration-500 transition-all hover:-translate-y-2"
                        onClick={() => navigate(detailPath)}
                      >
                        Xem chi tiết
                      </button>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-center md:text-center mb-4 Pagi ">
        <div className="md:w-[400px]">
          {CourseListPagi && (
            <Pagination
              currentPage={currentPage}
              onPageChange={onPageChange}
              showIcons
              totalPages={CourseListPagi?.totalPages}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AllCourseTemplate;
