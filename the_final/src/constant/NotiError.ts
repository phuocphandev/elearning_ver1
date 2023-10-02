import Swal from "sweetalert2";
import Lottie from "lottie-react";
import catAnimation from "../../public/lottie/animation_ln8ykudp.json";

export const NotiError = (text) => {
  Swal.fire({
    title: text,
    showConfirmButton: false,
    timer: 2000,
    html: <Lottie animationData={catAnimation}></Lottie>,
  });
};
// imageUrl: "../../public/lottie/animation_cat.gif",
