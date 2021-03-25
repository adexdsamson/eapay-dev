import { Container, Spinner } from 'react-bootstrap';


const Loader = () => {
  return ( 
    <Container style={{ height: '100vh' }} className='d-flex align-items-center'>
      <Spinner />
    </Container>
   );
}
 
export default Loader;