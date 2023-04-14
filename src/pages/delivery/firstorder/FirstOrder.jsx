import './firstorder.scss'
import { Carousel } from 'bootstrap'
import { foods } from '../../../assets/data'
// import Carousel from 'react-bootstrap'

const FirstOrder = () => {
  return (
    <div className='firstOrder'>
      <div>
        <h1>Inspiration for your first order</h1>
        <div>
          {foods.map((food) => (
            <div key={food.id}>
              <div>
                <img src={food.foodImg} alt="" srcset="" />
              </div>
              <h3>{food.foodName}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FirstOrder