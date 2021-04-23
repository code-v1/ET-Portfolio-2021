import React from 'react';
import '../../App.css'
import Cards from '../Cards';
import Hero from '../Hero'
import Footer from '../Footer';
import Cards2 from '../Cards2'
import ContactForm from '../Contact-form'

function Home() {
    return (
        <>
            <Hero />
            
            <Cards2 />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;