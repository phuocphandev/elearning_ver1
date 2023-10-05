import { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import styles from "./styles.module.css";
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
  text1?: string;
  text2?: string;
}

const Page = ({ offset, gradient, onClick, text, text1, text2 }: PageProps) => (
  //TypeWriter:
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className={styles.slopeBegin} />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer
      className={cn(styles.text, " relative overflow-hidden")}
      style={{ wordWrap: "break-word" }}
      offset={0}
      speed={0.3}
    >
      <div
        className="flex flex-col lg:flex-row justify-center items-center w-[100%] h-[100%] lg:h-[70%] transition ease-in-out delay-75 duration-500"
        style={{ wordWrap: "break-word" }}
      >
        <div className="w-full h-full lg:flex">
          <div className="w-[100%] lg:w-[60%] h-[50%] flex justify-center lg:h-[100%]">
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
        <div className="w-[80%] md:w-[40%] flex justify-center ">
          <Lottie animationData={Welcome2} className="w-[100%] md:w-[70%]" />
        </div>
        <div className="flex w-full">
          <span className={cn(styles.text)}>
            <div className="md:text-[2.5em] text-[2em]">
              <span className="text-yellow-500">E-Hub </span>
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
        <div className="flex w-1/2 relative">
          <span className={cn("w-full px-4")}>
            <div className="flex flex-col w-full">
              <p className="lg:text-[3em] text-[2em]">About us:</p>
              <div className="flex lg:text-[2.5em] text-[2em]">
                <p className="">- {text1}</p>
                <div className="">
                  <Cursor />
                </div>
              </div>
              <div className="flex lg:text-[2.5em] text-[2em]">
                <p className="">- {text2}</p>
                <div className="">
                  <Cursor />
                </div>
              </div>
            </div>
          </span>
        </div>

        <div className="w-[70%] lg:w-[50%] flex justify-center ">
          <Lottie animationData={Welcome3} className="w-[60%]" />
        </div>
      </div>
      <div className={cn(styles.box,"md:text-[1.5em] text-[1em] bg-yellow-500 px-3 py-2 w-[12%] m-auto rounded-2xl absolute -bottom-10 -left-10 flex justify-center items-center")}>
        <span className="text-red-500 w-1/2 ">
          Earn Certificate now!
        </span>
      </div>
    </ParallaxLayer>

    {/* offset2-mobile */}
    <ParallaxLayer
      className={cn(
        styles.text,
        " relative overflow-hidden p-16 "
      )}
      offset={2}
      speed={0.3}
    >
      <div
        className=" flex flex-col lg:flex-none justify-center items-center h-full lg:h-[80%] w-[100%] transition ease-in-out delay-75 duration-500 lg:hidden"
        style={{ wordWrap: "break-word" }}
      >
        <div className="w-full flex justify-center  h-[40%]">
          <Lottie animationData={Welcome3} className="w-[80%]" />
        </div>
        <div className=" w-full relative h-[60%]">
          <span className={cn(styles.text, "w-[70%]")}>
            <div className="flex flex-col w-full">
              <p className="lg:text-[4em] md:text-[3rem] text-[2em]">About us:</p>
              <div className="flex ">
                <p className="lg:text-[4em] md:text-[3rem] text-[2em]">
                  - {text1}
                  <Cursor />
                </p>
                <div className="lg:text-[4em] md:text-[3rem] text-[2em]"></div>
              </div>
              <div className="flex ">
                <p className="lg:text-[4em] md:text-[3rem] text-[2em]">
                  - {text2}
                  <Cursor />
                </p>
              </div>
            </div>
          </span>
        </div>
        <div
          className={cn(
            styles.box,
            "md:text-[1.5em] text-[1em] bg-yellow-500 px-3 py-2 w-[50%] m-auto rounded-2xl absolute -top-7 -right-10 flex justify-center items-center"
          )}
        >
          <span className="text-red-500 w-1/2 ">Earn Certificate now!</span>
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

  const StaticNumber1 = "20000+ member graduated in 2022.";
  const StaticNumber2 = "5867 member got Job immediately.";
  const [num1] = useTypewriter({
    words: [StaticNumber1],
    loop: true,
  });
  const [num2] = useTypewriter({
    words: [StaticNumber2],
    loop: true,
  });

  return (
    <div
      style={{ background: "#dfdfdf" }}
      className={cn("h-screen w-screen relative")}
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
          text1={num1}
          text2={num2}
        />
      </Parallax>
    </div>
  );
};

export default Introduction;
