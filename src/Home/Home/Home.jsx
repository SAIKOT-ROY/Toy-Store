import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import TabsSec from '../TabsSec/TabsSec';
import Features from '../Features/Features';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <TabsSec></TabsSec>
            <Features></Features>
        </div>
    );
};

export default Home;