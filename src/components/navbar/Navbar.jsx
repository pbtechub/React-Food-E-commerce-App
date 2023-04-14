import './navbar.scss';
import Search from './search/Search';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navLeft'>
        <div className="navLog">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Zomato_Logo.svg" alt="zomato" srcset="" />
        </div>
        <div className='search'>
          <Search />
        </div>
      </div>
      <div className="navRight">
        <button className="navBtn login">Log in</button>
        <button className="navBtn signup">Sign up</button>
      </div>
    </div>
  )
}

export default Navbar