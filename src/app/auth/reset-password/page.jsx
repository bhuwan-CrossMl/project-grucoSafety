"use client";
import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Stack,
  CardHeader,
  IconButton,
  CardContent,
  InputAdornment,
  Backdrop,
  CircularProgress,
  Link,
  Tooltip,
  Button
} from "@mui/material";
import {
  ErrorOutline,
  VisibilityOutlined,
  VisibilityOffOutlined,
  CheckCircleOutline,
  PanoramaFishEye,
} from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthLayout from "@/components/layouts/AuthLayout";
import React from "react";
import { useRouter } from "next/navigation";
import {
  CustomAuthCard,
  CustomTitle,
  CustomLabelTypography,
  CustomTextField,
  CustomButtonLabel,
  CustomButton,
  CustomAuthErrorStack,
} from "../../../utils/common-helper";
import SucessToast from "@/components/toasts/SucessToast";
import ErrorToast from "@/components/toasts/ErrorToast";
import { commonValidationMessages } from "@/utils/commonValidationMessages";
import { Provider } from "react-redux";
import store from "@/store/store";

export default function Page() {
  const queryParams = new URLSearchParams(window.location.search);
  const router = useRouter();
  // Get the 'token' query parameter value
  const token = queryParams.get("token");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showInvalidPage, setShowInvalidPage] = React.useState(false);
  const [paswordSuccess, setPasswordSuccess] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [toastError, setToastError] = useState("");
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  /**
   * @method [checkPasswordStrength] For handling password strength
   * @param password password string
   * @returns requirement object
   */
  const checkPasswordStrength = (password) => {
    const requirements = {
      length: password.length >= 8,
      hasUpperCase:
        commonValidationMessages?.checkUppercasePassword?.test(password), // Check for at least one uppercase letter
      hasNumberOrSpecialChar:
        commonValidationMessages?.passwordSpecialCharacter?.test(password), // Check for at least one number or special character
    };

    return requirements;
  };

  const passwordStrengthLabels = {
    length: commonValidationMessages?.passwordComponent.passwordLength,
    hasUpperCase: commonValidationMessages?.passwordComponent?.upperCase,
    hasNumberOrSpecialChar:
      commonValidationMessages?.passwordComponent?.specialCharacter,
  };

  const formik = useFormik({
    initialValues: {
      new_password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      new_password: Yup.string().required(
        commonValidationMessages?.passwordReset?.createPassword
      ),
      confirm_password: Yup.string()
        .required(commonValidationMessages?.accountActivate?.confirmPassword)
        .oneOf(
          [Yup.ref(commonValidationMessages?.passwordReset?.new_password)],
          commonValidationMessages?.accountActivate?.passwordMatch
        ),
    }),
    onSubmit: async (values, { setErrors }) => {},
  });

  return (
    <Provider store={store}>
      <AuthLayout>
        {showInvalidPage ? (
          <Box sx={{maxWidth: "384px",borderRadius:"10px" ,p:"24px" , boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px", }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ErrorOutline
                sx={{ color: "#003D4C", height: "50px", width: "400px" }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <CustomTitle>Invalid Link</CustomTitle>
            </Box>

            <Box >
              <Typography variant="body1">
                `Apologies, the link is either not found or expired. For
                assistance, contact`{" "}
                <Link href="mailto:support@gruco.com" variant="body1">
                Support.
                </Link>{" "}
              </Typography>
              <CustomButton
                type="submit"
                fullWidth
                variant="contained"
                onClick={() => router.push("/auth/signin")}
              >
                <CustomButtonLabel>Sign In</CustomButtonLabel>
              </CustomButton>
            </Box>
          </Box>
        ) : (
          <>
            {!paswordSuccess ? (
                  <form noValidate onSubmit={formik.handleSubmit}>
              <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap:"16px",
                  marginTop: "45px", 
                  maxWidth: "384px",
                  minWidth: "384px",
                  p:"24px",
                  boxShadow:
                  "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                  borderRadius: "10px",
                }}
              >
              

                     <Typography variant="h1">Password Reset</Typography>
            
                  <Typography variant="body1">
                    Enter your email to confirm.
                  </Typography>
                  {toastError && (
                    <Box>
                      <ErrorToast toastError={toastError} />
                    </Box>
                  )}
                
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
                        disabled={true}
                      />
                    </Stack>

                    <Stack spacing={1} mt={2}>
                      <CustomLabelTypography>
                        New password
                      </CustomLabelTypography>
                      <CustomTextField
                        fullWidth
                        id="new_password"
                        name="new_password"
                        variant="outlined"
                        onChange={formik.handleChange}
                        value={formik.values.new_password}
                        error={
                          !!(
                            formik.touched.new_password &&
                            formik.errors.new_password
                          )
                        }
                        onBlur={formik.handleBlur}
                        type={showPassword ? "text" : "password"} // Toggle password visibility
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <Tooltip
                                title={
                                  showPassword
                                    ? "Hide Password"
                                    : "Show Password"
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
                                  style={{ backgroundColor: "transparent" }}
                                >
                                  {showPassword ? (
                                    <VisibilityOffOutlined
                                      sx={{ color: "#000000" }}
                                    />
                                  ) : (
                                    <VisibilityOutlined
                                      sx={{ color: "#000000" }}
                                    />
                                  )}
                                </IconButton>
                              </Tooltip>
                            </InputAdornment>
                          ),
                        }}
                      />

                      {formik.touched.new_password &&
                        formik.errors.new_password && (
                          <CustomAuthErrorStack
                            sx={{
                              marginLeft: -2,
                              marginBottom:
                                formik.errors.new_password && "22px !important",
                            }}
                          >
                            <ErrorOutline
                              sx={{
                                width: "16px",
                                height: "16px",
                              }}
                            />
                            {formik.errors.new_password}
                          </CustomAuthErrorStack>
                        )}

                      <Stack spacing={2}>
                        {Object?.entries(
                          checkPasswordStrength(formik.values.new_password)
                        ).map(([key, value]) => (
                          <Typography
                            key={key}
                            variant="body2"
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              backgroundColor: value
                                ? "#CCECCC"
                                : formik.values.new_password
                                ? "#FCD3D3"
                                : "#F2F2F2", // Green for met, Red for not met and typed, Gray for not typed
                              color: value
                                ? "#028002"
                                : formik.values.new_password
                                ? "#F12323"
                                : "#797979", // Change to dark gray for the starting text
                              padding: "4px 8px",
                              borderRadius: "4px",
                              mt:"10px"
                            }}
                          >
                            {value ? (
                              <CheckCircleOutline
                                fontSize="small"
                                sx={{
                                  color: "#028002",
                                  marginRight: 1,
                                  fontSize: "16px",
                                }}
                              />
                            ) : !formik.values.new_password ? (
                              <PanoramaFishEye
                                fontSize="small"
                                sx={{
                                  color: "#7B7B7B",
                                  marginRight: 1,
                                  fontSize: "16px",
                                }}
                              />
                            ) : (
                              <ErrorOutline
                                fontSize="small"
                                sx={{
                                  color: "#F12323",
                                  marginRight: 1,
                                  fontSize: "16px",
                                }}
                              />
                            )}
                            {passwordStrengthLabels[key]}
                          </Typography>
                        ))}
                      </Stack>
                    </Stack>

                    <Stack spacing={1} mt={3}>
                      <CustomLabelTypography>
                        Confirm password
                      </CustomLabelTypography>
                      <CustomTextField
                        fullWidth
                        id="confirm_password"
                        name="confirm_password"
                        type={showConfirmPassword ? "text" : "password"}
                        variant="outlined"
                        onChange={formik.handleChange}
                        value={formik.values.confirm_password}
                        error={
                          !!(
                            formik.touched.confirm_password &&
                            formik.errors.confirm_password
                          )
                        }
                        onBlur={formik.handleBlur}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <Tooltip
                                title={
                                  showConfirmPassword
                                    ? "Hide Password"
                                    : "Show Password"
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
                                  onClick={handleClickShowConfirmPassword}
                                  edge="end"
                                  style={{ backgroundColor: "transparent" }}
                                >
                                  {showConfirmPassword ? (
                                    <VisibilityOffOutlined
                                      sx={{ color: "#000000" }}
                                    />
                                  ) : (
                                    <VisibilityOutlined
                                      sx={{ color: "#000000" }}
                                    />
                                  )}
                                </IconButton>
                              </Tooltip>
                            </InputAdornment>
                          ),
                        }}
                      />
                      {formik.touched.confirm_password &&
                        formik.errors.confirm_password && (
                          <CustomAuthErrorStack sx={{ marginLeft: -2 }}>
                            <ErrorOutline
                              sx={{
                                width: "16px",
                                height: "16px",
                              }}
                            />
                            {formik.errors.confirm_password}
                          </CustomAuthErrorStack>
                        )}
                    </Stack>

                    <CustomButton type="submit" fullWidth variant="contained" >
                      Reset
                    </CustomButton>
                
            
              </Box>
              </form>
            ) : (
              <CustomAuthCard sx={{ marginTop: "129px", maxWidth: "384px" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 4,
                  }}
                >
                  <CheckCircleOutline
                    sx={{ color: "#02A002", height: "50px", width: "400px" }}
                  />
                </Box>
                <CardHeader
                  sx={{ padding: "0px" }}
                  title={<CustomTitle>{t("Successfully Reset!")}</CustomTitle>}
                />
                <CardContent sx={{ padding: 0, paddingBottom: "0 !important" }}>
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    {t(`Your password has been reset. Please go Sign In to get access
                  to your account.`)}
                  </Typography>
                  <CustomButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={() => router.push("/auth/signin")}
                  >
                    <CustomButtonLabel>{t("Sign In")}</CustomButtonLabel>
                  </CustomButton>
                </CardContent>
              </CustomAuthCard>
            )}
          </>
        )}
      </AuthLayout>
    </Provider>
  );
}
