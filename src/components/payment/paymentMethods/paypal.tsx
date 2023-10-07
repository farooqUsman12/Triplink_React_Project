import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import PaypalIcon from "src/assets/images/paymentInfo/PayPal-logo.svg";


const Paypal = () => {
  return (
    <Accordion className="paymentMethod__Accordion">
      <AccordionSummary className="paymentMethod__Accordion__summary">
        <Typography className="title">PayPal</Typography>
        <Box className="">
          <Image src={PaypalIcon} alt="cardIcon1" />
        </Box>
      </AccordionSummary>
      <AccordionDetails className="paymentMethod__Accordion__Details">
        <Typography className="infoBox__text">
          Your purchase includes one or more services for which we cannot defer
          payment and their cost will be included in the first payment.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Paypal;
