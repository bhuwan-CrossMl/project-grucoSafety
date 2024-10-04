import { Box, Typography } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import {
  CustomNoticeTypography,
} from "../../utils/common-helper";

const ErrorToast = ({ toastError,marginBottom }) => {
  const { t } = useTranslation("translation");
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        gap: '8px',
        background: '#FCD3D3',
        padding: '12px 16px',
        marginBottom:marginBottom
      }}
    >
      <ErrorIcon sx={{ fontSize: '18px', color: '#C11C1C' }} />
      <CustomNoticeTypography  sx={{color:"#C11C1C"}}>
        {t(toastError)}
      </CustomNoticeTypography>
    </Box>
  );
};

export default ErrorToast;
