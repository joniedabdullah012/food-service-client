import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">

                <Link to='/' className="btn btn-ghost normal-case text-xl">Food Services</Link>

            </div>

            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><a>Home</a></li>
                    <li tabIndex={0}>
                        <a>
                            Parent

                        </a>

                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;