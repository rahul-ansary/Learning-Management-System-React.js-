import './App.css';


import { Route, Routes } from 'react-router-dom';


import HomePage from './Pages/HomePage';
import AboutUs from './Pages/Aboutus';
import NotFound from './Pages/NotFound';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import CourseList from './Pages/Course/courseList';
import Contact from './Pages/Contact';
import Denied from './Pages/Denied';
// import Daisyui from './Components/Daisyui';

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<HomePage />} ></Route>
        <Route path="/about" element={<AboutUs />} ></Route>
        <Route path="/courses" element={<CourseList />} ></Route>
        <Route path="/denied" element={<Denied />} ></Route>

        <Route path="/signup" element={<SignUp />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>


        <Route path="*" element={<NotFound />} ></Route>



      </Routes>
    </>
  )
}
export default App;