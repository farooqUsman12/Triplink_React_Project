import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { PackageDetailsContxt } from "src/context/packageDetailsContxt";

const PriceSummary = () => {
  const { packageDetails, categoryPrice } = useContext(PackageDetailsContxt);
  const total = packageDetails?.price + +categoryPrice;
  return (
    <Box className="SelectedInfo__PriceSummary">
      <Typography className="title">Price Summary</Typography>
      <Box className="SelectedInfo__PriceSummary__details">
        <Box className="price">
          <Typography className="text">Your selection:</Typography>
          <Typography className="value">
            {total || packageDetails?.price}€
          </Typography>
        </Box>

        <Box className="detailedInfo">
          <Typography className="text">Travel package</Typography>
          <Typography className="text">{packageDetails?.price}€</Typography>
        </Box>

        <Box className="detailedInfo">
          <Typography className="text">Additional service</Typography>
          <Typography className="text">{categoryPrice || 0}€</Typography>
        </Box>

        <Box className="detailedInfo">
          <Typography className="text">Taxes</Typography>
          <Typography className="text">0€</Typography>
        </Box>

        <Box className="detailedInfo SelectedInfo__PriceSummary__details__footer">
          <Typography className="text">Total</Typography>
          <Typography className="text">
            <b>{total || packageDetails?.price}€</b>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PriceSummary;
