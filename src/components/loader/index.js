import { Container } from 'react-bootstrap';
import { LogoGif } from '../../Assets';

const Loader = () => {
  return ( 
    <Container style={{ height: '100vh' }} className='d-flex align-items-center justify-content-center'>
      <img src={LogoGif} width={50} height={50} alt='logo gif' />
    </Container>
   );
}
 
export default Loader;