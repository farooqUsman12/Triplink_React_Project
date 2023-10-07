import { Box, Button, Container } from "@mui/material";
import Appbar from "src/components/appbar";
import Steps from "src/components/bookingInformation/steper/steps";
import Footer from "src/components/footer";
import AlertMessage from "src/components/reservation/alertMessage";
import SelectedInfo from "src/components/reservation/selectedInfo";

const PackageDetailsStepWrapper = ({
  step = null,
  showAlertBox,
  btnText = "",
  nextHandler,
  children,
}: any) => {
  return (
    <Box id="Reservation">
      <Appbar />
      <Box className="reservationComponent">
        {step ? <Steps step={step} /> : null}
        <Container className="container">
          <Box className="container__reservationInfo">
            {children}
            {showAlertBox ? <AlertMessage /> : null}
            <Button
              onClick={nextHandler}
              className="container__reservationInfo__ContinueBtn"
            >
              {btnText}
            </Button>
          </Box>
          <SelectedInfo />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default PackageDetailsStepWrapper;
