import { Typography } from "@mui/material";
import Categories from "./categories";
import RoomsPreference from "./roomsPreference";
import ExtraServices from "./extraServices";
import PackageDetailsStepWrapper from "../shared/wrapper/packageDetailsStepWrapper";
import { useContext } from "react";
import { PackageDetailsContxt } from "src/context/packageDetailsContxt";
import { useRouter } from "next/router";
import { embedPageUrl } from "src/utils/embedPageUrl";

const ReservationInfo = () => {

  const {asPath } = useRouter()
  const { changeViewHandler } = useContext(PackageDetailsContxt);

  const nextHandler = () => {
    changeViewHandler({
      label: "Continue",
      value: "bookingInformation",
    });
    embedPageUrl(`${asPath}/booking-information`)
  };

  return (
    <PackageDetailsStepWrapper
     nextHandler={nextHandler}
     btnText="Continue"
     showAlertBox={true}
     >
      <Typography className="text">
        Find the right category for you and get the most out of your travel
        package.
      </Typography>
      <Categories />
      <RoomsPreference />
      <ExtraServices />
    </PackageDetailsStepWrapper>
  );
};

export default ReservationInfo;
