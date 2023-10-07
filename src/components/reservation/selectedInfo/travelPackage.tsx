import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import TravelPckageImage from "src/assets/images/Reservations/TravelPckage.png";
import HotelIcon from "src/assets/images/Reservations/HotelIcon.png";
import CalenderIcon from "src/assets/images/Reservations/CalenderIcon.png";
import AdditionalInfo from "src/assets/images/Reservations/AdditionalServiceIcon.png";
import Image from "next/image";
import { PackageDetailsContxt } from "src/context/packageDetailsContxt";

const TravelPackage = () => {
  const { departureDate , travelers , packageDetails , returnDate } = useContext(PackageDetailsContxt);

  return (
    <Box className="SelectedInfo__TravelPackege">
      <Image src={TravelPckageImage} alt="TravelPckageImage" className="Image" />
      <Box className="HotelInfo">
        <Image src={HotelIcon} alt="HotelIcon" />
        <Box className="HotelInfo__Info">
          <Typography className="title">
            {packageDetails?.heading}
          </Typography>
          <Typography className="from">From Almería, Spain</Typography>
          <Typography className="category">Category A</Typography>
        </Box>
      </Box>

      <Box className="schedule">
        <Image src={CalenderIcon} alt="CalenderIcon" />
        <Box className="schedule__Info">
          <Typography className="text">
            Departure date: <b>{departureDate}</b>
          </Typography>
          <Typography className="text">
            Return date: <b>{returnDate}</b>
          </Typography>
          <Typography className="text">
            Reservation for <b>{travelers.adults} adults , {travelers.childrens} childrens</b>
          </Typography>
        </Box>
      </Box>

      <Box className="additionalInfo">
        <Image src={AdditionalInfo} alt="AdditionalInfo" />
        <Box className="additionalInfo__info">
          <Typography className="title">Additional service name or title</Typography>
          <Typography className="text">Date or subtitle fot that service.</Typography>
        </Box>
      </Box>

      <Box className="SelectedInfo__TravelPackege__footer">
        <Typography className="text">Change selection</Typography>
        <Typography className="text">View details</Typography>
      </Box>
    </Box>
  );
};

export default TravelPackage;
