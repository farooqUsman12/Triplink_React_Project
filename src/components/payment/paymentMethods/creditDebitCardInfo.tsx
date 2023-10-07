import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, Box, Checkbox, TextField, Typography } from "@mui/material";
import React from "react";
import ExpirationDateInput from "./expirationInput";
import Image from "next/image";
import cardIcon1 from "src/assets/images/paymentInfo/CardIcon1.svg";
import cardIcon2 from "src/assets/images/paymentInfo/CardIcon2.svg";
import cardIcon3 from "src/assets/images/paymentInfo/CardIcon3.svg";
import cardIcon4 from "src/assets/images/paymentInfo/CardIcon4.svg";
import cardIcon5 from "src/assets/images/paymentInfo/CardIcon5.svg";
import cardIcon6 from "src/assets/images/paymentInfo/CardIcon6.svg";
import cardIcon7 from "src/assets/images/paymentInfo/CardIcon7.svg";
import InfoIcon from "src/assets/images/paymentInfo/error-line.png";


const CreditDebitCardInfo = () => {
  return (
    <Accordion className="paymentMethod__Accordion" expanded={true}>
      <AccordionSummary className="paymentMethod__Accordion__summary">
        <Typography className="title">Credit / Debit Card</Typography>
        <Box className="expandenIcon">
          <Image src={cardIcon4} alt="cardIcon1" />
          <Image src={cardIcon5} alt="cardIcon1" />
          <Image src={cardIcon3} alt="cardIcon1" />
          <Image src={cardIcon6} alt="cardIcon1" />
          <Image src={cardIcon7} alt="cardIcon1" />
          <Image src={cardIcon1} alt="cardIcon1" />
          <Image src={cardIcon2} alt="cardIcon1" />
        </Box>
      </AccordionSummary>
      <AccordionDetails className="paymentMethod__Accordion__Details">
        <Box className="infoBox">
          <Box className="infoBox__checkBoxContainer">
            <Checkbox {...{ inputProps: { "aria-label": "Checkbox demo" } }} />
            <Box className="infoBox__checkBoxContainer__content">
              <Typography>I only want to pay a part of it now. </Typography>
              <Typography className="text">
                {" "}
                Take advantage, it&apos;s interest free!
              </Typography>
            </Box>
          </Box>
          <Typography className="infoBox__text">
            Your purchase includes one or more services for which we cannot
            defer payment and their cost will be included in the first payment.
          </Typography>
          <Box className="infoBox__SelectionContainer">
            <Box className="infoBox__selection">
              <Typography className="text firstText">5%</Typography>
              <Typography className="text secondText">25%</Typography>
              <Typography className="text lastText">50%</Typography>
            </Box>
            <Box className="infoBox__infoDetails">
              <Box className="info">
                <Typography className="text">Date</Typography>
                <Typography className="text">Amount to be paid</Typography>
              </Box>
              <Box className="info">
                <Typography className="text">Today</Typography>
                <Typography className="text">
                  <span>69,40€</span>
                </Typography>
              </Box>
              <Box className="info lastInfo">
                <Typography className="text">16/10/2023</Typography>
                <Typography className="text">
                  <span>1318,60€</span>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
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
        <Box className="alertBox">
          <Typography className="alertBox__text">
            Remember to have your mobile phone or bank app ready in case your
            bank requires verification.
          </Typography>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default CreditDebitCardInfo;
