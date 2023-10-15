import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "store";
import { getCourseInfoThunk } from "store/CourseManagement/thunk";

export const CourseDetail = () => {
  const [sec1, setSec1] = useState(false);
  const handleSec1 = () => {
    setSec1(!sec1);
  };
  const [sec2, setSec2] = useState(false);
  const handleSec2 = () => {
    setSec2(!sec2);
  };
  const [sec3, setSec3] = useState(false);
  const handleSec3 = () => {
    setSec3(!sec3);
  };

  const param = useParams();
  console.log("param: ", param.courseID);

  const dispatch = useAppDispatch();

  useEffect(() => {
      dispatch(getCourseInfoThunk(param.courseID));
  }, [param.courseID]);

  return (
    <div className="mt-[10vh] md:mt-[7vh] xl:mt-[12vh] 2xl:mt-[5vh] coursedetail">
      <div className="bg-[var(--primary)] w-[100vw] h-[30vh] flex items-center text-3xl text-white font-bold pl-[10%]">
        <p>Course Detail:</p>
      </div>
      {/* //info  */}
      <div className="grid grid-cols-5 gap-10 w-[95%] m-auto">
        <div className="col-span-3">
          <p className="font-bold text-2xl pt-3 pb-3">
            Welcome to FullStack Bootcamp:{" "}
          </p>
          <div className="flex justify-between w-[80%] pb-3 ">
            {/* mentor  */}
            <div className="flex">
              <img
                src="/public/image/avatar.svg"
                alt="avatar_professor"
                className="w-[40px]"
              />
              <div className="flex flex-col">
                <p>Mentor</p>
                <p>Kelvin Phước Khánh</p>
              </div>
            </div>
            {/* major  */}
            <div className="flex">
              <img
                src="/public/image/CourseDetail/icons8-graduate-90.png"
                alt="gradutate"
                className="w-[40px]"
              />
              <div className="flex flex-col">
                <p>Major</p>
                <p>FullStack Developer</p>
              </div>
            </div>
            <div className="flex">
              {/* rate  */}
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <div className="flex">
                    <img
                      src="/public/image/CourseDetail/icons8-star-filled-96.png"
                      alt="fullStar"
                      className="w-[20px]"
                    />
                    <img
                      src="/public/image/CourseDetail/icons8-star-filled-96.png"
                      alt="fullStar"
                      className="w-[20px]"
                    />
                    <img
                      src="/public/image/CourseDetail/icons8-star-filled-96.png"
                      alt="fullStar"
                      className="w-[20px]"
                    />
                    <img
                      src="/public/image/CourseDetail/icons8-star-filled-96.png"
                      alt="fullStar"
                      className="w-[20px]"
                    />
                    <img
                      src="/public/image/CourseDetail/icons8-star-half-empty-96.png"
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
          {/* Script commercial */}
          <div className="w-full border-b-2 border-black pb-5">
            <p>
              "ReactJS is a powerful front-end library that revolutionizes web
              development. With its declarative and component-based approach,
              building interactive user interfaces becomes a breeze. Whether
              you're creating a simple webpage or a complex web application,
              ReactJS provides the flexibility and efficiency you need.
              Complementing ReactJS, we have NodeJS on the server side. NodeJS
              is a lightning-fast, event-driven JavaScript runtime, perfect for
              building scalable and high-performance backend applications. Its
              non-blocking I/O model ensures smooth handling of concurrent
              connections, making it an ideal choice for real-time applications
              and APIs. Together, ReactJS and NodeJS form a dynamic duo that
              empowers developers to craft seamless, full-stack web solutions.
              Harness the power of this winning combination and unlock a world
              of possibilities in modern web development. Elevate your projects
              with ReactJS and NodeJS today!"
            </p>
          </div>
          {/* What you learn  */}
          <div className="flex flex-col mt-3">
            <div className="font-bold text-2xl pt-3 pb-3">
              What you will learn:
            </div>
            <div className="flex">
              <div className="flex flex-col">
                <p className="list">
                  Develop potent, user-friendly web applications with speed and
                  responsive design at the forefront.
                </p>
                <p className="list">
                  Seize opportunities for high-paying job positions or venture
                  into freelancing within the most sought-after niches in web
                  development today.
                </p>
                <p className="list">
                  Create exceptional user experiences effortlessly by leveraging
                  the robust capabilities of JavaScript.
                </p>
                <p className="list">
                  Deepen your knowledge of React Hooks and React Components for
                  comprehensive proficiency in application development.
                </p>
              </div>
              <div className="flex flex-col">
                <p className="list">
                  Master the suite of support tools for React, encompassing
                  essential elements like NPM JavaScript syntax, Webpack, Babel,
                  and ES6/ES2015.
                </p>
                <p className="list">
                  Realize the strength in constructing combinable components,
                  unlocking a higher level of flexibility and versatility in web
                  development.
                </p>
                <p className="list">
                  Become the expert who demystifies the workings of Redux for
                  all, drawing from your thorough understanding of its
                  fundamental principles.
                </p>
                <p className="list">
                  Acquire a solid grasp of the foundational concepts underlying
                  the structuring of Redux applications, enabling you to build
                  robust and scalable web solutions.
                </p>
              </div>
            </div>
          </div>
          {/* Demo course  */}
          <div className="overflow-hidden mt-5 mb-5">
            <div className="font-bold text-2xl pt-3 pb-3">Demo Course</div>
            <div className="mb-3">
              {/* sec1 */}
              <button
                className="bg-[var(--background)] px-3 py-2 uppercase w-full flex justify-start hover:bg-[var(--tertiary)] transition-all ease-linear duration-500"
                onClick={handleSec1}
              >
                Section 1: Introduce
              </button>
              <div className={`overflow-hidden section1`}>
                <div
                  className={`overflow-hidden section transition-all ease-in-out duration-500 ${
                    sec1 ? "mt-[-35%] " : "mt-0"
                  } `}
                >
                  <div className="flex w-full pl-[10px] pr-[10px] courselistWrapper">
                    <p className="courselist w-full">
                      What is React Components
                    </p>
                    <div className=" flex justify-between items-center mt-[7px] mb-[7px]">
                      <img
                        src="/public/image/CourseDetail/icons8-timer-96.png"
                        alt=""
                        className="w-[30px] h-[30px] "
                      />
                      <p>14:35</p>
                    </div>
                  </div>
                  <div className="flex w-full pl-[10px] pr-[10px] courselistWrapper">
                    <p className="courselist w-full">
                      Setting up the environment for Windows
                    </p>
                    <div className=" flex justify-between items-center mt-[7px] mb-[7px]">
                      <img
                        src="/public/image/CourseDetail/icons8-timer-96.png"
                        alt=""
                        className="w-[30px] h-[30px] "
                      />
                      <p>14:35</p>
                    </div>
                  </div>
                  <div className="flex w-full pl-[10px] pr-[10px] courselistWrapper">
                    <p className="courselist w-full">
                      Creating a React application using React-Scripts
                    </p>
                    <div className=" flex justify-between items-center mt-[7px] mb-[7px]">
                      <img
                        src="/public/image/CourseDetail/icons8-timer-96.png"
                        alt=""
                        className="w-[30px] h-[30px] "
                      />
                      <p>14:35</p>
                    </div>
                  </div>
                  <div className="flex w-full pl-[10px] pr-[10px] courselistWrapper">
                    <p className="w-full courselist">
                      Quick note on double quotes for string interpolation
                    </p>
                    <div className="flex justify-between items-center mt-[7px] mb-[7px]">
                      <img
                        src="/public/image/CourseDetail/icons8-timer-96.png"
                        alt=""
                        className="w-[30px] h-[30px] "
                      />
                      <p>14:35</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* sec2 */}
            <div className="mb-3">
              <button
                className="bg-[var(--background)] px-3 py-2 uppercase w-full flex justify-start hover:bg-[var(--tertiary)] transition-all ease-linear duration-500"
                onClick={handleSec2}
              >
                Section 2: Fundamental Knowledge
              </button>
              <div className="overflow-hidden section1">
                <div
                  className={`overflow-hidden section transition-all ease-in-out duration-500 ${
                    sec2 ? "mt-[-35%] " : "mt-0"
                  } `}
                >
                  <div className="flex w-full pl-[10px] pr-[10px] courselistWrapper">
                    <p className="courselist w-full">
                      Homepage and Directory Components
                    </p>
                    <div className=" flex justify-between items-center mt-[7px] mb-[7px]">
                      <img
                        src="/public/image/CourseDetail/icons8-timer-96.png"
                        alt=""
                        className="w-[30px] h-[30px] "
                      />
                      <p>14:35</p>
                    </div>
                  </div>
                  <div className="flex w-full pl-[10px] pr-[10px] courselistWrapper">
                    <p className="courselist w-full">
                      Course Guide + GitHub Link
                    </p>
                    <div className=" flex justify-between items-center mt-[7px] mb-[7px]">
                      <img
                        src="/public/image/CourseDetail/icons8-timer-96.png"
                        alt=""
                        className="w-[30px] h-[30px] "
                      />
                      <p>14:35</p>
                    </div>
                  </div>
                  <div className="flex w-full pl-[10px] pr-[10px] courselistWrapper">
                    <p className="courselist w-full">
                      E-commerce Homepage + Setting up SASS
                    </p>
                    <div className=" flex justify-between items-center mt-[7px] mb-[7px]">
                      <img
                        src="/public/image/CourseDetail/icons8-timer-96.png"
                        alt=""
                        className="w-[30px] h-[30px] "
                      />
                      <p>14:35</p>
                    </div>
                  </div>
                  <div className="flex w-full pl-[10px] pr-[10px] courselistWrapper">
                    <p className="courselist w-full">CSS and SCSS Files</p>
                    <div className=" flex justify-between items-center mt-[7px] mb-[7px]">
                      <img
                        src="/public/image/CourseDetail/icons8-timer-96.png"
                        alt=""
                        className="w-[30px] h-[30px] "
                      />
                      <p>14:35</p>
                    </div>
                  </div>
                  <div className="flex w-full pl-[10px] pr-[10px] courselistWrapper">
                    <p className="courselist w-full">
                      React 17: Updating Packages + Latest React Version
                    </p>
                    <div className=" flex justify-between items-center mt-[7px] mb-[7px]">
                      <img
                        src="/public/image/CourseDetail/icons8-timer-96.png"
                        alt=""
                        className="w-[30px] h-[30px] "
                      />
                      <p>14:35</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* sec3 */}
            <div className="mb-3">
              <button
                className="bg-[var(--background)] px-3 py-2 uppercase w-full flex justify-start hover:bg-[var(--tertiary)] transition-all ease-linear duration-500"
                onClick={handleSec3}
              >
                Section 3: Advanced Knowledge
              </button>
              <div className="overflow-hidden section1">
                <div
                  className={`overflow-hidden section transition-all ease-in-out duration-500 ${
                    sec3 ? "mt-[-35%] " : "mt-0"
                  } `}
                >
                  <div className="flex w-full pl-[10px] pr-[10px] courselistWrapper">
                    <p className="w-full courselist">
                      connect() and mapStateToProps
                    </p>
                    <div className=" flex justify-between items-center mt-[7px] mb-[7px]">
                      <img
                        src="/public/image/CourseDetail/icons8-timer-96.png"
                        alt=""
                        className="w-[30px] h-[30px] "
                      />
                      <p>14:35</p>
                    </div>
                  </div>
                  <div className="flex w-full pl-[10px] pr-[10px] courselistWrapper">
                    <p className="w-full courselist">Folder State in Redux</p>
                    <div className=" flex justify-between items-center mt-[7px] mb-[7px]">
                      <img
                        src="/public/image/CourseDetail/icons8-timer-96.png"
                        alt=""
                        className="w-[30px] h-[30px] "
                      />
                      <p>14:35</p>
                    </div>
                  </div>
                  <div className="flex w-full pl-[10px] pr-[10px] courselistWrapper">
                    <p className="w-full courselist">
                      Overview Component of Collection
                    </p>
                    <div className=" flex justify-between items-center mt-[7px] mb-[7px]">
                      <img
                        src="/public/image/CourseDetail/icons8-timer-96.png"
                        alt=""
                        className="w-[30px] h-[30px] "
                      />
                      <p>14:35</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="bg-[var(--background)] h-[100vh] mt-10">
            <div className="">aaa</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
