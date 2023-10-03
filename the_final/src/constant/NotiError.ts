import Swal from "sweetalert2";

export const NotiError = (text) => {
  Swal.fire({
    title: text,
    showConfirmButton: false,
    timer: 1500,
    icon:'error',
  });
};
