
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  miniMobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },

};

export const Sponsor = () => {
  return (
    <div className="mt-14">
      <Carousel
        responsive={responsive}
        className="bg-[var(--background)] w-[100%] m-auto py-2 px-6 rounded-xl"
      >
        <div className="flex flex-col w-[200px] h-[50px] items-center m-auto pl-8">
          <p className="self-start text-blue-500 font-extrabold text-[1.2em]">
            250+
          </p>
          <p className="self-start text-blue-500 font-extrabold text-[1.2em]">
            Collaboration
          </p>
        </div>
        <div className="flex w-[200px] h-[50px] justify-center items-center py-2 m-auto">
          <img
            className="pr-8 md:pr-0"
            src="/public/image/sponsor/duolingo.jpg"
            alt="duolingo"
          />
        </div>
        <div className="flex w-[200px] h-[50px] justify-center items-center py-2  m-auto">
          <img
            className="pr-8 md:pr-0"
            src="/public/image/sponsor/codecovlogo.png"
            alt="codecov"
          />
        </div>
        <div className="flex w-[200px] h-[50px] justify-center items-center py-2  m-auto">
          <img
            className="pr-8 md:pr-0"
            src="/public/image/sponsor/userTesting.png"
            alt="userTesting"
          />
        </div>
        <div className="flex w-[200px] h-[50px] justify-center items-center py-2  m-auto">
          <img
            className="pr-8 md:pr-0"
            src="/public/image/sponsor/magicleapLogo.png"
            alt="magicLeap"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Sponsor;
