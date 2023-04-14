import './footer.scss'
import { MdOutlineLanguage } from 'react-icons/md'
import { BsFillFlagFill } from 'react-icons/bs'
import {FiChevronDown} from 'react-icons/fi'
import { footers } from '../../assets/data'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footTop'>
        <div className="footLog">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Zomato_Logo.svg" alt="zomato" srcset="" />
        </div>
        <div className='footBtn'>
          <button>
            <BsFillFlagFill className='footIcon'/>
            <span>India</span>
            <FiChevronDown className='footIcon'/>
          </button>
          <button>
            <MdOutlineLanguage className='footIcon'/>
            <span>English</span>
            <FiChevronDown className='footIcon'/>
          </button>
        </div>
      </div>
      <div className='footMid'>
        <div className='footMidWrap'>
          {footers.map((footer, index) => (
            <div key={index}>
              <h4 >{footer.title}</h4>
              <ul className={`${footer.id === footers.length ? 'footListSocial' : 'footList'}`} >
                {footer.subTit.map((subFoot, idx) => (
                      <li key={idx} className={`${footer.id === footers.length ? 'footLinkSocial' : ''}`}>
                        <a href="http://" target="_blank" className={`${footer.id === footers.length ? 'footLink' : ''}`}>{subFoot}</a> 
                      </li>
                ))}
              </ul>
              
            </div>
          ))}
        </div>
        <div></div>
      </div>
      <div className='footerBot'>
        <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties 
          of their respective owners. 2008-2023 © Zomato™ Ltd. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer