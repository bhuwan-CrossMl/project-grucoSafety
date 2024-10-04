"use client"; // Ensure this is present
import * as React from "react";
import {
  Box,
  Button,
  Typography,
  Stack,
  Link,
  CardHeader,
  Tooltip,
  Checkbox,
  CardContent,
  FormControlLabel,
  InputAdornment,
  IconButton,
  Backdrop,
  CircularProgress,
  Container,
  Grid
} from "@mui/material";
import {
  ErrorOutline,
  VisibilityOutlined,
  VisibilityOffOutlined,
} from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthLayout from "@/components/layouts/AuthLayout";
import { useRouter } from 'next/navigation'; 
import {
  CustomTextFieldShadow,
  CustomLabelTypography,
  CustomButtonLabel,
  CustomTypography,
  CustomAuthCard,
  CustomTitle,
  CustomAuthErrorStack,
  CustomNoticeTypography,
  CustomPTypography,
  CustomNavThridLevel} from "../../../utils/common-helper";
import ErrorIcon from "@mui/icons-material/Error";
import SucessToast from "@/components/toasts/SucessToast";
import ErrorToast from "@/components/toasts/ErrorToast";
import BackdropLoader from "@/components/loaders/BackdropLoader";
import { commonValidationMessages } from "@/utils/commonValidationMessages";
import {EMAIL_REGEX} from "@/utils/helper";
import { useDispatch, useSelector } from "react-redux";
// import Grid from '@mui/material/Unstable_Grid';
import RootLayout from "@/components/layouts/RootLayout";
import store from '@/store/store';
import { Provider } from 'react-redux';


// CSS for FormControlLabel
const formControlLabelStyles = {
  display: "flex",
  // Padding for top and bottom is 12px, left and right is 0px
  padding: "12px 12px",
  alignItems: "center",
  gap: "8px", // Spacing between Checkbox and label
  alignSelf: "stretch",
  marginTop: "16px",
  marginBottom: "24px;",
};
// CSS for Checkbox
const checkboxStyles = {
  width: "16px",
  height: "16px",
  borderRadius: "2px",
  padding: "7px",
  border: "1px solid #A1A1A1", // Custom border color
};

