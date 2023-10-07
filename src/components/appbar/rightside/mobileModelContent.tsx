import React from "react";
import { Box, Typography, ListItem, Button } from "@mui/material";
import Image from "next/image";
const FLAG_BASE_URL =
  "https://purecatamphetamine.github.io/country-flag-icons/3x2/";

interface Flag {
  code: string;
  name: string;
}

const FLAGS: Flag[] = [
  { code: "US", name: "United States" },
  { code: "PK", name: "Pakistan" },
  { code: "IN", name: "India" },
  { code: "DE", name: "Germany" },
  { code: "FI", name: "Finland" },
  { code: "CA", name: "Canada" },
];

interface Currency {
  name: string;
  sign: string;
}

const CURRENCIES: Currency[] = [
  { name: "Euro", sign: "€" },
  { name: "United States Dollar", sign: "$" },
  { name: "British Pound", sign: "£" },
  { name: "Turkish Lira", sign: "₺" },
  { name: "Saudi Riyal", sign: "﷼" },
  { name: "Russian Ruble", sign: "₽" },
];
const MobileModelContent = (props: any) => {
  const { componentState } = props;

  return (
    <>
      {componentState === 0 ? (
        <Box className="modal-content__Content">
          <Box className="modal-content__Content__data">
            <Typography>My Bookings</Typography>
          </Box>
          <Box className="modal-content__Content__data">
            <Typography>My Bank Card</Typography>
          </Box>
          <Box className="modal-content__Content__data">
            <Typography>Settings</Typography>
          </Box>
          <Box className="modal-content__Content__data">
            <Typography>My Profile</Typography>
          </Box>
          <ListItem className="FooterButton">
            <Button className="FooterButton__signUpBtn">Sign Up</Button>
            <Button className="FooterButton__signInBtn">Sign In</Button>
          </ListItem>
        </Box>
      ) : null}

      {componentState === 1 ? (
        <Box className="modal-content__Content">
          {FLAGS.map((flag: Flag, index: number) => (
            <Box className="modal-content__Content__data" key={index}>
              <Image
                alt="United States"
                width={19}
                height={12}
                className="modal-content__Content__data__Icon"
                src={`${FLAG_BASE_URL}${flag.code}.svg`}
              />
              <Typography>{flag.name}</Typography>
            </Box>
          ))}
        </Box>
      ) : null}
      {componentState === 2 ? (
        <Box className="modal-content__Content">
          {CURRENCIES.map((currency: Currency, index: number) => (
            <Box className="modal-content__Content__data" key={index}>
              <Typography className="modal-content__Content__data__Sign">
                {currency.sign}
              </Typography>

              <Typography>{currency.name}</Typography>
            </Box>
          ))}
        </Box>
      ) : null}
    </>
  );
};
export default MobileModelContent;
