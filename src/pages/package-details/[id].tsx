import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import BookingInformation from "src/components/bookingInformation";
import Confirmation from "src/components/confirmation";
import PackageDetails from "src/components/packageDetails";
import Payment from "src/components/payment";
import ReservationInfo from "src/components/reservation";
import { PackageDetailsContxt } from "src/context/packageDetailsContxt";

const VIEW: any = {
  packageDetails: <PackageDetails />,
  reservation: <ReservationInfo />,
  bookingInformation: <BookingInformation />,
  payment: <Payment />,
  confirmation: <Confirmation />
};

const Details = () => {

  const {
    query: { id },
  } = useRouter();
  const [pkgFound, setPkgFound] = useState<boolean>(false);

  const {
    step: { value },
    getPackageDetailsHandler,
    changeViewHandler,
  } = useContext(PackageDetailsContxt);

  useEffect(() => {
    //react-hooks/exhaustive-deps
    if (id) {
      changeViewHandler({ label: '', value: '' })
      const isFound = getPackageDetailsHandler(id);
      setPkgFound(isFound)
    }
  }, [id]);

  return value ? VIEW[value] : VIEW["packageDetails"];
};
export default Details;
