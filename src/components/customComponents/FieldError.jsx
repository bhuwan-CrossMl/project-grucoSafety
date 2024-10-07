"use client";
import React from 'react';
import { Stack } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';
import { CustomNavThridLevel } from '@/utils/common-helper';

const FieldError= ({ error,customSx }) => {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '4px',
        mt: '8px',
        marginLeft: "-15px",
        ...customSx
      }}
    >
      <ErrorOutline
        sx={{
          width: '16px',
          height: '16px',
          color: '#F12323',
        }}
      />
      <CustomNavThridLevel sx={{ color: '#F12323' }}>
      {error}
      </CustomNavThridLevel>
    </Stack>
  );
};

export default FieldError;


