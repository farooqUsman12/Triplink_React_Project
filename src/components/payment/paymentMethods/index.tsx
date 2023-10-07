import CreditDebitCardInfo from "./creditDebitCardInfo";
import BankTransfer from "./bankTransfer";
import Paypal from "./paypal";

const PaymentAccordion = () => {
  return (
    <>
      <CreditDebitCardInfo />
      <BankTransfer />
      <Paypal />
    </>
  );
};

export default PaymentAccordion;
