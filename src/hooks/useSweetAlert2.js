import logo from "../assets/images/icons/logo.png";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const useSweetAlert2 = () => {
  let navigate = useNavigate();
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
    setTimeout(() => {
      navigate('/');
    }, 5000);
  };
  return { finalizePurchase };
};
