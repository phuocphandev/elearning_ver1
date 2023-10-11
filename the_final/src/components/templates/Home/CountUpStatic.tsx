import CountUp from "react-countup";
import { useState, useEffect, useRef } from "react";

export const CountUpStatic = () => {
  const [counterOn, setCounterOn] = useState(false);

  const observerRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setCounterOn(true);
      }
    });

    observerRef.current.observe(counterRef.current);

    return () => {
      observerRef.current.disconnect();
    };
  }, []);

  return (
    <div className="w-full bg-[var(--background)]" ref={counterRef}>
      <div className="w-[90%] grid grid-cols-4 gap-10 md:gap-2 m-auto">
        <div className="col-span-4 md:col-span-1 flex flex-col items-center">
          <img
            className="w-[60px] h-[60px]"
            src="/public/image/Countup/student.png"
            alt="student"
          />
          <p className="font-bold text-2xl text-[var(--primary)]">
            {counterOn && (
              <CountUp start={0} end={9000} duration={5} delay={0} />
            )}
          </p>
          <p className="">Học viên</p>
        </div>
        <div className="col-span-4 md:col-span-1 flex flex-col items-center">
          <img
            className="w-[60px] h-[60px]"
            src="/public/image/Countup/calendar.png"
            alt="calendar"
          />
          <p className="font-bold text-2xl text-[var(--primary)]">
            {counterOn && (
              <CountUp start={0} end={1000} duration={5} delay={0} />
            )}
          </p>
          <p className="">Khóa học</p>
        </div>
        <div className="col-span-4 md:col-span-1 flex flex-col items-center">
          <img
            className="w-[60px] h-[60px]"
            src="/public/image/Countup/time.png"
            alt="time"
          />
          <p className="font-bold text-2xl text-[var(--primary)]">
            {counterOn && (
              <CountUp start={0} end={33200} duration={5} delay={0} />
            )}
          </p>
          <p className="">Giờ học</p>
        </div>
        <div className="col-span-4 md:col-span-1 flex flex-col items-center">
          <img
            className="w-[60px] h-[60px]"
            src="/public/image/Countup/mentor.png"
            alt="mentor"
          />
          <p className="font-bold text-2xl text-[var(--primary)]">
            {counterOn && (
              <CountUp start={0} end={400} duration={5} delay={0} />
            )}
          </p>
          <p className="">Giảng Viên</p>
        </div>
      </div>
    </div>
  );
};

export default CountUpStatic;
