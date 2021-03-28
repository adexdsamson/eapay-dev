// import {} from 'react';
import './index.css';
import { Logo } from '../../Assets';

const Sidebar = ({isMobile, user}) => {
  return ( 
    <aside className='sidebar position-relative'>
      <div className='d-flex align-items-center'>
      <img src={Logo} alt='eapays logo' />
      <h4>Eapay</h4>
      </div>
      <div></div>
      <div className='bottom text-white'>
        <p className='text-center'>Account mode: <span className={user?.mode === 'Live mode' ? 'text-success' : 'text-danger'}>Test mode</span></p>
      </div>
    </aside>
   );
}
 
export default Sidebar;