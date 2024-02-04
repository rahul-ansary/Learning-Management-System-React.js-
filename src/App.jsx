import './App.css';


import { Route, Routes } from 'react-router-dom';


import HomePage from './Pages/HomePage';
import AboutUs from './Pages/Aboutus';
import NotFound from './Pages/NotFound';
import SignUp from './Pages/SignUp';
// import Daisyui from './Components/Daisyui';

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<HomePage />} ></Route>
        <Route path="/about" element={<AboutUs />} ></Route>
        <Route path="/signup" element={<SignUp />} ></Route>


        <Route path="*" element={<NotFound />} ></Route>



      </Routes>
    </>
  )
}
export default App;