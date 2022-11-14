import React from 'react';
import logo from '../../../Assest/Banner/feature.jpg'

const FeatureSection = () => {
    return (
        <div className=" m-6 hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={logo} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Box Office Service</h1>
                    <p className="py-6">Take orders, track sales, generate bills, manage inventory and financials of your restaurant or retail shop with Quickly Services. Try FREE for 1 month!</p>

                </div>
            </div>
        </div>
    );
};

export default FeatureSection;
