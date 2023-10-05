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
      className={cn(styles.text, " relative overflow-hidden  p-16")}
      style={{ wordWrap: "break-word" }}
      offset={0}
      speed={0.3}
    >
      <div
        className="flex flex-col md:flex-row justify-center items-center w-[100%] h-[100%] md:h-[70%] transition ease-in-out delay-75 duration-500"
        style={{ wordWrap: "break-word" }}
      >
        <div className="w-[80%] md:w-[50%] flex justify-center">
          <Lottie animationData={Welcome1} />
        </div>
        <div className="flex justify-center md:w-[50%]">
          <span className={cn(styles.text, "md:text-[4em] text-[2em]")}>
            {text}
          </span>
          <Cursor />
        </div>
      </div>
    </ParallaxLayer>
    <ParallaxLayer
      className={cn(styles.text, " relative overflow-hidden  p-16")}
      offset={1}
      speed={0.3}
    >
      <div
        className=" flex flex-col md:flex-none justify-center items-center h-full md:h-[80%] w-[100%] transition ease-in-out delay-75 duration-500"
        style={{ wordWrap: "break-word" }}
      >
        <div className="w-[70%] md:w-[50%] flex justify-center ">
          <Lottie animationData={Welcome2} className="w-[80%]" />
        </div>
        <div className="flex w-full">
          <span className={cn(styles.text)}>
            <div className="md:text-[3em] text-[2em]">
              <span className="text-yellow-500">E-Hub </span>
              <p>
                is an exclusive digital platform provide a Self-studying system
                with various experince intructors
              </p>
            </div>
          </span>
          <Cursor />
        </div>
      </div>
    </ParallaxLayer>
    <ParallaxLayer
      className={cn(styles.text, " relative overflow-hidden p-16")}
      offset={2}
      speed={0.3}
    >
      <div
        className=" flex flex-col md:flex-none justify-center items-center h-full md:h-[80%] w-[100%] transition ease-in-out delay-75 duration-500"
        style={{ wordWrap: "break-word" }}
      >
        <div className="w-[70%] md:w-[50%] flex justify-center ">
          <Lottie animationData={Welcome3} className="w-[80%]" />
        </div>
        <div className="flex justify-center w-full relative">
          <span className={cn(styles.text, "w-[70%]")}>
            <div className="flex flex-col w-full">
              <p className="md:text-[3em] text-[2em]">About us:</p>
              <div className="flex md:text-[3em] text-[2em]">
                <p className="">- {text1}</p>
                <div className="">
                  <Cursor />
                </div>
              </div>
              <div className="flex md:text-[3em] text-[2em]">
                <p className="">- {text2}</p>
                <div className="">
                  <Cursor />
                </div>
              </div>
            </div>
            <div className="md:text-[3em] text-[2em] bg-yellow-500 px-5 py-2 w-[70%] m-auto rounded-2xl">
              <span className="text-red-500 flex justify-center ">
                Earn Certificate now!
              </span>
            </div>
          </span>
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
    <div style={{ background: "#dfdfdf" }} className={cn("h-[100vh] w-screen")}>
      <Parallax
        className={cn(styles.container, styles.customScrollbar)}
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