export default function Page() {
  const router = useRouter();
  // const dispatch = useDispatch();
  const [showPassword, setShowPassword] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [toastError, setToastError] = React.useState("");
  const [tokenVerificationError, setTokenVerificationError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  //** handle show and hide password */
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  // State to track whether reCAPTCHA is verified
  const [isVerified, setIsVerified] = React.useState(false);
  //** Form validation using Formik */
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required(commonValidationMessages?.email)
        .matches(EMAIL_REGEX, commonValidationMessages?.email),
      password: Yup.string().required(commonValidationMessages?.password),
    }),
    onSubmit: async (values, { setErrors }) => {
      try {
        // Checking if reCAPTCHA is verified
        if (!isVerified) {
          setIsSubmitting(false);
          return;
        }
        setIsSubmitting(true);
        setTokenVerificationError("");

        const recaptchaResponse = await verifyRecaptcha(values);

        if (!(recaptchaResponse?.status === 200)) {
          // reCAPTCHA verification failed
          setIsSubmitting(false);
          setTokenVerificationError("reCAPTCHA verification failed.");
          return;
        }
        const response = await signInCall(values, language_code);

        if (response?.status === 200) {
          // toast.success(response?.data?.message);
          SucessToast({ message: response?.data?.message });
          localStorage.setItem("token", response?.data?.data?.token);
          localStorage.setItem(
            "languageCode",
            response?.data?.data?.preferred_language?.key
          );
          localStorage.setItem(
            "displayLanguage",
            response?.data?.data?.preferred_language?.value
          );
          setIsSubmitting(false);
          router.push('/dashboard');
        } else {
          setIsSubmitting(false);
        }
      } catch (error) {
        // Handle network errors or any other exceptions here
        if (!error?.response?.data) {
          // toast.error("An error occured while signing in. Please try again later.")
          setToastError(commonValidationMessages?.signInError);
        }
        setIsSubmitting(false);
        if (error?.response?.data?.status_code !== 401) {
          setToastError(error?.response?.data?.message);
        }

        const errors = {};
        // Check if the error response contains data for the "email" field
        if (error?.response?.data?.data?.email?.error) {
          errors.email = error.response.data.data.email.error;
        }

        // Check if the error response contains data for the "password" field
        if (error?.response?.data?.data?.password?.error) {
          errors.password = error.response.data.data.password.error;
        }
        setErrors(errors);
      }
    },
  });


  return (
    <Provider store={store}>
    <AuthLayout>
      <BackdropLoader loading={loading} />
      <form noValidate onSubmit={formik.handleSubmit}>
      <Box sx={{display:"flex",flexDirection:"column",gap:"24px",p:"24px", width:"384px", maxHeight:"440px", borderRadius:"10px",boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"}}>
     
        <Typography variant="h2">Login </Typography>
        {/* api call toast error */}
        {toastError && (
          <Box>
            <ErrorToast toastError={toastError} />
          </Box>
        )}


          <Typography variant="subtitle1" >
          Enter your email below to login to your account.
          </Typography>
        
            <Stack spacing={1} mt={2}>
              <CustomLabelTypography>
                Email address
              </CustomLabelTypography>
              <CustomTextFieldShadow
                fullWidth
                id="email"
                name="email"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={!!(formik.touched.email && formik.errors.email)}
                onBlur={formik.handleBlur}
                type="email"
              />
              {formik.touched.email && formik.errors.email && (
                <CustomAuthErrorStack sx={{ marginLeft: -2 }}>
                  <ErrorOutline
                    sx={{
                      width: "16px",
                      height: "16px",
                    }}
                  />
                  <CustomNavThridLevel sx={{ color: "#F12323" }}>
                    {formik.errors.email}
                  </CustomNavThridLevel>
                </CustomAuthErrorStack>
              )}
            </Stack>
            <Stack spacing={1} mt={2}>
              <Stack justifyContent={"space-between"} direction={"row"}>

              
              <CustomLabelTypography>Password</CustomLabelTypography>
              <Link href="/forgot-password" variant="body1" color="#0F172A">
                Forgot your password?
              </Link>
              </Stack>
              <CustomTextFieldShadow
                fullWidth
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.password}
                error={!!(formik.touched.password && formik.errors.password)}
                onBlur={formik.handleBlur}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Tooltip
                        title={
                          showPassword ? "Hide Password" : "Show Password"
                        }
                        componentsProps={{
                          tooltip: {
                            sx: {
                              bgcolor: "#DFDFDF",
                              color: "#505050",
                              padding: "4px, 8px, 4px, 8px",
                              fontFamily: "Roboto",
                              fontWeight: 400,
                              fontSize: "14px",
                              lineHeight: "21px",
                              marginRight: "70px",
                            },
                          },
                        }}
                      >
                        <IconButton
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? (
                            <VisibilityOffOutlined sx={{ color: "#000000" }} />
                          ) : (
                            <VisibilityOutlined sx={{ color: "#000000" }} />
                          )}
                        </IconButton>
                      </Tooltip>
                    </InputAdornment>
                  ),
                }}
              />
              {formik.touched.password && formik.errors.password && (
                <CustomAuthErrorStack sx={{ marginLeft: -2 }}>
                  <ErrorOutline
                    sx={{
                      width: "16px",
                      height: "16px",
                    }}
                  />
                  <CustomNavThridLevel sx={{ color: "#F12323" }}>
                    {formik.errors.password}
                  </CustomNavThridLevel>
                </CustomAuthErrorStack>
              )}
            </Stack>

          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 1,
                mb: 3,
                display: "flex",
                padding: "12px",
                alignItems: "flex-start",
                gap: "8px",
                alignSelf: "stretch",
              }}
            >
              <CustomButtonLabel>Sign In</CustomButtonLabel>
            </Button>
         

  
      </Box>
      </form>
    </AuthLayout>
    </Provider>
  );
};

