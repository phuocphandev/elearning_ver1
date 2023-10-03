import Swal from "sweetalert2";

export const NotiAlert = () => {
  return new Promise((resolve) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      customClass: {
        confirmButton: "bg-green-500 py-2 px-10 rounded m-1 text-white",
        cancelButton: "bg-red-500 py-2 px-10 rounded m-1 text-white",
      },
      buttonsStyling: false,
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        resolve(true);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        resolve(false);
      }
    });
  });
};
