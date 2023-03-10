import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from '../../../Shared/servicesCard/servicesCard';

const HomeServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://food-services-server.vercel.app/homeservices')
            .then(res => res.json())
            .then(data => setServices(data))
    })
    return (
        <div className='text-center'>
            <p className="text-3xl font-bold text-orange-600 p-5 ">Services</p>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)

                }
            </div>

            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg m-6">

                <Link to='/services'>See All Services</Link>
            </button>




        </div>
    );

};

export default HomeServices;