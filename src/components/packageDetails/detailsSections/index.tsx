import {
  Box,
  Container,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import AdditionalInfo from "./additionalInfo";
import CancellationPolicy from "./cancellation";
import BookNow from "./bookNow";
import Overview from "./overview";
import Includes from "./includes";
import Itinerary from "./itinerary";


const DetailSections = () => {
  return (
    <Box className="OverView">
      <Container className="OverView__Container">
        <Box className="OverView__Container__LeftSide">

          {/* overview section */}
          <Box className="OverView__Container__LeftSide__TextParagraph">
            <Overview />
          </Box>

          {/* what's includes section */}
          <Box className="OverView__Container__LeftSide__IncludeSection">
            <Includes />
          </Box>

          {/* itinerary section*/}
          <Box className="Schedule">
            <Itinerary />
          </Box>

          {/* additional info & notes section*/}
          <AdditionalInfo />

          {/* cancellation policy section */}
          {/*<CancellationPolicy />*/}

        </Box>

        {/* book now section */}
        <BookNow />

      </Container>
    </Box>
  );
};

export default DetailSections;
