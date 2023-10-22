import { CourseType } from "types/Course";

type DetailOverallProps = {
  CourseInfo?: CourseType;
};

export const DetailOverall: React.FC<DetailOverallProps> = ({ CourseInfo }) => {
  return (
    <div>
      <div className="hidden xl:flex justify-between w-[80%] pb-3 ">
        {/* mentor  */}
        <div className="flex">
          <img
            src="/image/avatar.svg"
            alt="avatar_professor"
            className="w-[40px]"
          />
          <div className="md:flex flex-col">
            <p>Mentor</p>
            <p>Kelvin Phước Khánh</p>
          </div>
        </div>
        {/* major  */}
        <div className="flex">
          <img
            src="/image/CourseDetail/icons8-graduate-90.png"
            alt="gradutate"
            className="w-[40px]"
          />
          <div className="flex flex-col">
            <p>Major</p>
            <p>FullStack Developer</p>
          </div>
        </div>
        {/* rate  */}
        <div className="flex">
          <div className="flex flex-col">
            <div className="flex gap-2">
              <div className="flex">
                <img
                  src="/image/CourseDetail/icons8-star-filled-96.png"
                  alt="fullStar"
                  className="w-[20px]"
                />
                <img
                  src="/image/CourseDetail/icons8-star-filled-96.png"
                  alt="fullStar"
                  className="w-[20px]"
                />
                <img
                  src="/image/CourseDetail/icons8-star-filled-96.png"
                  alt="fullStar"
                  className="w-[20px]"
                />
                <img
                  src="/image/CourseDetail/icons8-star-filled-96.png"
                  alt="fullStar"
                  className="w-[20px]"
                />
                <img
                  src="/image/CourseDetail/icons8-star-half-empty-96.png"
                  alt="halfStar"
                  className="w-[20px]"
                />
              </div>
              <p className="font-bold">4.47</p>
            </div>
            <div className="">1.3k rated</div>
          </div>
        </div>
      </div>
      {/*       Mobile & smallscreen  */}
      <div className="block xl:hidden justify-between w-[80%] pb-3">
        {/* rate  */}
        <div className="flex mb-5 -mt-3">
          <div className="flex flex-col">
            <div className="flex gap-2">
              <div className="flex">
                <img
                  src="/image/CourseDetail/icons8-star-filled-96.png"
                  alt="fullStar"
                  className="w-[20px]"
                />
                <img
                  src="/image/CourseDetail/icons8-star-filled-96.png"
                  alt="fullStar"
                  className="w-[20px]"
                />
                <img
                  src="/image/CourseDetail/icons8-star-filled-96.png"
                  alt="fullStar"
                  className="w-[20px]"
                />
                <img
                  src="/image/CourseDetail/icons8-star-filled-96.png"
                  alt="fullStar"
                  className="w-[20px]"
                />
                <img
                  src="/image/CourseDetail/icons8-star-half-empty-96.png"
                  alt="halfStar"
                  className="w-[20px]"
                />
              </div>
              <p className="font-bold">4.47</p>
            </div>
            <div className="">1.3k rated</div>
          </div>
        </div>
        <div className="flex w-full justify-between">
          {/* mentor  */}
          <div className="flex gap-3">
            <img
              src="/image/avatar.svg"
              alt="avatar_professor"
              className="w-[40px] flex items-center m-auto"
            />
            <div className="md:flex flex-col">
              <p>Mentor</p>
              <p>Kelvin Phước Khánh</p>
            </div>
          </div>
          {/* major  */}
          <div className="flex gap-3">
            <img
              src="/image/CourseDetail/icons8-graduate-90.png"
              alt="gradutate"
              className="w-[40px] h-[40px] flex items-center m-auto"
            />
            <div className="flex flex-col">
              <p>Major</p>
              <p>FullStack Developer</p>
            </div>
          </div>
        </div>
      </div>
      {/* Script commercial */}
      <div className="w-full border-b-2 border-black pb-5">
        <p>{CourseInfo?.moTa}</p>
      </div>
    </div>
  );
};

export default DetailOverall;
