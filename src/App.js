import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from ".//components/Home/Home";
import Result from './components/Result/Result';
import Booking from './components/Booking/Booking';

function App() {
  return (
    
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/result" element={<Result/>}/>
            <Route path="/booking" element={<Booking/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;