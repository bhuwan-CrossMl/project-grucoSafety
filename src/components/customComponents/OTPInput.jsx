"use client"; 
import React, { useRef, useState } from 'react';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';

const OTPInput = ({ length,otp,setOtp }) => {
  const inputRefs = useRef([]);

  const handleChange = (event, index) => {
    const value = event.target.value.slice(-1);
    const newOtp = otp.slice(0, index) + value + otp.slice(index + 1);
    setOtp(newOtp);

    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <Box sx={{ display: 'flex', gap: "6px" }}>
      {Array.from({ length }, (_, index) => (
        <TextField
          key={index}
          inputRef={(el) => (inputRefs.current[index] = el)}
          value={otp[index] || ''}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          inputProps={{
            maxLength: 1,
            style: {
              width: '40px',
              textAlign: 'center',
            },
          }}
          variant="outlined"
          size="small"
          sx={{
            background: "#FFF",
            height: "40px",
            width: "42px",
          }}
        />
      ))}
    </Box>
  );
};

export default OTPInput;