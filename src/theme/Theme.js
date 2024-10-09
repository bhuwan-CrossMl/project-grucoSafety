import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0F172A', //primary color
      light: "#ECF2FF",
      dark: "#4570EA",
      contrastText: '#fff', //contrast text color on buttons
    },
    secondary: {
      main: '#64748B',
      light: "#E8F7FF",
      dark: "#23afdb",
      contrastText: '#fff'
    },
    success: {
        main: "#13DEB9",
        light: "#E6FFFA",
        dark: "#02b3a9",
        contrastText: '#fff'
      },
      info: {
        main: "#539BFF",
        light: "#EBF3FE",
        dark: "#1682d4",
        contrastText: '#fff'
      },
      error: {
        main: "#FA896B",
        light: "#FDEDE8",
        dark: "#f3704d",
        contrastText: '#fff'
      },
      warning: {
        main: "#FFAE1F",
        light: "#FEF5E5",
        dark: "#ae8e59",
        contrastText: '#000',
      },
      grey: {
        100: "#F2F6FA",
        200: "#EAEFF4",
        300: "#DFE5EF",
        400: "#7C8FAC",
        500: "#5A6A85",
        600: "#2A3547",
      },
      text: {
        primary: "#2A3547",
        secondary: "#5A6A85",
      },
      action: {
        disabledBackground: "rgba(73,82,88,0.12)",
        hoverOpacity: 0.02,
        hover: "#f6f9fc",
      },
      divider: "#e5eaef",
  },
  typography: {
    fontFamily: 'Arial, sans-serif', //custom font family
    h1: {
        fontWeight: 600,
        fontSize: "36px", 
        lineHeight: "44px",
      },
      h2: {
        fontWeight: 600,
        fontSize: "30px", 
        lineHeight: "36px", 
      },
      h3: {
        fontWeight: 600,
        fontSize: "24px",
        lineHeight: "28px",
      },
      h4: {
        fontWeight: 600,
        fontSize: "21px", 
        lineHeight: "25.6px", 
      },
      h5: {
        fontWeight: 600,
        fontSize: "18px",
        lineHeight: "25.6px", 
      },
      h6: {
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: "19.2px", 
      },
      button: {
        textTransform: "capitalize",
        fontWeight: 400,
      },
      body1: {
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "21.34px",
      },
      body2: {
        fontSize: "12px",
        letterSpacing: "0rem",
        fontWeight: 400,
        lineHeight: "16px",
      },
      subtitle1: {
        fontSize: "14px", 
        fontWeight: 400,
      },
      subtitle2: {
        fontSize: "14px",
        fontWeight: 400,
      },
  },
  spacing: 2, // Custom spacing
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          textTransform: "none",
          backgroundColor: "#0F172A"
        },
      },
    },
    MuiTextField: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            backgroundColor: "#F2F6FA",
          },
        },
    },
  },
});

export default theme;
