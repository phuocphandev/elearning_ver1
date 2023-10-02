import Swal from "sweetalert2";

export const NotiAlert = (text) => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "bg-green-500 py-1 px-4 rounded m-1",
      cancelButton: "bg-red-500 py-1 px-4 rounded m-1",
    },
    buttonsStyling: false,
  });

  swalWithBootstrapButtons
    .fire({
      title: text,
      text: "You won't be able to revert this!",
      iconHtml: '<img src="../../public/lottie/animation_angle.gif>',

      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          "Deleted!",
          "Your file has been deleted.",
          "success"
        );
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          "Cancelled",
          "Your imaginary file is safe :)",
          "error"
        );
      }
    });
};
