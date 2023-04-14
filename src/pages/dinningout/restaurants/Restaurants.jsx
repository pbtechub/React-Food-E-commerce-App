import './restaurants.scss'
import { restaurants } from '../../../assets/data'
import {TbArrowCurveRight} from 'react-icons/tb'
import {AiFillStar} from 'react-icons/ai'

const Restaurants = () => {
  return (
    <div className='restaurant'>
        <h1>Delivery Restaurants in Bengaluru</h1>
        <div>
            {
                restaurants.map((restaurant) => (
                    <div className='eachResto'>
                        <div className='restImg'>
                            <img src={restaurant.foodImg} alt="" srcset="" />
                            <div><p>50% OFF up to 100</p></div>
                            <span>{restaurant.time}</span>
                        </div>                        
                        <div className='restDetai'>
                            <div className='restDetaiTop'>
                                <h3>{restaurant.restoName}</h3>
                                <span>{restaurant.ratings}<span><AiFillStar /></span></span>
                            </div>
                            <div className='restDetaiBott'>
                                <p>{restaurant.foodCat}</p>
                                <p>₹{restaurant.price}<span>for one</span></p>
                            </div>
                        </div>
                        <div className='restRate'>
                            
                                <div className='arro'>
                                  <TbArrowCurveRight className='arr'/>
                                </div>
                                <span>{restaurant.totalOrd}+<span>orders placed from here recently</span></span>
                            
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Restaurants