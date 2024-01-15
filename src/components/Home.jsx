/* eslint-disable no-unused-vars */
import React from 'react';
import About from './About';
import Metrics from './Metrics';
import Blog from './Blog';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';

const Home = () => {

    return (
        <div className=''>
            {/* <Navbar  /> */}
            <Hero />
            <About />
            <Metrics />
            <Blog />
            <Footer />
        </div>
    );
};

export default Home;
