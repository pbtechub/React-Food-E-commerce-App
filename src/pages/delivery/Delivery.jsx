import './delivery.scss'
import MenuBtn from '../../pages/delivery/menubtn/MenuBtn';
import FirstOrder from '../../pages/delivery/firstorder/FirstOrder';
import TopBrand from '../../pages/delivery/topbrand/TopBrand';
import Restaurants from '../../pages/delivery/restaurants/Restaurants';


const Delivery = () => {
  return (
    <div>
        <MenuBtn />
        <FirstOrder />
        <TopBrand />
        <Restaurants />
    </div>
  )
}

export default Delivery