import { Link } from "react-router-dom"
import './small.css'


const Card = ({ src, title, body}) => {
  return ( 
    <div className='d-flex small-card p-3 justify-content-between align-items-center mt-3'>
      <img src={src} alt='icon' />
      <div className='ml-3'>
        <h4>{title}</h4>
        <p>{body}</p>
        <Link to='/'>Continue</Link>
      </div>
    </div>
   );
}
 
export default Card;