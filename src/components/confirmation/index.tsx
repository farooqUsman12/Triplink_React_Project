import { Box, Button, Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import Appbar from "../appbar";
import Footer from "../footer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";
import PackageDetails from "src/assets/images/Reservations/detaildInfo.png";
import ManageIcon from "src/assets/images/Reservations/ico-searchl20.svg";
import RequestIcon from "src/assets/images/Reservations/RequestIco-searchl_20.svg";
import HotelIcon from "src/assets/images/Reservations/HotelIcon.png";
import CalenderIcon from "src/assets/images/Reservations/CalenderIcon.png";
import { PackageDetailsContxt } from "src/context/packageDetailsContxt";
const Confirmation = () => {
  const { packageDetails , departureDate , returnDate} = useContext(PackageDetailsContxt)

  console.log("packageDetails" , packageDetails)
  return (
    <Box id="conformation">
      <Appbar />
      <Box className="conformation">
        <Container className="conformation__container">
          <CheckCircleIcon className="conformation__container__checkIcon" />
          <Typography className="conformation__container__message">
            Your travel package reservation has been confirmed
          </Typography>
          <Typography className="thankuMessage">¡Thank you Jacob!</Typography>
          <Typography className="emailConformation">
            We have sent an email to <span>jacobthomastaylorj@gmail.com</span>{" "}
            with all the details of your reservation.
          </Typography>
          <Box className="refrenceContainer">
            <Typography className="refrenceContainer__text">
              Purchase reference
            </Typography>
            <Typography className="refrenceContainer__refrenceNumber">
              B7PIR291
            </Typography>
          </Box>
          <Box className="conformation__container__detailedInfo">
            <Image src={PackageDetails} alt="PackageDetails" className="locationImg" />
            <Box className="infoContainer">
              <Box className="infoContainer__infoBox">
                <Box className="infoContainer__infoBox__data">
                  <Image src={HotelIcon} alt="HotelIcon" />
                  <Box className="textInfo">
                    <Typography className="title">
                    {packageDetails?.heading}
                    </Typography>
                    <Typography className="from">From Almería, Spain</Typography>
                  </Box>
                </Box>
                <Box className="scheduleInfo">
                  <Image src={CalenderIcon} alt="CalenderIcon" />
                  <Box className="schedule">
                    <Typography className="text">Departure date: <span>{departureDate}</span></Typography>
                    <Typography className="text">Return date:<span>{returnDate}</span></Typography>
                    <Typography className="text">Reservation for <span>2 adults</span> </Typography>
                  </Box>
                </Box>
              </Box>
              <Typography className="infoContainer__totalPrice">Total price: {packageDetails?.price}€</Typography>
            </Box>
          </Box>
          <Box className="footerButtons">
            <Button className="footerButtons__Btn">
              <Image src={ManageIcon} alt="ManageIcon" />
              Manage your booking
            </Button>
            <Button className="footerButtons__Btn">
              <Image src={RequestIcon} alt="RequestIcon" />
              Request invoice
            </Button>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Confirmation;
