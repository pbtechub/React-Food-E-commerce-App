import React from 'react'
import './searchDropdown.scss'
import {AiFillStar} from 'react-icons/ai'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const SearchDropdown = () => {
  return (
    <div className='dropDownContainer'>
        <ul>
            <li>
                <div className="img">
                    <img src="https://b.zmtcdn.com/data/pictures/chains/1/50011/8979c57cdf214816efc0aa7bd7b34e2c_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A" alt="" />
                </div>
                <div className="details">
                    <h4>A2B-Adiyar Ananda Bhavan</h4>
                    <div className='ratings'>
                        <div className='dinning'>
                            <span>3.8<span><AiFillStar /></span></span>
                            <p>Dinning</p>
                        </div>
                        <div className='delivery'>
                            <span>3.8<span><AiFillStar /></span></span>
                            <p>Delivery</p>
                        </div>
                    </div>
                    <p>RT Nagar, Bangalore</p>
                    <div className='buttons'>
                        <button>
                            <span>Order Now</span>
                            <ChevronRightIcon style={{fontSize: '18px'}} />
                        </button>
                        <button>
                            <span>View all outlets</span>
                            <ChevronRightIcon style={{fontSize: '18px'}} />
                        </button>
                    </div>
                    <p>Delivery in 21 min</p>
                </div>
            </li>
        </ul>

    </div>
  )
}

export default SearchDropdown