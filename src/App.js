import index from './index.css';
import './style.scss'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Location from './components/location/Location';
import Category from './components/3category/Category';
import Delivery from './pages/delivery/Delivery';
import DinningOut from './pages/dinningout/DinningOut';
import NightLife from './pages/nightLife/NightLife';
import Filter from './pages/delivery/menubtn/filter/Filter';
import { MenuContext } from './context/menuContext.js'
import { useContext } from 'react'

import Footer from './components/footer/Footer';


function App() {

  const { category } = useContext(MenuContext)

  console.log(category);

  return (
    <div className='App' >
      <BrowserRouter>
        <Navbar />
        <Location />
        <Category />
          <Routes>
            <Route path='/delivery' element={<Delivery />} />
            <Route path='/dinningout' element={<DinningOut />} />
            <Route path='/nightlife' element={<NightLife />} />  
          </Routes>
          {category === 'Filters' && (
            <div className='filterContainer'>
              <Filter />
            </div>
          )}
        <Footer />
      </BrowserRouter>
      {category === 'Filters' && (
        <div className='FilterOn'></div>
          )}
    </div>
  );
}

export default App;
