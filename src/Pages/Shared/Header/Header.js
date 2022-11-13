import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assest/logo/logo.svg.jpg'
import { AuthContext } from '../../../context/authprovider/AuthProvider';


const Header = () => {
    const { user } = useContext(AuthContext);
    return (

        <div className="navbar h-20 mb-12 pt-12 bg-base-100">
            <div className="flex-1 ">

                <img className='w-20' src={logo} alt=''></img>

                <Link to='/' className=" text-violet-900 font-bold btn btn-ghost normal-case  text-xl">Food Services</Link>


            </div>

            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">

                    <li><Link to='/' className='font-semibold'>Home</Link></li>


                    {
                        user?.email ?
                            <>
                                <li><Link to='/myreviews' className='font-semibold'>My Reviews</Link></li>
                                <li><Link to='/addservice' className='font-semibold'>Add Service</Link></li>
                                <li><Link to='/myreviews' className='font-semibold'>Log Out</Link></li>



                            </>
                            :
                            <li><Link to='/login' className='font-semibold'>Log in</Link></li>

                    }

                </ul>
            </div>
        </div>
    );
};

export default Header;