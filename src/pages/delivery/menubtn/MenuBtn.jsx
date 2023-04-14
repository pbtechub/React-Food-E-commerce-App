import './menubtn.scss'
import { menuBtn } from '../../../assets/data'
import { MenuContext } from '../../../context/menuContext'
import { useContext } from 'react'

const MenuBtn = () => {
  const { handleSelectedCat } = useContext(MenuContext)
 

  const handleMenuOptions = (selectedCat) => {
    handleSelectedCat(selectedCat)
  }

  return (
    <div className='btnWrap'>
        
            {menuBtn.map((btn) => (
                <button 
                  key={btn.id}
                  onClick={() => handleMenuOptions(btn.title)}
                  >
                    {btn.btnImg}
                    <span>{btn.title}</span>
                </button>
            ))}
            
    </div>
  )
}

export default MenuBtn