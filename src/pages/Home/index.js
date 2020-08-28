import React from 'react';
import Banner from '../../components/organism/Banner';
import Gallery from '../../components/organism/Gallery';
import StayInTouch from '../../components/organism/StayInTouch';
import FromOurBlog from '../../components/organism/FromOurBlog';

const Home = () => {
    return(
        <>
            <Banner />
            <Gallery />
            <StayInTouch />
            <FromOurBlog />
        </>
    );
}

export default Home;