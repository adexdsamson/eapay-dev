import { Typography } from "@material-ui/core"
import { Empty } from "../../Assets";


const EmptyPlaceholder = () => {
  return ( 
    <div className='h-50vh d-flex align-items-center justify-content-center'>
      <div className='text-center'>
      <img src={Empty} alt="empty" className='img-fluid mb-3' />

      <Typography display='block' variant='body2'>
        No data
      </Typography>
      </div>
    </div>
   );
}
 
export default EmptyPlaceholder;