import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assest/logo/logo.svg.jpg'


const Header = () => {
    return (
        <div className="navbar h-20 mb-12 pt-12 bg-base-100">
            <div className="flex-1 ">

                <img className='w-20' src={logo} alt=''></img>

                <Link to='/' className="btn btn-ghost normal-case text-xl">Food Services</Link>


            </div>

            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><a href='/' className='font-semibold'>Home</a></li>
                    <li>
                        <a href='/' className='font-semibold'>
                            Parent

                        </a>

                    </li>
                    <li><a href='/' className='font-semibold'>Item 3</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;