import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Services from '../../Shared/services/Services';
import Banner from '../Banner/Banner';
import Feature from '../feature/Feature';
import FeatureSection from '../FeaturesSection/FeatureSection';
import HomeServices from './HomeServices/HomeServices';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <FeatureSection></FeatureSection>

            <Feature></Feature>



        </div>
    );
};

export default Home;