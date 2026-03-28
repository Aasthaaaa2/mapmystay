import { Link } from 'react-router-dom'
import error404 from '../../assets/error404.jpg'
export function Error(){
  return(
    <>
    <div className="text-center pt-5">
      <img src={error404} alt="Error 404" height="400" width="400"/>
    </div>
    <div className="text-center">
      <Link to="/">Go to Home</Link>
    </div>
    </>
  )
}