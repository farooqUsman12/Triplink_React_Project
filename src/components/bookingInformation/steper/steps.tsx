import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Container, Typography } from "@mui/material";
import Person2Icon from "@mui/icons-material/Person2";

const steps = ["Your selection", "Personal data", "Payment"];

const Steps = (props: any) => {
  const { step } = props;
  return (
    <Box className="steeperHeader">
      <Container className="container">
        <Box
          className="reservationComponent__stepper__component"
          sx={{ width: "100%" }}
        >
          <Box className="profileInfo">
            <Box className="profileInfo__PersonIcon">
              <Person2Icon sx={{ color: "#fff" }} />
            </Box>
            <Box className="profileInfo__text">
              <Typography className="account">
                Do you have an account?
              </Typography>
              <Typography className="login">
                <span>Log in</span> and make your reservation faster
              </Typography>
            </Box>
          </Box>
          <Box className="reservationComponent__stepper__component__steps">
            <Stepper activeStep={step} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel className="stepLabels">{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Steps;
