import React from 'react';
import logo from '../../../Assest/background.jpg'



const Feature = () => {
    return (
        <div className=" rounded-2xl   m-14 hero min-h-screen" style={{ backgroundImage: `url(https://media.istockphoto.com/id/1056074042/photo/waiter-carrying-two-plates-with-meat-dish-on-some-festive-event.jpg?s=612x612&w=0&k=20&c=m_ce4btX374BQ76C9e8kUOfZTmJLGRm4sp56D1Oi0Zw=)` }}>
            {/* <div className="hero-overlay bg-opacity-60"></div> */}
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Need any help ? Please visit my help section</p>
                    <button className="btn btn-primary">Help Setion</button>
                </div>
            </div>
        </div>
    );
};

export default Feature;