import { Container } from "react-bootstrap";
import { Frame10 } from "../../Assets";
import { Slide } from "react-reveal";

const AuthSIdebar = () => {
  return (
    <Container
      className="h-100"
      style={{ background: "#2C4563", color: "white" }}
      fluid
    >
      <Slide left>
        <img
          style={{ position: "absolute", top: 20 }}
          src={Frame10}
          height={30}
          width={30}
          alt="logo"
        />
        <div className="d-flex flex-column align-items-center justify-content-center h-100">
            <img src={Frame10} alt="phone purchase" className="w-50" />
          <h2 className="text-center py-4">Merchant</h2>
          <p className="text-center">
            Help you and your customer experience seamless payment transactions;
            get payment in more ways, easy delivery and tax audit
          </p>
        </div>
      </Slide>
    </Container>
  );
};

export default AuthSIdebar;
