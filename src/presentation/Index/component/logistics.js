import Feature from "../../../components/feature";
import { Dispatch as img } from "../../../assets";
import { useMediaQueries } from "../../../HOC/useMediaQuery";

const Logistics = ({ title, body, src, alt }) => {
  const isMobile = useMediaQueries(0, 960);
  return (
    <Feature
      title="Eapay Logistics"
      body="Manage orders and delivery effectively with our on-site  delivery partners."
      src={img}
      alt="Eapay helps on dispatch ride"
      reverse={isMobile ? true : false}
    />
  );
};

export default Logistics;
