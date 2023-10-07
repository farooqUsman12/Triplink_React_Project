import { Box, ListItem, List, Typography, Button } from "@mui/material";
import React, {Fragment, useContext, useState} from "react";
import CheckIcon from '@mui/icons-material/Check';
import { PackageDetailsContxt } from "src/context/packageDetailsContxt";
import {useSelector} from "react-redux";
import {RootState} from "@/store/mainReducer";

const AdditionalInfo = () => {
  const { packageDetails } = useContext(PackageDetailsContxt)
  const {packageData} = useSelector((state: RootState) => state.package)
  return (
    <Box className="AdditionalInfo">
      <Box className="OverView__Container__LeftSide__IncludeSection">
        <Typography className="AdditionalInfo__title">
          Additional info and notes
        </Typography>
      </Box>
      <Box>
        <Typography className="text">
          {packageData.description}
        </Typography>
      </Box>
    </Box>

  );
};

export default AdditionalInfo;
