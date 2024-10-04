"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { Box, Paper, Popover, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import {
  CustomNoticeTypography,
  CustomNavThridLevel,
} from "../../utils/common-helper";
import LanguageIcon from "@mui/icons-material/Language";
import { useDispatch, useSelector } from "react-redux";
import store from "@/store/store";
// import Grid from '@mui/material/Unstable_Grid';
import RootLayout from "./RootLayout";
import  AuthSideBarImage from "../../assets/auth/auth-side-bar-img.svg";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "@/theme/Theme";
import Image from 'next/image';

const AuthLayout = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(false);
  const [languageData, setlanguageDatas] = useState([]);
  const handleClick = () => {
    setAnchorEl(true);
  };
  const language_code = useSelector(
    (state) => state?.LanguageSlice?.languageCode
  );
  const language_language = useSelector(
    (state) => state?.LanguageSlice?.language
  );
  const language_display = useSelector(
    (state) => state?.LanguageSlice?.languageDisplay
  );
  const handleClose = () => {
    setAnchorEl(false);
  };

  const selectedItem = {
    width: "240px",
    gap: "5px",
    color: "white",
    maxHeight: "600px",
    overflow: "auto",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    paddingLeft: "1rem",
    backgroundColor: "#003D4C",
    "&:hover": {
      backgroundColor: "#003D4C",
      color: "white",
      cursor: "pointer",
    },
  };

  const unSelectedItem = {
    width: "240px",
    gap: "5px",
    color: "black",
    maxHeight: "600px",
    overflow: "auto",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    paddingLeft: "1rem",
    "&:hover": {
      backgroundColor: "#003D4C",
      color: "white",
      cursor: "pointer",
    },
  };
  return (
    <ThemeProvider theme={Theme}>
      <Box minHeight={"100vh"}>
        {/* Left side page ui */}
        <Grid container component="main" minHeight={"100vh"}>
        <Grid
              item
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {children}
            </Grid>
          {/* Right side Banner Img */}
          <Grid
            item
            xs={false}
            sm={false}
            md={6}
            sx={{
              position: 'relative',
              minHeight: '100vh',
            }}
          >
            <Image
              src={AuthSideBarImage}
              alt="Auth Sidebar"
              layout="fill"
              objectFit="cover"
            />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default AuthLayout;
