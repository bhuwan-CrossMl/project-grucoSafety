"use client";
import {
  Box,
  Typography,
  Stack,
  CardHeader,
  CardContent,
  Backdrop,
  CircularProgress,
  Button,
  TextField,
} from "@mui/material";
import { ErrorOutline, CheckCircleOutline } from "@mui/icons-material";

//** External imports */
import { useFormik } from "formik";
import * as Yup from "yup";
//** Internal app components import */
import AuthLayout from "@/components/layouts/AuthLayout";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  CustomAuthCard,
  CustomTitle,
  CustomLabelTypography,
  CustomButtonLabel,
  CustomButton,
  CustomTextFieldShadow,
  CustomAuthErrorStack,
  CustomNavThridLevel,
  CustomTextField,
} from "../../../utils/common-helper";
import SucessToast from "@/components/toasts/SucessToast";
import ErrorToast from "@/components/toasts/ErrorToast";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";
import store from "@/store/store";
import { commonValidationMessages } from "@/utils/commonValidationMessages";
import FieldError from "@/components/customComponents/FieldError";

export default function Page() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showForgetPasswordSuccess, setShowPasswordSuccess] =
    React.useState(false);
  const [toastError, setToastError] = React.useState("");

  //** Form validation using Formik */
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .max(255)
        .required(commonValidationMessages?.required)
        .email(commonValidationMessages?.email),
    }),
    onSubmit: async () => {
    },
  });
  return (
    <Provider store={store}>
      <AuthLayout>
        {!showForgetPasswordSuccess ? (
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
              <Typography variant="h2">Forgot Password </Typography>
              {toastError && (
                <Box>
                  <ErrorToast toastError={toastError} />
                </Box>
              )}

              <Typography>Enter your email to confirm.</Typography>

              <Stack spacing={1} mt={2}>
                <CustomLabelTypography>Email</CustomLabelTypography>
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
                  placeholder="m@example.com"
                  // helperText={
                  //   formik.touched.email && formik.errors.email
                  //     && (<FieldError error={formik.errors.email} />)
                  // }
                />

                {formik?.touched.email && formik.errors.email && (
                  <CustomAuthErrorStack
                    sx={{
                      marginLeft: -2,
                      display: "flex",
                      alignItems: "center",
                      mt: "8px",
                    }}
                  >
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

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ padding: "12px" }}
              >
                <CustomButtonLabel>Confirm</CustomButtonLabel>
              </Button>
            </Box>
          </form>
        ) : (
          <CustomAuthCard
            sx={{
              marginTop: "129px", // Maximum width for the card // Add the top margin here (adjust the value as needed)
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CheckCircleOutline
                sx={{ color: "#02A002", height: "50px", width: "400px" }}
              />
            </Box>
            <CardHeader
              sx={{ padding: "0px" }}
              title={<CustomTitle>Successfully Submitted!</CustomTitle>}
            />
            <CardContent sx={{ padding: 0, paddingBottom: "0 !important" }}>
              <Typography variant="body1">
                `Please check your email and open the link we sent to
                continue.You may need to check your spam folder or unblock`
                no-reply@gtms.ca.
              </Typography>

              <Typography
                variant="body1"
                color="#797979"
                sx={{
                  mt: 2,
                }}
              >
                Notice: The link will be expired after 24 hours.
              </Typography>
            </CardContent>
          </CustomAuthCard>
        )}
      </AuthLayout>
    </Provider>
  );
}
