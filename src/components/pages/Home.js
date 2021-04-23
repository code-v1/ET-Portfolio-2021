import React from 'react';
import '../../App.css'
import Cards from '../Cards';
import Hero from '../Hero'
import Footer from '../Footer';
import Card1 from '../pages/Card1'

function Home() {
    return (
        <>
            <Hero />
            <Card1 />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;