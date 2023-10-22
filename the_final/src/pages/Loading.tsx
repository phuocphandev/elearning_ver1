import Lottie from "lottie-react";
import animation from "../../public/lottie/loading.json";

export const Loading = () => {
  return (
    <div className="h-screen flex flex-col justify-center bg-black absolute top-0 left-0 z-[9999] w-screen overflow-hidden">
      <Lottie
        animationData={animation}
        className=""
        style={{ height: "60%" }}
      />
    </div>
  );
};

export default Loading;
