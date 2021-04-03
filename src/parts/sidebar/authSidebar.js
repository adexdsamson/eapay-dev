import { Container } from "react-bootstrap";
import { Frame10, Logo } from "../../Assets";
import { Slide } from "react-reveal";
import "./index.css";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE } from "../../routes";

const AuthSidebar = () => {
  return (
    <Container className="auth-side h-100">
      <Slide left>
        <Link className='auth-side' to={LOGIN_ROUTE}>
          <img src={Logo} alt="logo" />
        </Link>
        <div className="content-side d-flex flex-column align-items-center justify-content-center h-100">
          <img src={Frame10} alt="phone purchase" className="w-50" />
          <h2 className="text-center py-3">Merchant</h2>
          <p className="auth-side-text text-center">
            Help you and your customer experience seamless payment transactions; get payment in more ways, easy delivery and tax audit
          </p>
        </div>
      </Slide>
    </Container>
  );
};

export default AuthSidebar;
