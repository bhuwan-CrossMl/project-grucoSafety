import { CircularProgress, Backdrop } from "@mui/material";
import React from "react";


const BackdropLoader = ({ loading }) => {
  return (
    <Backdrop sx={{ zIndex: 1500 }} open={loading === true}>
      <CircularProgress color="primary" />
    </Backdrop>
  );
};

export default BackdropLoader;
