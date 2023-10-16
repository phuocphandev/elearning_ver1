import { useCourse } from "hooks/useCourse";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "store";
import { getCourseInfoThunk } from "store/CourseManagement/thunk";
import { DetailInfo, DetailIntro, DetailOverall } from ".";

export const CourseDetail = () => {
  const { CourseInfo } = useCourse();
  console.log("CourseInfo: ", CourseInfo);

  const param = useParams<{ courseID: string }>();
  console.log("param: ", param.courseID);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCourseInfoThunk(param.courseID));
  }, [param.courseID, dispatch]);

  return (
    <div className="mt-[10vh] md:mt-[7vh] xl:mt-[12vh] 2xl:mt-[5vh] coursedetail">
      <div className="bg-[var(--primary)] w-[100vw] h-[25vh] flex items-center text-3xl text-white font-bold pl-[10%]">
        <p>Course Detail:</p>
      </div>
      {/* //info  */}
      <div className="hidden md:grid grid-cols-5 gap-10 w-[95%] m-auto">
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

      {/* Mobile  */}
      <div className="grid md:hidden grid-cols-5 gap-10 w-[95%] m-auto">
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
    </div>
  );
};

export default CourseDetail;
