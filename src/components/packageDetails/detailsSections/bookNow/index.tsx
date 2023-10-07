import { Box, Button, Typography } from "@mui/material";
import OriginDropdown from "./origin";
import TravelerDropdown from "./travelers";
import DepartureDate from "./departureDate";
import { useContext } from "react";
import { PackageDetailsContxt } from "src/context/packageDetailsContxt";
import { useRouter } from "next/router";
import { embedPageUrl } from "src/utils/embedPageUrl";

const Index = () => {

  const { asPath } = useRouter();
  const { changeViewHandler } = useContext(PackageDetailsContxt);

  const booKNowBtnHandler = () => {
    changeViewHandler({ label: "Continue", value: "reservation" })
    embedPageUrl(`${asPath}/reservation`)
    window.scrollTo({top: 0 , behavior:'smooth'});
  }

  return (
    <Box className="chooseDetails">
      <Typography className="chooseDetails__title">
        Choose your details
      </Typography>
      <Box className="chooseDetails__dropdownContainer">
        <OriginDropdown />
        <TravelerDropdown />
        <DepartureDate />
      </Box>
      <Box
        onClick={booKNowBtnHandler}
        className="bookNowContainer"
      >
        <Button className="BookNowBtn">Book now</Button>
      </Box>
    </Box>
  );
};

export default Index;
