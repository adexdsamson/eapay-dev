import './index.css'
import PropTypes from 'prop-types';
import { Avatar } from '@material-ui/core'


const Header = ({ title, src, children }) => {
  return ( 
    <div className='page-header d-flex align-items-center justify-content-between'>
      <h3 className='mb-0'>Dashboard</h3>
      <div className='pr-4 d-flex align-items-center'>
        <p className='ml-3 mr-3 mb-0 text-danger'>Test mode</p>
        <p className='ml-3 mr-3 mb-0'>hello</p>
        <Avatar src={src} />
      </div>
    </div>
   );
}
 
export default Header;