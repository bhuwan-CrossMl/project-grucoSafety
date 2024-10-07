import {
    TextField,
    Typography,
    Card,
    Button,
    Stack,
    Link,
  } from "@mui/material";
  import { styled } from "@mui/system";
  import Switch from "@mui/material/Switch";
  
  // Custom Typography component
  const CustomTypography = styled(Typography)(({ theme }) => ({
    color: "#00191F", // Custom text color
    fontFamily: "Roboto",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "21px", // 150%
  }));
  
  // Custom Card component for authentication
  const CustomAuthCard = styled(Card)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    padding: "32px",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "24px", // Spacing between child elements
    maxWidth: "369px", // Maximum width for the card
  }));
  
  // Custom Title Typography
  const CustomTitle = styled(Typography)(({ theme }) => ({
    color: "#00191F", // Title color
    fontFeatureSettings: "'clig' off, 'liga' off",
    fontFamily: "Poppins",
    fontSize: "28px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "33.6px", // 120%
  }));
  
  // Custom Typography for labels
  const CustomLabelTypography = styled(Typography)(({ theme }) => ({
    color: "#00191F", // Custom label text color
    fontFamily: "Roboto",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "24px", // 150%
  }));
  
  // Custom Typography for labels
  const CustomPTypography = styled(Typography)(({ theme }) => ({
    color: "#00191F", // Custom label text color
    fontFamily: "Roboto",
    fontSize: "16px", 
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "24px", // 150%
  }));
  
  // Custom Typography for Poppins labels
  const CustomPoppinsTypography = styled(Typography)(({ theme }) => ({
    color: "#00191F", // Custom label text color
    fontFamily: "Poppins",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "24px", // 150%
  }));
  
  // Custom Typography for labels
  const CustomName = styled(Typography)(({ theme }) => ({
    color: "#00191F", // Custom label text color
    fontFamily: "Poppins",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "28.8px", // 150%
    
  }));
  
  // Custom styled TextField
  const CustomTextField = styled(TextField)(({ theme }) => ({
    "& .MuiOutlinedInput-input": {
      padding: "12px 16px", // Input padding
      display: "flex",
      alignItems: "center",
      gap: "8px", // Spacing between input and icon
      alignSelf: "stretch",
      borderRadius: "4px", // Add the border-radius property
      // border: '1px solid #003D4C', // Input border style
      background: "#FFFFFF", // Input background color
      transition: "box-shadow 0.3s", // Add transition for smooth effect
 
      "&:focus": {
        outline: "none",
        // boxShadow: "0px 0px 0px 4px #CCD8DB",
      },
    },
    "& input.Mui-disabled": {
      backgroundColor: "#F2F2F2",
    },
    // "& .MuiInputBase-input.Mui-disabled": {
    //   WebkitTextFillColor: "#00191F",
    // },
     //** show box show on focus */
    // "&:focus-within": {
    //   borderRadius: "4px",
    //   border: "1px solid var(--brand-colours-primary-500, #003D4C)",
    //   background: "var(--contextual-colours-white, #FFF)",
    //   boxShadow: "0px 0px 0px 4px #CCD8DB",
    // },
    
    // Conditional styling based on error
    ...(theme) => ({
      ...(theme?.props?.hasError && {
        "&:focus-within": {
          borderRadius: "4px",
          border: "1px solid var(--brand-colours-primary-500, #003D4C)",
          background: "var(--contextual-colours-white, #FFF)",
          boxShadow: "none", // Remove box shadow when there is an error
        },
        "& .MuiOutlinedInput-input": {
          border: "1px solid red", // Example: change border color to red
        },
      }),
    }),
  }));
  // Custom styled Button label
  const CustomButtonLabel = styled(Typography)(({ theme }) => ({
    color: "#FFFFFF", // Button label color
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "24px", // 150%
    textTransform: "none", // Avoid text transformation
  }));
  
  const CustomModalPHeading = styled(Typography)(({ theme }) => ({
    color: "#00191F", // Button label color
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "19.2px", // 150%
    textTransform: "none", // Avoid text transformation
  }));
  
  // Custom styled for Table Header
  const CustomTableHeaderTitle = styled(Typography)(({ theme }) => ({
    color: "#00191F", // Button label color
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "16.8px",
  }));
  
  // Custom styled Button label
  const CustomButtonLabelForShort = styled(Typography)(({ theme }) => ({
    color: "#00191F", // Button label color
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "21px", // 150%
    textTransform: "none", // Avoid text transformation
  }));
  
  // Custom styled Button
  const CustomButton = styled(Button)(({ theme }) => ({
    display: "flex",
    padding: "12px", // Button padding
    alignItems: "flex-start",
    gap: "8px", // Spacing between text and icon
    alignSelf: "stretch",
    borderRadius: "4px", // Button border radius
    background: "#003D4C", // Button background color
    marginTop: "24px", // Margin space at the top
  }));
  
  const CustomButtonShort = styled(Button)(({ theme }) => ({
    display: "flex",
    padding: "5px 9px 5px 9px", // Button padding
    alignItems: "center",
    gap: "8px", // Spacing between text and icon
    alignSelf: "stretch",
    // marginBottom: "13px",
    borderRadius: "4px", // Button border radius
    background: "#003D4C", // Button background color
  }));
  
  const CustomErrorStack = styled(Stack)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    height: "24px",
    marginTop: "5px",
    gap: "8px",
    marginLeft: "-2px", // Note: You should specify 'px' for negative margins
    fontFamily: "Roboto",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "21px",
  }));
  
  const CustomAuthErrorStack = styled(Stack)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    height: "24px",
    marginTop: "5px",
    gap: "8px",
    marginLeft: "-2px", // Note: You should specify 'px' for negative margins
    fontFamily: "Roboto",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "21px",
    color: " #F12323",
  }));
  
  const CustomNavSubTitle = styled(Typography)(({ theme }) => ({
    fontFamily: "Roboto",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "21px",
    color: "#FFFFFF", // Adding the color property here
    fontFeatureSettings: "'clig' off, 'liga' off",
  }));
  
  const CustomNavTitle = styled(Typography)(({ theme }) => ({
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "21px", // You can specify '150%' here as a string or as the calculated pixel value.
    color: "#FFFFFF",
    marginTop: "0px !important",
  }));
  
  const CustomNavRule = styled(Typography)(({ theme }) => ({
    fontFamily: "Poppins",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "14.4px", // You can specify '150%' here as a string or as the calculated pixel value.
    textTransform: "uppercase",
    color: "#CCD8DB",
  }));
  
  const CustomNavThridLevel = styled(Typography)(({ theme }) => ({
    fontFamily: "Roboto",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "21px",
    color: "#00191f", // Adding the color property here
    fontFeatureSettings: "'clig' off, 'liga' off",
  }));
  
  // Custom Typography for labels
  const CustomNoticeTypography = styled(Typography)(({ theme }) => ({
    color: "#797979",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "24px", // 150%
  }));
  
  const CustomLink = styled(Link)(({ theme }) => ({
    color: "#003D4C",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontStyle: "normal",
    cursor: "Pointer",
    marginBottom: "30px",
    fontWeight: 400,
    lineHeight: "24px",
  }));
  
  const SwitchButton = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 40,
    height: 20,
    padding: 0,
    overflow: "unset !important",
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      color: "#003D4C",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "white",
        "& + .MuiSwitch-track": {
          backgroundColor: theme.palette.mode === "dark" ? "green" : "#003D4C",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "blue", // Set the round base color to blue
        border: "6px solid red",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 18,
      height: 18,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: "#fff", // Set the track background color to white
      borderRadiusC: "",
      opacity: 1,
      border: "1px solid #003D4C !important", // Set the border color of the track to blue
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
      "&:not(.Mui-checked) + .MuiSwitch-track": {
        border: "2px solid red", // Red border when switch is off
      },
    },
  }));
  
  // Custom Typography for labels
  const CustomLightColorTypography = styled(Typography)(({ theme }) => ({
    color: "#C9C9C9", // Custom label text color
    fontFamily: "Roboto",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "24px", // 150%
  }));
  
  // Custom Typography for labels
  const CustomBoardingPass= styled(Typography)(({ theme }) => ({
    color: "#797979",
    /* Print/H2 */
    fontFamily: "Poppins",
    fontSize: "10px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "10.8px",/* 120% */
    textTransform: "uppercase"
  }));
  
  const CustomBoardingPassUnderline= styled(Typography)(({ theme }) => ({
    color:  "#00191F",
    fontFamily: "Roboto",
    fontSize: "10px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "16px", /* 160% */
    textDecorationLine: "underline"
  }));
  
  const CustomBoardingPassUnderlineTextPharagraph= styled(Typography)(({ theme }) => ({
    color:  "#00191F",
    fontFamily: "Roboto",
    fontSize: "10px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "16px", /* 160% */
    
  }));
  
  const CustomBoardingPassUnderlineText = styled(Typography)(({ theme }) => ({
    fontFamily: "Poppins",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "14.4px", // You can specify '150%' here as a string or as the calculated pixel value.
    textTransform: "uppercase",
    color: "##00191F",
    textDecorationLine: "underline"
  }));
  
  export const detectBrowser = () => {
    const userAgent = navigator.userAgent;
    if (userAgent.includes("Firefox")) {
      return "Firefox";
    } else if (userAgent.includes("Chrome") && !userAgent.includes("Edg")) {
      return "Chrome";
    } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
      return "Safari";
    }
    return "Other";
  };
  
  
  export {
    CustomTextField,
    CustomLabelTypography,
    CustomButtonLabel,
    CustomTypography,
    CustomAuthCard,
    CustomTitle,
    CustomButton,
    CustomErrorStack,
    CustomNavSubTitle,
    CustomNavTitle,
    CustomNavRule,
    CustomNavThridLevel,
    CustomName,
    CustomPoppinsTypography,
    SwitchButton,
    CustomPTypography,
    CustomNoticeTypography,
    CustomLink,
    CustomButtonLabelForShort,
    CustomButtonShort,
    CustomTableHeaderTitle,
    CustomAuthErrorStack,
    CustomLightColorTypography,
    CustomModalPHeading,
    CustomBoardingPass,
    CustomBoardingPassUnderline,
    CustomBoardingPassUnderlineText,
    CustomBoardingPassUnderlineTextPharagraph
  }; // Export the styled components
  