import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckIcon from "@mui/icons-material/Check";
// import "./successToast.css";


const SucessToast = ({ message }) => {
  toast.success(message, {
    position: "top-right",
    icon: <CheckIcon />,
    hideProgressBar: true,
    closeButton: false,
  });

  return null;
};

export default SucessToast;
