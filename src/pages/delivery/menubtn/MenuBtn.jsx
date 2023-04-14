import './menubtn.scss'
import { menuBtn } from '../../../assets/data'

const MenuBtn = () => {
  return (
    <div className='btnWrap'>
        
            {menuBtn.map((btn) => (
                <button key={btn.id}>{btn.btnImg}<span>{btn.title}</span></button>
            ))}
        
    </div>
  )
}

export default MenuBtn