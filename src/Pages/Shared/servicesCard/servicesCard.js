import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {

    const { img, description, _id, title } = service;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img className='w-64 h-32' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(0, 100) + '....Readmore'}</p>
                <div className="card-actions justify-end">
                    <Link to='/'>
                        <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;