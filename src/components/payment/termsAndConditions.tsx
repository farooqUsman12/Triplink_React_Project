import { Box, Checkbox, Typography } from "@mui/material";
import React from "react";

const TermsAndConditions = () => {
  return (
    <Box className="paymentMethod__footer">
      <Typography className="request">
        You will be able to request an invoice at the end of the reservation.
      </Typography>
      <Box className="conditionalCheck">
        <Checkbox {...{ inputProps: { "aria-label": "Checkbox demo" } }} />
        <Typography className="text">
          I accept the following terms and conditions:{" "}
          <span>General Terms and Conditions</span> &{" "}
          <span>Privacy Policy.</span>{" "}
        </Typography>
      </Box>
      <Typography className="conformation">
        Almost there! Click the button to confirm your reservation.
      </Typography>
    </Box>
  );
}

export default TermsAndConditions;
