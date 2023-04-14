import './category.scss'
import { useState } from 'react'
import {categories} from '../../assets/data'
import { NavLink, Link, Router } from 'react-router-dom'

const Category = () => {

const [selectedCategory, setSelectedCategory] = useState('')

console.log(selectedCategory);


  return (
    <div className='categoryWrap'>
        <div className='category'>
          
              
              {categories.map((category) => (
                    
                        <NavLink 
                            to={`/${category.path}`}
                            className='eachCategory' 
                            key={category.id}
                            onClick={()=> setSelectedCategory(category.title)}
                            style={{borderBottom: category.title === selectedCategory ? '2px solid rgb(233, 136, 136)' : '' }}>

                              
                            <div style={{backgroundColor: category.title === selectedCategory ? '#f5f5dc' : '#e0e0e0' }}>
                                <img 
                                    src={category.cateImg} alt="" 
                                    />
                            </div>
                            <h1 style={{color: category.title === selectedCategory ? 'rgb(233, 136, 136)' : 'grey' }}>{category.title}</h1>    
                    </NavLink>
                      
                ))}
              
          
        </div>
    </div>
  )
}

export default Category