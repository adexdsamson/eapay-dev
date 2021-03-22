import { Container } from "react-bootstrap";
import { Store as img } from "../../assets";
import Header from "./component/header";
import PaymentFeature from "./component/payment";
import Ecommerce from "./component/ecommerce";
import Logistics from "./component/logistics";
import Store from "./component/store";
import ConnectWIthUs from './component/connect';
import BussinesTips from './component/businessTips';
import BusinessTax from './component/businessTax';
import Footer from '../../components/footer';

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
      <div className="header-container">
        <Container>
          <Header inputValue={inputValue} onChange={onChange} />
        </Container>
      </div>
      <Container>
        <PaymentFeature />
      </Container>
      <div className="header-container">
        <Container>
          <Ecommerce />
        </Container>
      </div>
      <Container>
        <Logistics />
      </Container>
      <div className="header-container">
        <Container>
          <Store
            title="NO POS, NO WAHALA"
            body="Get paid from customer’s debit card into your account with a credit card reader and product barcode reader"
            src={img}
            data={data}
          />
        </Container>
      </div>
      <div className='bg-second-color'>
        <Container>
          <ConnectWIthUs
            title="Connect with us for more information"
            body="We want to make business transaction easy for both vendors and customers"
            inputValue={inputValue}
            onChange={onChange}
          />
        </Container>
      </div>
      <div className="header-container">
        <Container>
          <BussinesTips />
        </Container>
      </div>
      <Container>
        <BusinessTax />
      </Container>
      <Footer />
    </>
  );
};

export default IndexPage;
