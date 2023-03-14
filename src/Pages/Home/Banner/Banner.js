import React from 'react';
import logo1 from '../../../Assest/Banner/bannerIMG1.svg.jpg';
import logo2 from '../../../Assest/Banner/bannnerTMG2.svg.jpg';


const Banner = () => {
    return (
        <div>
            <div className="carousel rounded-2xl m-10 h-80">
                <div id="item1" className="carousel-item w-full">
                    <img alt='' src={logo1} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img alt='' src={logo2} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img alt='' src={logo1} className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img alt='' src={logo2} className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>

        </div>
    );
};

export default Banner;