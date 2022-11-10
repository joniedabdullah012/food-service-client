import React, { useEffect, useState } from 'react';
import ServicesCard from '../servicesCard/servicesCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setServices(data))
    })
    return (
        <div className='text-center'>
            <p className="text-3xl font-bold text-violet-400 ">Services</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

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