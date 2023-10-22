import Swal from "sweetalert2";

export const NotiError = (text) => {
  Swal.fire({
    title: text,
    showConfirmButton: false,
    timer: 2000,
    icon:'error',
  });
};
