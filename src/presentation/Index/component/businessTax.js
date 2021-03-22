import Feature from "../../../components/feature";
import { Tax as img } from "../../../assets";
import { useMediaQueries } from '../../../HOC/useMediaQuery';

const BusinessTax = ({ }) => {
  const isMobile = useMediaQueries(0, 960);
  return (
      <Feature
        title="Tax audit guide and report"
        body="We help you find the best solution to get your tax paid while also generating your annual tax report"
        src={img}
        alt="business tax"
        reverse={isMobile ? true : false}
      />
  );
};

export default BusinessTax;
