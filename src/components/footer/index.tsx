import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import LogoIcon from "src/assets/images/tripklik_logo.svg";
import React from "react";

const Footer = () => {
  return (
    <Box id="Footer">
      <Container className="FooterContainer">
        <Typography className="FooterContainer__Condations">
          Terms and conditions
        </Typography>
        <Box>
          <Image src={LogoIcon} alt="LogoIcon" />
        </Box>

        <Typography className="FooterContainer__Copyright">©Copyright info Address and Phone</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
