import { Col, Container, Row } from "react-bootstrap"


const Footer = () => {
  return (
    <footer className='bg-second-color pt-5 pb-5'>
      <Container className=''>
        <Row>
          <Col md={6} sm={12}>
          <p className='text-white'>2021 Eapay, All right reserved.</p>
          </Col>
          <Col md={6} sm={12}>
          <p className='text-white text-right'>info@eapay.website</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
