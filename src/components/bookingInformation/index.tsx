import { useContext } from "react";
import PackageDetailsStepWrapper from "../shared/wrapper/packageDetailsStepWrapper";
import CustomerDetails from "./customerDetails";
import { PackageDetailsContxt } from "src/context/packageDetailsContxt";
import { useRouter } from "next/router";
import { embedPageUrl } from "src/utils/embedPageUrl";

const BookingInformation = () => {

  const { asPath } = useRouter()
  const { changeViewHandler } = useContext(PackageDetailsContxt);

  const nextHandler = () => {
    changeViewHandler({
      label: "Continue",
      value: "payment",
    });
    window?.scrollTo({top: 0 , behavior:'smooth'});
    embedPageUrl(`${asPath}/payment-details`)
  };

  return (
    <PackageDetailsStepWrapper
      nextHandler={nextHandler}
      step={1}
      btnText="Continue"
      showAlertBox={true}
    >
      <CustomerDetails />
    </PackageDetailsStepWrapper>
  );
};

export default BookingInformation;
