import { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import styles from "../../../sass/components/Introduction.module.scss";
import cn from "classnames";
import Lottie from "lottie-react";
import Welcome1 from "../../../../public/lottie/Welcome_1.json";
import Welcome2 from "../../../../public/lottie/Welcome_2.json";
import Welcome3 from "../../../../public/lottie/Welcome_3.json";
//type Writer
import { useTypewriter, Cursor } from "react-simple-typewriter";

interface PageProps {
  offset: number;
  gradient: string;
  onClick: () => void;
  text: string;
}

const Page = ({ offset, gradient, onClick, text }: PageProps) => (
  //TypeWriter:
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className={styles.slopeBegin} />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer
      className={cn(styles.text, " relative overflow-hidden ")}
      style={{ wordWrap: "break-word" }}
      offset={0}
      speed={0.3}
    >
      <div
        className="flex flex-col lg:flex-row justify-center items-center w-[100%] h-[100%] lg:h-[70%] transition ease-in-out delay-75 duration-500"
        style={{ wordWrap: "break-word" }}
      >
        <div className="w-full h-full lg:flex md:mt-[10%]">
          <div className="w-[100%] lg:w-[60%] h-[60%] flex items-end justify-center lg:h-[100%]">
            <Lottie animationData={Welcome1} />
          </div>
          <div className="flex justify-center lg:items-center lg:w-[50%] -lg:h-[50%] h-[50%] lg:h-[100%]">
            <span className={cn(styles.text, "lg:text-[4em] md:text-[3rem] text-[2em]")}>
              {text}
              <Cursor />
            </span>
          </div>
        </div>
      </div>
    </ParallaxLayer>
    <ParallaxLayer
      className={cn(styles.text, " relative overflow-hidden px-3 md:p-16 ")}
      offset={1}
      speed={0.3}
    >
      <div
        className=" flex flex-col md:flex-none justify-center items-center w-[100%] transition ease-in-out delay-75 duration-500"
        style={{ wordWrap: "break-word" }}
      >
        <div className="w-[80%] xl:w-[40%] flex justify-center ">
          <Lottie animationData={Welcome2} className="w-[100%] md:w-[70%]" />
        </div>
        <div className="flex w-full">
          <span className={cn(styles.text)}>
            <div className="md:text-[2.5em] text-[1.5em]">
              <span className="text-yellow-500 text-[2.5rem]">E-Hub </span>
              <div className="">
                <p>
                  is an exclusive digital platform provide a Self-studying
                  system with various experince intructors
                  <Cursor />
                </p>
              </div>
            </div>
          </span>
        </div>
      </div>
    </ParallaxLayer>
    <ParallaxLayer
      className={cn(styles.text, "relative overflow-hidden lg:block hidden")}
      offset={2}
      speed={0.3}
    >
      <div
        className=" hidden lg:flex lg:flex-none justify-center items-center h-full lg:h-[80%] w-[100%] transition ease-in-out delay-75 duration-500"
        style={{ wordWrap: "break-word" }}
      >
        <div className={cn("flex w-1/2 relative", styles.pad)}>
          <span className={cn("w-full px-4")}>
            <div className="flex flex-col w-full">
              <p className="lg:text-[3em] text-[2em] text-yellow-500 font-bold">ACHIEVEMENT:</p>
              <div className="flex lg:text-[2.5em] text-[2em]">
                <p className="">- <span className="text-yellow-500">20000+</span> member graduated in 2022</p>
                <div className="">
                  <Cursor />
                </div>
              </div>
              <div className="flex lg:text-[2.5em] text-[2em]">
                <p className="">- <span className="text-yellow-500">5867</span> member got Job immediately.</p>
                <div className="">
                  <Cursor />
                </div>
              </div>
            </div>
          </span>
          <div className={cn(styles.ribbon)}>Enroll now for Discount</div>
        </div>

        <div className="w-[70%] lg:w-[50%] flex justify-center ">
          <Lottie animationData={Welcome3} className="w-[60%]" />
        </div>
      </div>
    </ParallaxLayer>

    {/* offset2-mobile */}
    <ParallaxLayer
      className={cn(
        styles.text,
        " relative overflow-hidden py-16 px-2 "
      )}
      offset={2}
      speed={0.3}
    >
      <div
        className=" flex flex-col lg:flex-none justify-center items-center h-full lg:h-[80%] w-[100%] transition ease-in-out delay-75 duration-500 lg:hidden"
        style={{ wordWrap: "break-word" }}
      >
        <div className="w-full flex justify-center  h-[60%] ">
          <Lottie animationData={Welcome3} className="w-[80%]" />
        </div>
        <div className={cn(styles.padMB, "w-full relative h-[60%]")}>
          <span className={cn(styles.text, "w-[70%]")}>
            <div className="flex flex-col w-full">
              <p className="lg:text-[4em] md:text-[3rem] text-[2em] text-yellow-500 font-bold">ACHIEVEMENT:</p>
              <div className="flex ">
                <p className="lg:text-[4em] md:text-[3rem] text-[2em]">
                  -  <span className="text-yellow-500">20000+</span> member graduated in 2022.
                  <Cursor />
                </p>
                <div className="lg:text-[4em] md:text-[3rem] text-[2em]"></div>
              </div>
              <div className="flex ">
                <p className="lg:text-[4em] md:text-[3rem] text-[2em]">
                  -  <span className="text-yellow-500">5867</span> member got Job immediately.
                  <Cursor />
                </p>
              </div>
            </div>
          </span>
          <div className={cn(styles.ribbon)}>Enroll now for Discount</div>
        </div>
      </div>
    </ParallaxLayer>
  </>
);

export const Introduction = () => {
  const parallax = useRef<IParallax>(null);
  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };

  const [text] = useTypewriter({
    words: ["Hi!", "Welcome to E-HUB", "Swipe to see more!"],
    loop: true,
  });


  return (
    <div
      style={{ background: "#dfdfdf" }}
      className={cn("h-screen w-screen relative overflow-hidden", styles.customScrollbar)}
    >
      <Parallax
        className={cn(styles.container, styles.customScrollbar, "!h-full")}
        ref={parallax}
        pages={3}
        horizontal
      >
        <Page
          offset={0}
          gradient="first-slide"
          onClick={() => scroll(1)}
          text={text}
        />
        <Page
          offset={1}
          gradient="second-slide"
          onClick={() => scroll(2)}
          text={text}
        />
        <Page
          offset={2}
          gradient="third-slide"
          onClick={() => scroll(0)}
          text={text}
        />
      </Parallax>
    </div>
  );
};

export default Introduction;
