import Feature from "../../../components/feature";
import { qr } from "../../../assets";
import { useMediaQueries } from '../../../HOC/useMediaQuery';

const Payments = ({ title, body, src, alt }) => {
  const isMobile = useMediaQueries(0, 960);
  return (
    <section>
      <Feature
        title="Experience seamless payment through different options"
        body="Get paid offline with a customized Eapay QR, just a scan gets you paid instantly."
        src={qr}
        alt="Qr code payment"
        reverse={isMobile ? true : false}
      />
    </section>
  );
};

export default Payments;
