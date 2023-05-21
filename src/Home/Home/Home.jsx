import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import TabsSec from '../TabsSec/TabsSec';
import Features from '../Features/Features';
import Stat from '../Stat/Stat';
import useTitle from '../../Hook/useTitle';

const Home = () => {
    useTitle('Ani Toys')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <TabsSec></TabsSec>
            <Features></Features>
            <Stat></Stat>
        </div>
    );
};

export default Home;