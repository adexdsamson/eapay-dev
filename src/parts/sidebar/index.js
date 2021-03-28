// import {} from 'react';
import './index.css';
import { Logo } from '../../Assets';

const Sidebar = ({}) => {
  return ( 
    <aside className='sidebar'>
      <div className='d-flex align-items-center'>
      <img src={Logo} alt='eapays logo' />
      <h4>Eapay</h4>
      </div>
      <div></div>
    </aside>
   );
}
 
export default Sidebar;