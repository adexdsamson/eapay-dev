import Feature from "../../../components/feature";
import { StoreLap as img } from "../../../assets";

const Ecommerce = ({ title, body, src, alt }) => {
  return (
    <Feature
      title="Eapay Commerce"
      body="Display your products to more customers and improve sales with our customized E-commerce store."
      src={img}
      alt="Laptop showing eapay's dashboard"
      reverse
    />
  );
};

export default Ecommerce;
