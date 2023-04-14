import index from './index.css';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Location from './components/location/Location';
import Category from './components/3category/Category';
import Delivery from './pages/delivery/Delivery';
import DinningOut from './pages/dinningout/DinningOut';
import NightLife from './pages/nightLife/NightLife';

import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Location />
        <Category />
          <Routes>
            <Route path='/delivery' element={<Delivery />} />
            <Route path='/dinningout' element={<DinningOut />} />
            <Route path='/nightlife' element={<NightLife />} />  
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
