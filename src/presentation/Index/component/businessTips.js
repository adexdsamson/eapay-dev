import Feature from "../../../components/feature";
import { Tips as img } from "../../../assets";

const BusinessTip = ({ title, body, src, alt }) => {
  return (
      <Feature
        title="Business world changes with time; let’s keep you up to date"
        body="Get useful business articles and tips on how to grow your business and improve sales."
        src={img}
        alt='context to business tips'
        reverse
      />
  );
};

export default BusinessTip;
