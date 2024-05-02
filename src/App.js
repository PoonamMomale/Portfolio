import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/pages/Home';
import Services from './Components/pages/Services';
import SignUp from './Components/pages/SignUp';
import Products from './Components/pages/Products';

function App() {
  return (
    <>
      <Router>
         <Navbar/>
          <Routes>
               <Route path='/' exact element={<Home/>} />
               <Route path='/services' element={<Services/>} />
               <Route path='/sign-up' element={<SignUp/>} />
               <Route path='/products' element={<Products/>} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
