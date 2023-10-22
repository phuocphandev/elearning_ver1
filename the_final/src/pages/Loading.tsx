import Lottie from "lottie-react";
import animation from "../../public/lottie/loading.json";
//dot lotie
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

export const Loading = () => {
  return (
    <div className="h-screen flex flex-col justify-center bg-black absolute top-0 left-0 z-[9999] w-screen overflow-hidden">
      <DotLottiePlayer
        src="/public/lottie/Running_Dog.lottie"
        autoplay
        loop
        className="h-[60%]"
      ></DotLottiePlayer>
    </div>
  );
};

export default Loading;
