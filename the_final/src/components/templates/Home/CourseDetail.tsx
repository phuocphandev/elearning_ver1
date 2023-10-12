export const CourseDetail = () => {
  return (
    <div className="mt-[10vh] md:mt-[7vh] xl:mt-[12vh] 2xl:mt-[5vh]">
      <div className="bg-[var(--primary)] w-[100vw] h-[30vh] flex items-center text-3xl text-white font-bold pl-[10%]">
        <p>Course Detail:</p>
      </div>
      {/* //info  */}
      <div className="grid grid-cols-5">
        <div className="col-span-3">
          <p>Welcome to FullStack Bootcamp: </p>
          <div className="flex gap-5">
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
          <div className="w-full border-b-2 border-black">
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
          <div className="">
            <p className="">
              Develop potent, user-friendly web applications with speed and
              responsive design at the forefront.
            </p>

            <p className="">
              Seize opportunities for high-paying job positions or venture into
              freelancing within the most sought-after niches in web development
              today.
            </p>

            <p className="">
              Create exceptional user experiences effortlessly by leveraging the
              robust capabilities of JavaScript.
            </p>

            <p className="">
              Deepen your knowledge of React Hooks and React Components for
              comprehensive proficiency in application development.
            </p>

            <p className="">
              Master the suite of support tools for React, encompassing
              essential elements like NPM JavaScript syntax, Webpack, Babel, and
              ES6/ES2015.
            </p>

            <p className="">
              Realize the strength in constructing combinable components,
              unlocking a higher level of flexibility and versatility in web
              development.
            </p>

            <p className="">
              Become the expert who demystifies the workings of Redux for all,
              drawing from your thorough understanding of its fundamental
              principles.
            </p>

            <p className="">
              Acquire a solid grasp of the foundational concepts underlying the
              structuring of Redux applications, enabling you to build robust
              and scalable web solutions.
            </p>
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
};

export default CourseDetail;
