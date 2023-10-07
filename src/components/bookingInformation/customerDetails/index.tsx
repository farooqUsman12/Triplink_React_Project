import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import Checkbox from "@mui/material/Checkbox";
import InputField from "./inputField";
import InputPhone from "./phoneField";
import AddOns from "./addOns";

const CustomerDetails = () => {
  return (
    <Fragment>
      <Box id="CustomerDetails" className="CustomerDetails">
        <Typography className="CustomerDetails__description">
          Include the details as they are shown on your ID/Passport.
        </Typography>
        <Box className="CustomerDetails__Data">
          <Box>
            <Typography className="title">Traveler 1</Typography>
            <Box className="CustomerDetails__Data__InputFieldContainer">
              <InputField label="First name" />
              <InputField label="Last name" />
              <Box className="phoneNumber">
                <InputPhone />
              </Box>
              <InputField label="E-mail" />
              <Box className="CustomerDetails__Data__checkbocContainer">
                <Checkbox
                  {...{ inputProps: { "aria-label": "Checkbox demo" } }}
                />
                <Typography>Use this data as contact information</Typography>
              </Box>
            </Box>
          </Box>
          <Box mt={"30px"}>
            <Typography className="title">Traveler 2</Typography>
            <Box className="CustomerDetails__Data__InputFieldContainer">
              <InputField label="First name" />
              <InputField label="Last name" />
            </Box>
          </Box>
        </Box>
      </Box>

      <AddOns />
    </Fragment>
  );
};

export default CustomerDetails;
