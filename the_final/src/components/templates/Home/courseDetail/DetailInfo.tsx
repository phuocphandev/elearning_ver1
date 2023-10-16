import { CourseType } from "types/Course";

type DetailInfoProps = {
  CourseInfo: CourseType;
};

export const DetailInfo: React.FC<DetailInfoProps> = ({ CourseInfo }) => {
  return (
    <div className="bg-[var(--background)] mt-10 p-2 rounded flex flex-col gap-2 ">
      <img
        src={CourseInfo?.hinhAnh}
        alt={CourseInfo?.biDanh}
        className="rounded-xl  border-2 border-[var(--primary)]"
      />
      <div className="text-xl font-bold">{CourseInfo?.tenKhoaHoc}</div>
      <div className="flex justify-between w-[95%] text-xl font-bold mt-2 mb-2">
        <div className=""></div>
        <p>Price: 400.000</p>
      </div>
      <button className="border border-[var(--primary)] w-full rounded-xl text-xl py-1 transition-all ease-in-out duration-500 bg-transparent hover:bg-[#eee]">
        Enroll
      </button>
      <div className="">
        <div className="border-b border-gray-100 flex justify-between pt-5 pb-5">
          <p>E-Huber: {CourseInfo?.soLuongHocVien}</p>
          <img
            src="/public/image/CourseDetail/icons8-student-100.png"
            alt="student"
            className="w-[40px]"
          />
        </div>
        <div className="border-b border-gray-100 flex justify-between pt-5 pb-5">
          <p>Average total time: 23 hours</p>
          <img
            src="/public/image/CourseDetail/icons8-timer-96.png"
            alt="timer"
            className="w-[40px]"
          />
        </div>
        <div className="border-b border-gray-100 flex justify-between pt-5 pb-5">
          <p>Total Video: 163</p>
          <img
            src="/public/image/CourseDetail/icons8-video-100.png"
            alt="video"
            className="w-[40px]"
          />
        </div>
        <div className="border-b border-gray-100 flex justify-between pt-5 pb-5">
          <p>Course: 12 sections</p>
          <img
            src="/public/image/CourseDetail/icons8-course-100.png"
            alt="course"
            className="w-[40px]"
          />
        </div>
        <div className="border-b border-gray-100 flex justify-between pt-5 pb-5">
          <p>Level: Beginner</p>
          <img
            src="/public/image/CourseDetail/icons8-level-60.png"
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
