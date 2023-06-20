import { ThreeDots} from "react-loader-spinner"
import Styles from './Loader.module.css'

const Loader = () => {
 return  <div className={Styles.Loader}>
<ThreeDots 
height="80" 
width="90" 
radius="9"
color="black" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />
 </div>
}

export default Loader