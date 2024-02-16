import logo from "../assets/images/icons/logo.png";
import Swal from "sweetalert2";

export const useSweetAlert2 = () => {
  const finalizePurchase = () => {
    Swal.fire({
      imageUrl: logo,
      imageWidth: 200,
      title: "Compra exitosa",
      text: `¡Gracias por adquirir nuestros productos!`,
      color: "#324d13",
      icon: "success",
      allowOutsideClick: false,
      showConfirmButton: false,
      timer: 4000,
    });
  };
  return { finalizePurchase };
};
