import { useCourse } from "hooks/useCourse";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "store";
import { getCourseInfoThunk } from "store/CourseManagement/thunk";
import { DetailInfo, DetailIntro, DetailOverall, DetailRelatedCourse } from ".";
import { Loading } from "pages";

export const CourseDetail = () => {
  const { CourseInfo } = useCourse();
  const [loading, setLoading] = useState(true);
  
  const param = useParams<{ courseID: string }>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCourseInfoThunk(param.courseID));
  }, [param.courseID, dispatch]);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="mt-[10vh] md:mt-[7vh] xl:mt-[12vh] 2xl:mt-[5vh] coursedetail">
      <div
        className={`absolute top-0 left-0 h-screen w-screen z-[9999] ${
          loading ? "" : "hidden"
        }`}
      >
        <Loading />
      </div>
      <div className="bg-[var(--tertiary)] w-[100vw] h-[25vh] flex items-center text-3xl text-white font-bold pl-[10%] pt-10">
        <p>Course Detail:</p>
      </div>
      <div className="hidden md:block">
        {/* //info  */}
        <div className="grid grid-cols-5 gap-10 w-[95%] m-auto">
          <div className="col-span-3">
            <p className="font-bold text-2xl pt-3 pb-3">
              Welcome to: "{CourseInfo?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}":{" "}
            </p>
            <DetailOverall CourseInfo={CourseInfo} />
            <DetailIntro />
          </div>
          <div className="col-span-2">
            <DetailInfo CourseInfo={CourseInfo} />
          </div>
        </div>
        <DetailRelatedCourse />
      </div>

      {/* Mobile  */}
      <div className="block md:hidden">
        <div className="grid grid-cols-5 gap-10 w-[95%] m-auto">
          <div className="col-span-5">
            <DetailInfo CourseInfo={CourseInfo} />
          </div>
          <div className="col-span-5">
            <p className="font-bold text-2xl pt-3 pb-3">
              Welcome to: "{CourseInfo?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}":{" "}
            </p>
            <DetailOverall CourseInfo={CourseInfo} />
            <DetailIntro />
          </div>
        </div>
        <DetailRelatedCourse />
      </div>
    </div>
  );
};

export default CourseDetail;
