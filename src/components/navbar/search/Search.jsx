import './search.scss'
// import {FiSearch} from '../../../assets/data'
import { FiSearch } from 'react-icons/fi'
import { HiLocationMarker} from 'react-icons/hi'
import { BsChevronDown } from 'react-icons/bs'
import { useState } from 'react'
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import { IoChevronDownCircle } from 'react-icons/io'

const Search = () => {
  const [locationHistory, setLocationHistory] = useState(false)
  return (
    <div className='searchBar'>
        <div className="currLocation">
            <div>
                <HiLocationMarker size={23} className='locIcon'/>
                <h4>Bangaluru</h4>
            </div>
            <BsChevronDown className={locationHistory ? 'cheveronActive cheveron': 'cheveron'} onClick={()=> setLocationHistory(!locationHistory)}/>
        </div>
       
        <div className="divider"></div>
        <div className="searchItems">
            <FiSearch size={23} className='searchIcon'/>
            <input type="text" placeholder='Search for restaurant, cuisine or a dish...' />
        </div>
        {locationHistory && (
        <div className="locationMenu">
          <div className="detectCurrLocation">
              <GpsFixedIcon style={{fontSize: '20px', color: 'rgb(220, 114, 114)' }}/>
              <div>
                <h4>Detect current location</h4>
                <span>Using GPS</span>
              </div>
          </div>
         

          <div className="recentLocation">
            <h4>Recent Locations</h4>
            <ul>
              <li>
                <AccessTimeIcon style={{fontSize: '20px', color: '#424141' }}/>
                <p>Bangalore Baptist Hospital, India</p>
              </li>
              <li>
                <AccessTimeIcon style={{fontSize: '20px', color: '#424141' }}/>
                <p>Bangalore Baptist Hospital, India</p>
              </li>
              <li>
                <AccessTimeIcon style={{fontSize: '20px', color: '#424141' }}/>
                <p>Bangalore Baptist Hospital, India</p>
              </li>
             
            </ul>

          </div>
         
        </div>
        )}
    </div>
  )
}

export default Search