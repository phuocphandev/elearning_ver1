import Swal from "sweetalert2";
import Lottie from "react-lottie";
import animationData from "../../public/lottie/animation_ln8ykudp.json";

export const NotiSuccess = (text) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const abc = JSON.parse(animationData);
  return (() => {
    Swal.fire({
      position: "center",
      // icon: "success",
      title: text,
      showConfirmButton: false,
      timer: 2000,
      iconHtml: '',
  customClass: {
    icon: 'no-border'
  }

      // imageUrl: "../../public/lottie/animation_ln8yb879_small.gif",
    });
  })();
};

