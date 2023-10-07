import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import BankIcon from "src/assets/images/paymentInfo/bank-transfer.svg";
import ExpirationDateInput from "./expirationInput";
import InfoIcon from "src/assets/images/paymentInfo/error-line.png";


const BankTransfer = () => {
  return (
    <Accordion className="paymentMethod__Accordion">
      <AccordionSummary className="paymentMethod__Accordion__summary">
        <Typography className="title">Bank transfer</Typography>
        <Box className="">
          <Image src={BankIcon} alt="cardIcon1" />
        </Box>
      </AccordionSummary>
      <AccordionDetails className="paymentMethod__Accordion__Details">
        <Box className="cardInfo">
          <Autocomplete
            id="country-customized-option-demo"
            options={["visa", "non visa"]}
            disableCloseOnSelect
            renderInput={(params) => (
              <TextField {...params} label="Choose a country" />
            )}
          />
          <TextField className="cardInfo__cardNumber" label="Card number" />
          <Box display={"flex"} justifyContent={"space-between"}>
            <ExpirationDateInput />
            <TextField
              className="cardInfo__cvvInfo"
              label="CVV"
              InputProps={{
                endAdornment: (
                  <Box className="icon">
                    <Image src={InfoIcon} alt="InfoIcon" />
                  </Box>
                ),
              }}
            />
          </Box>
          <TextField className="cardInfo__cardNumber" label="CardHolder Name" />
          <TextField
            className="cardInfo__cardNumber"
            label="CardHolder Address"
          />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default BankTransfer;
