import React from 'react';
import Banner from '../../components/organism/Banner';
import Gallery from '../../components/organism/Gallery';
import StayInTouch from '../../components/organism/StayInTouch';
import FromOurBlog from '../../components/organism/FromOurBlog';
import Footer from '../../components/organism/Footer';

const Home = () => {
    return(
        <>
            <Banner />
            <Gallery />
            <StayInTouch />
            <FromOurBlog />
            <Footer />
        </>
    );
}

export default Home;