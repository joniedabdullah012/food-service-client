import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';
import ServicesCard from '../servicesCard/servicesCard';

const Services = () => {
    useTitle('All-service')
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://food-services-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    })
    return (
        <div className='text-center'>
            <p className="text-3xl font-bold text-violet- p-5 ">Services</p>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)

                }
            </div>






        </div>
    );
};

export default Services;