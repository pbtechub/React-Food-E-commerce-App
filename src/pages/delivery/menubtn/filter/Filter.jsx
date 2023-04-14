import React from 'react'
import './filter.scss'
import { MenuContext } from '../../../../context/menuContext'
import { useContext } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { filterMenu } from '../../../../assets/data';
import { sortByList } from '../../../../assets/data';
import { countryList } from '../../../../assets/counrtyName';
import { ratings } from '../../../../assets/data';
import { useState } from 'react';
import { BorderLeft } from '@mui/icons-material';
import { CiSearch } from 'react-icons/ci'

const Filter = () => {
    const [selectedFilterMenu, setSelectedFilterMenu] = useState(1);
    const [sortedItem, setSortedItem] = useState('Popularity')
    const [rating, setRating] = useState('Any')
    const { category, setCategory } = useContext(MenuContext)
    console.log(category);
  return (
    <div className='filterPage'>
        <div className="top">
            <h3>Filters</h3>
            <CloseIcon onClick={() => setCategory('')} className='closeBtn' />
        </div>
        <div className='middle'>
            <div className="sidebar">
                <ul>
                {filterMenu.map((item, idx) => (
                    <li 
                        key={item.id}
                        onClick={() => setSelectedFilterMenu(item.id)}
                        className={selectedFilterMenu === item.id && 'activeLink'}
                    >
                        <span>{item.title}</span>
                        
                        {idx === 0 && <span className='soretdName'>{sortedItem}</span> }
                    </li>
                ))}
                </ul>
            </div>
            <div className="feed">
                {selectedFilterMenu === 1 && (
                   <form>
                    {sortByList.map((list) => (
                        <div onClick={() => setSortedItem(list.title)}>
                            <input 
                            type="radio" 
                            id={list.id} 
                            name="drone" 
                            value={list.title}
                            
                            className='radio'/>
                            <label for="huey" className='lable'>{list.title}</label>
                      </div>
                    ))}
                   </form>
                )}

                {selectedFilterMenu === 2 && (
                    <div className='counrty'>
                        <div className='search'>
                            <CiSearch style={{fontSize: '25px'}}/>
                            <input type="text" placeholder='Search here'/>
                        </div>

                        <div className='counrtyName'>
                            <ul>
                                {countryList.map((counrty) => (
                                    <li>
                                        <input type="checkbox" name="name" value={counrty} />
                                        <span>{counrty}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    
                )}

                {selectedFilterMenu === 3 && (
                    <div className='ratings'>
                        <div className='showRating'>
                            <span>Ratings</span>
                            <h4>{rating}</h4>
                        </div>
                        <div className='selectRataing'>
                            <div>
                                {ratings.map((rate, idx) => (
                                    <div>
                                        <div className='left'>
                                            <div className="dot"></div>
                                            {idx !== 4 && (

                                            <div className='bar'></div>
                                            )}
                                        </div>
                                        <span>{rate.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                      
                    </div>
                    
                )}
            </div>
        </div>
        <div className="bottom">
            <div></div>
            <div>
                <button>Clear All</button>
                <button>Apply</button>
            </div>
        </div>
    </div>
  )
}

export default Filter