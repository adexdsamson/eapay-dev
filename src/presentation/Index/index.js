import { Container } from "react-bootstrap";
import { Store as img } from "../../Assets/index";
import Header from "./component/header";
import PaymentFeature from "./component/payment";
import Ecommerce from "./component/ecommerce";
import Logistics from "./component/logistics";
import Store from "./component/store";
import ConnectWIthUs from "./component/connect";
import BussinesTips from "./component/businessTips";
import BusinessTax from "./component/businessTax";
import Footer from "../../components/footer";

const data = [
  {
    body: "Easy and less expensive to setup",
  },
  {
    body: "Upload your inventory list and access it anywhere",
  },
  {
    body: "Create sub accounts for your employees",
  },
];

const IndexPage = ({ inputValue, onChange }) => {
  return (
    <>
      <section className="header-container">
        <Container>
          <Header inputValue={inputValue} onChange={onChange} />
        </Container>
      </section>
      <section className='container-section'>
        <Container className='h-100'>
          <PaymentFeature />
        </Container>
      </section>
      <section style={{ padding: '1rem'}} className="header-container ">
        <Container className='h-100 container-section'>
          <Ecommerce />
        </Container>
      </section>
      <section className='container-section'>
        <Container className='h-100'>
          <Logistics />
        </Container>
      </section>
      <section style={{ padding: '1rem'}} className="header-container ">
        <Container className='h-100 container-section'>
          <Store
            title="NO POS, NO WAHALA"
            body="Online platform that lets you accept payment through debit and credit cards in-person without POS."
            alt="laptop showing eapay's store"
            src={img}
            data={data}
          />
        </Container>
      </section>
      <section className="bg-second-color">
        <Container className='h-100'>
          <ConnectWIthUs
            title="Connect with us for more information"
            body="We want to make business transaction easy for both vendors and customers"
            inputValue={inputValue}
            onChange={onChange}
          />
        </Container>
      </section>
      <section style={{ padding: '1rem'}} className="header-container ">
        <Container className='h-100 container-section'>
          <BussinesTips />
        </Container>
      </section>
      <section className='container-section'>
        <Container className='h-100'>
          <BusinessTax />
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default IndexPage;
