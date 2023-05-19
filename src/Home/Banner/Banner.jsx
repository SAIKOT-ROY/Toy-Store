import React from 'react';

const Banner = () => {
    return (
        <div className='md:flex justify-center gap-5'>
            <div className='w-3/4 md:w-2/4 border mx-auto md:my-auto'>
                <h2 className='text-center mb-5 text-4xl'>Anime Action Figures</h2>
                <p className=''>Gojo Saturo is fictionl character and supporting character of 
                    jujutsu kaisen manga series created by Gege Akutami this character
                    is our highest selling product right now we are currently 
                    out of stock right now soon we will be ready for next shipment
                </p>
            </div>
            <div>
                <img src="/asset/11-pic/banner/gojo-banner.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;