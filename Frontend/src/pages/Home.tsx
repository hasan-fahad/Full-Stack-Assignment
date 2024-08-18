import React from 'react';
import Navbar from '../Component/navbar/Navbar';
import Cards from '../Component/cards/cards';
import Footer from '../Component/Footer/Footer';

const Home = () => {
    return (
       <div>
        <Navbar></Navbar>
        <Cards></Cards>
        <Footer></Footer>
       </div>
    );
};

export default Home;