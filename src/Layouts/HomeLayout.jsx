import { AiFillCloseCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';

import Footer from '../Components/Footer'
import { useDispatch, useSelector } from "react-redux";

function HomeLayout({ children }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    //for checking if user is logged in
    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn)

    //for dislaying the options according to the role 
    const role = useSelector((state) => state?.auth?.role)

    function changeWidth() {
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = 'auto';
    }
    function hideDrawer() {
        const element = document.getElementsByClassName("drawer-toggle");
        element[0].checked = false;

        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = '0';
    }
    function handleLogout(e){
        e.preventDefault();
        // const res = await dispatch(logout());
        //if(res?.payload?.succes)
        navigate("/");
    }
    return (
        <div className="min-h-[90vh] bg-gray-900">
            <div className="drawer absolute left-0 z-50 w-fit ">
                <input className="drawer-toggle" id="my-drawer" type="checkbox" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="cursor-pointer relative ">
                        <FiMenu
                            onClick={changeWidth}
                            size={"32px"}
                            className="font-bold text-white m-4"
                        /></label>
                </div>
                <div className="drawer-side w-0 bg-transparent">
                    <label htmlFor="my-drawer" className="drawer-overlay "></label>
                    <ul className="menu h-[100%] p-4 w-48 sm:w-80 bg-gray-900 relative text-white">
                        <li className="w-fit absolute right-2 z-50 ">
                            <button onClick={hideDrawer}>
                                <AiFillCloseCircle size={24} />
                            </button>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {isLoggedIn && role === 'ADMIN' && (
                            <li>
                                <Link to="/admin/dashboard">Admin Dashboard</Link>
                            </li>
                        )}

                        <li>
                            <Link to="/courses">All Courses</Link>
                        </li>

                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>

                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        {!isLoggedIn && (
                            <li className="absolute bottom-4 w-[90%]">
                            <div className="w-full flex items-center justify-center">
                                <button className="text-white bg-indigo-700 hover:bg-indigo-900 font-semibold rounded-md text-sm px-4 py-1 w-full dark:bg-indigo-600 dark:hover:bg-indigo-900 focus:outline-none dark:focus:ring-indigo-900">
                                <Link to="/login">Login</Link>
                                </button>
                                 <button className="text-white bg-pink-500 hover:bg-pink-700 font-semibold rounded-md text-sm px-4 py-1 w-full dark:bg-pink-600 dark:hover:bg-pink-900 focus:outline-none dark:focus:ring-pink-900">
                                <Link to="/login">Signup</Link>
                                </button>
                            </div>
                            </li>
                        )}
                         {isLoggedIn && (
                            <li className="absolute bottom-4 w-[90%]">
                            <div className="w-full flex items-center justify-center">
                                <button className="text-white bg-indigo-700 hover:bg-indigo-900 font-semibold rounded-md text-sm px-4 py-1 w-full dark:bg-indigo-600 dark:hover:bg-indigo-900 focus:outline-none dark:focus:ring-indigo-900">
                                <Link to="/user/profile">Profile</Link>
                                </button>
                                 <button className="text-white bg-pink-500 hover:bg-pink-700 font-semibold rounded-md text-sm px-4 py-1 w-full dark:bg-pink-600 dark:hover:bg-pink-900 focus:outline-none dark:focus:ring-pink-900">
                                <Link onClick={handleLogout}>Logout</Link>
                                </button>
                            </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            {children}
            <Footer />
        </div>
    )
}
export default HomeLayout;