import Feature from "../../../components/feature";
import { StoreLap as img } from "../../../assets";

const Ecommerce = ({ title, body, src, alt }) => {
  return (
    <section>
      <Feature
        title="Eapay Commerce"
        body="Display your products to more customers and improve sales with our customized E-commerce store."
        src={img}
        alt
        reverse
      />
    </section>
  );
};

export default Ecommerce;
