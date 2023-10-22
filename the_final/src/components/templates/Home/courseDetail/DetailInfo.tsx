import { CourseType } from "types/Course";
import {enrollCourseThunk} from "store/CourseManagement/thunk"
import { useAppDispatch } from "store";
import { NotiError, NotiSuccess } from "constant";
import { useAuth } from "hooks";

type DetailInfoProps = {
  CourseInfo: CourseType;
};

export const DetailInfo: React.FC<DetailInfoProps> = ({ CourseInfo }) => {
  const { user } = useAuth();
  const dispatch = useAppDispatch();
  console.log("CourseInfo" ,CourseInfo )
  console.log("xem data",{ maKhoaHoc: CourseInfo?.maKhoaHoc, taiKhoan: user?.taiKhoan });


  const enrollCourse = () => {
    if(!user){
      NotiError("Please log in to enroll!");
      return;
    }
    dispatch(
      enrollCourseThunk({ maKhoaHoc: CourseInfo?.maKhoaHoc, taiKhoan: user?.taiKhoan })
    )
      .unwrap()
      .then(() => {
        NotiSuccess("Enroll Success!");
      })
      .catch((err) => {
        NotiError("You've already Enrolled!")
        console.log(err);
      });
  };

  return (
    <div className="bg-[var(--background)] mt-10 p-2 rounded flex flex-col gap-2 ">
      <img
        src={CourseInfo?.hinhAnh}
        alt={CourseInfo?.biDanh}
        className="rounded-xl  border-2 border-[var(--primary)]"
      />
      <div className="text-xl font-bold">{CourseInfo?.tenKhoaHoc}</div>
      <div className="flex justify-between w-[95%] text-xl font-bold mt-[-15px] mb-2">
        <div className=""></div>
        {/* //price  */}
        <div className="relative">
          <p className="text-gray-400 line-through pl-4">1.100.000</p>
          <div className="text-[var(--primary)] text-2xl font-extrabold">
            400.000<span className="text-[9px]">vnđ</span>
            <img
              src="/image/CourseList/sale.png"
              alt="sale"
              className="absolute w-[30px] top-0 right-0 rotate-[20deg]"
            />
          </div>
        </div>
      </div>

      <button
        className="border border-[var(--primary)] w-full rounded-xl text-xl py-1 transition-all ease-in-out duration-500 bg-transparent hover:bg-[#eee]"
        onClick={()=>enrollCourse()}
      >
        Enroll
      </button>
      <div className="">
        <div className="border-b border-gray-100 flex justify-between pt-5 pb-5">
          <p>E-Huber: {CourseInfo?.soLuongHocVien}</p>
          <img
            src="/image/CourseDetail/icons8-student-100.png"
            alt="student"
            className="w-[40px]"
          />
        </div>
        <div className="border-b border-gray-100 flex justify-between pt-5 pb-5">
          <p>Average total time: 23 hours</p>
          <img
            src="/image/CourseDetail/icons8-timer-96.png"
            alt="timer"
            className="w-[40px]"
          />
        </div>
        <div className="border-b border-gray-100 flex justify-between pt-5 pb-5">
          <p>Total Video: 163</p>
          <img
            src="/image/CourseDetail/icons8-video-100.png"
            alt="video"
            className="w-[40px]"
          />
        </div>
        <div className="border-b border-gray-100 flex justify-between pt-5 pb-5">
          <p>Course: 12 sections</p>
          <img
            src="/image/CourseDetail/icons8-course-100.png"
            alt="course"
            className="w-[40px]"
          />
        </div>
        <div className="border-b border-gray-100 flex justify-between pt-5 pb-5">
          <p>Level: Beginner</p>
          <img
            src="/image/CourseDetail/icons8-level-60.png"
            alt="level"
            className="w-[40px]"
          />
        </div>
        <div className="flex pt-5 pb-2">
          <input
            placeholder="Enter discount code:..."
            className="bg-[#eee] border-none px-[15px] py-[12px] my-[8px] w-[100%] rounded border "
          />
        </div>
      </div>
    </div>
  );
};

export default DetailInfo;
