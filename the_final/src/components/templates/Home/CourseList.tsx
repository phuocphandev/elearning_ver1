import { Card } from "components";
import { useCourse } from "hooks/useCourse";
import { useEffect, useMemo } from "react";
import { useAppDispatch } from "store";
import { manageCourseThunk } from "store/CourseManagement/thunk";
import { CourseType } from "types/Course";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { generatePath, useNavigate } from "react-router";
import { PATH } from "constant";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
    slidesToSlide: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
    slidesToSlide: 3,
  },
  miniMobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 3,
  },
};

export const CourseList = () => {
  const dispatch = useAppDispatch();
  const { CourseList } = useCourse();
  const navigate= useNavigate();
  //Lấy ds Course
  useEffect(() => {
    dispatch(manageCourseThunk());
  }, [dispatch]);

  //sẽ hd khi CourseList thay đổi, tránh UE để render nhiều lần
  const pagingCourse = useMemo(() => {
    let indexArr = [];
    let index = 0;
    const result = [];

    for (let i = 0; i <= CourseList?.length - 1; i++) {
      indexArr.push(CourseList?.[i]);
      index++;
      if (index === 2) {
        result.push(indexArr);
        index = 0;
        indexArr = [];
      }
    }
    result.push(indexArr);

    return result;
  }, [CourseList]);


  return (
    <div className="CourseList">
      <Carousel
        responsive={responsive}
        showDots={true}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        draggable={true}
        className="bg-transparent w-[100%] m-auto py-8 px-6 rounded-xl  flex justify-start items-center pl-[3%] mr-10 pb-10"
      >
        {pagingCourse?.map((coursePage,index) => (
          <div key={index} className="flex flex-col gap-10  w-[270px] relative items-center justify-center ml-12 md:ml-3 xl:ml-0 ">
            {coursePage?.map((course: CourseType) => {
              const detailPath= generatePath(PATH.detail,{ courseID: course.maKhoaHoc })
              return<Card
                key={course.maKhoaHoc}
                cover={
                  <div className="">
                    <img
                      alt="example"
                      src={course.hinhAnh}
                      className="h-[180px] w-[270px] border-l-2 border-r-2 border-b-2 border-[var(--tertiary)] mr-5"
                    />
                  </div>
                  
                }
                style={{
                  border: "3px solid var(--tertiary)",
                  boxShadow:"rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px"
                }}
                className="relative border-4 border-[var(--tertiary)] card overflow-hidden"
              >
                <div className={`ribbon ribbonText ${ (course?.luotXem > 3000) ? "" : "hidden" } `}>HOT</div>
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
                      {course.moTa.length > 100
                        ? `${course.moTa.substring(0, 70)}...`
                        : course.moTa}
                    </p>
                  }
                  className="relative"
                />
                <div
                  className="flex justify-centers items-center bg-[var(--tertiary)] absolute top-[150px] left-0 pr-3 "
                  style={{ borderRadius: "0 30px 30px 0" }}
                >
                  <img
                    src="/image/CourseList/author.gif"
                    alt="author"
                    className="w-[40px] block"
                  />
                  {/* <img src='/image/CourseList/authorStatic.png' alt="author" className="w-[40px] " /> */}
                  <p className="">{course.nguoiTao.hoTen}</p>
                </div>
                {/* Time road */}
                <div className="time flex gap-5 justify-center mt-5">
                  <div className="flex">
                    <img
                      src="/image/CourseList/clock.png"
                      alt="clock"
                      className="w-[20px] block"
                    />
                    <p className="font-bold text-[var(--tertiary)]">23H</p>
                  </div>
                  <div className="flex">
                    <img
                      src="/image/CourseList/calendar.png"
                      alt="calendar"
                      className="w-[20px] block"
                    />
                    <p className="font-bold text-[var(--tertiary)]">2.5M</p>
                  </div>
                  <div className="flex">
                    <img
                      src="/image/CourseList/enroll.png"
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
                      src="/image/avatar.svg"
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
                        src="/image/CourseList/sale.png"
                        alt="sale"
                        className="absolute w-[30px] top-0 right-0 rotate-[20deg]"
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
                      Welcome to our Fullstack Bootcamp E-Learning Page! Dive
                      into a transformative learning experience designed to
                      propel you into the world of fullstack development. Our
                      comprehensive course combines front-end and back-end
                      technologies, equipping you with the skills to create
                      dynamic, end-to-end web applications.
                    </p>
                  </div>
                  {/* Time road */}
                  <div className="time flex gap-5 justify-center mt-5 border-t-2 w-[90%] m-auto mb-5 ">
                    <div className="flex">
                      <img
                        src="/image/CourseList/clock.png"
                        alt="clock"
                        className="w-[20px] block"
                      />
                      <p className="font-bold text-[var(--tertiary)]">23H</p>
                    </div>
                    <div className="flex">
                      <img
                        src="/image/CourseList/calendar.png"
                        alt="calendar"
                        className="w-[20px] block"
                      />
                      <p className="font-bold text-[var(--tertiary)]">2.5M</p>
                    </div>
                    <div className="flex">
                      <img
                        src="/image/CourseList/enroll.png"
                        alt="enroll"
                        className="w-[20px] block"
                      />
                      <p className="font-bold text-[var(--tertiary)]">3.2k</p>
                    </div>
                  </div>
                  <button className="bg-[var(--primary)] py-2 px-4 rounded text-white  w-[90%] m-auto hover:bg-[var(--quaternary)] ease-in-out duration-500 transition-all hover:-translate-y-2"
                   onClick={()=>navigate(detailPath)}
                  >
                    Xem chi tiết
                  </button>
                </div>
              </Card>
            })}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CourseList;
