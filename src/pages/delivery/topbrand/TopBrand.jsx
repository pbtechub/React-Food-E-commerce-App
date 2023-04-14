import './topbrand.scss'
import { Carousel } from 'bootstrap'
import { brands } from '../../../assets/data'


const TopBrand = () => {
  return (
    <div className='topBrand'>
      <div>
        <h1>Top brands for you</h1>
        <div>
          {brands.map((brand) => (
            <div>
              <div>
                <img src={brand.brandImg} alt="" srcset="" />
              </div>
              <h3>{brand.brandName}</h3>
              <p>{brand.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopBrand