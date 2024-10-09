"use client"; // Ensure this is present
import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Stack,
  Link,
  Tooltip,
  InputAdornment,
  IconButton,
} from "@mui/material";
import {
  ErrorOutline,
  VisibilityOutlined,
  VisibilityOffOutlined,
} from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthLayout from "@/components/layouts/AuthLayout";
import { useRouter } from "next/navigation";
import {
  CustomTextField,
  CustomLabelTypography,
  CustomButtonLabel,
  CustomAuthErrorStack,
  CustomNavThridLevel,
} from "../../../utils/common-helper";
import SucessToast from "@/components/toasts/SucessToast";
import ErrorToast from "@/components/toasts/ErrorToast";
import BackdropLoader from "@/components/loaders/BackdropLoader";
import { commonValidationMessages } from "@/utils/commonValidationMessages";
import { EMAIL_REGEX } from "@/utils/helper";
import { useDispatch, useSelector } from "react-redux";
import RootLayout from "@/components/layouts/RootLayout";
import store from "@/store/store";
import { Provider } from "react-redux";
import OTPInput from "@/components/customComponents/OTPInput";

export default function Page() {
  const router = useRouter();
  // const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastError, setToastError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [otp, setOtp] = useState("");

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
    onSubmit: async () => {},
  });

  return (
    <Provider store={store}>
      <AuthLayout>
        <BackdropLoader loading={loading} />

        {!isFormSubmitted ? (
          <form noValidate onSubmit={formik.handleSubmit}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                p: "24px",
                width: "384px",
                maxHeight: "440px",
                borderRadius: "10px",
                boxShadow:
                  "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
              }}
            >
              <Typography variant="h2">Login </Typography>
              {/* api call toast error */}
              {toastError && (
                <Box>
                  <ErrorToast toastError={toastError} />
                </Box>
              )}

              <Typography variant="subtitle1">
                Enter your email below to login to your account.
              </Typography>

              <Stack spacing={1} mt={2}>
                <CustomLabelTypography>Email address</CustomLabelTypography>
                <CustomTextField
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
                  <Link
                    href="/auth/forgot-password"
                    variant="body1"
                    color="#0F172A"
                  >
                    Forgot your password?
                  </Link>
                </Stack>
                <CustomTextField
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
                            onClick={()=>setShowPassword(!showPassword)}
                            edge="end"
                          >
                            {showPassword ? (
                              <VisibilityOffOutlined
                                sx={{ color: "#000000" }}
                              />
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
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              p: "24px",
              width: "384px",
              maxHeight: "440px",
              borderRadius: "10px",
              boxShadow:
                "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
            }}
          >
            <Typography variant="h2">Confirm OTP </Typography>
            {toastError && (
              <Box>
                <ErrorToast toastError={toastError} />
              </Box>
            )}

            <Typography>
              We sent you OTP on your registered <br /> jerrmy.carry@acme.com
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <OTPInput length={6} otp={otp} setOtp={setOtp} />
              <Typography>Valid for 2 mins only</Typography>
            </Box>

            <Button
              type="submit"
              variant="contained"
              sx={{ padding: "12px" }}
              disabled={otp.length < 6}
            >
              <CustomButtonLabel>Confirm</CustomButtonLabel>
            </Button>
          </Box>
        )}
      </AuthLayout>
    </Provider>
  );
}
