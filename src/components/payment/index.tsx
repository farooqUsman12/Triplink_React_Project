import { Box } from "@mui/material";
import { embedPageUrl } from "src/utils/embedPageUrl";
import PackageDetailsStepWrapper from "../shared/wrapper/packageDetailsStepWrapper";
import { useContext } from "react";
import { PackageDetailsContxt } from "src/context/packageDetailsContxt";
import TermsAndConditions from "./termsAndConditions";
import PaymentMethods from "./paymentMethods";
import { useRouter } from "next/router";

const Payment = () => {
  const { changeViewHandler } = useContext(PackageDetailsContxt);
  const {asPath } = useRouter()

  const nextHandler = () => {
    changeViewHandler({
      label: "Book",
      value: "confirmation",
    });
    embedPageUrl(`${asPath}/confirmation`)
  };

  return (
    <PackageDetailsStepWrapper nextHandler={nextHandler} step={2} btnText={"Book"} showAlertBox={false}>
      <Box id="paymentMethod" className="paymentMethod">
        <PaymentMethods />
        <TermsAndConditions />
      </Box>
    </PackageDetailsStepWrapper>
  );
};

export default Payment;
