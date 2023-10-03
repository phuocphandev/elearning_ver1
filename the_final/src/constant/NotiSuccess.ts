import Swal from "sweetalert2";

export const NotiSuccess = (text) => {
  return (() => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: text,
      showConfirmButton: false,
      timer: 1500,
    });
  })();
};

