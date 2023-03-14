import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServicesCard = ({ service }) => {

    const { img, description, _id, price, title } = service;
    return (



        <div className="card  bg-base-100 shadow-xl">

            <PhotoProvider>
                <figure>
                    <PhotoView src={img}>
                        <img className='rounded-2xl w-64 h-32' src={img} alt="Shoes" />

                    </PhotoView>

                </figure>


            </PhotoProvider>


            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h2 className="card-title">Price: {price}</h2>
                <p>{description.slice(0, 100) + '....Readmore'}</p>
                <div className="card-actions justify-end">
                    <Link to={`/reviews/${_id}`} >
                        <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;