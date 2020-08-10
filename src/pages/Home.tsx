import React from 'react';

import Navbar from "./templates/Navbar";
import Footer from "./templates/Footer";

// Import CSS
import '../style/build/home.css';

import typingImage from './images/home/typing.jpg'
import {Link} from "react-router-dom";

function Home() {
    const navigation = Navbar(0)
    return (
        <div>
            {navigation}
            <main>
                <img className="cover-image" src={typingImage} alt="Cover"/>
                <h1 className="cover-title">OblivionCoding</h1>
                <h2 className="cover-title-2">Es gibt ein Zuhause für Coding und Gaming</h2>
                <button className="btn btn-outline-danger join-community">
                    <Link to="/community" className="text-light text-decoration-none">Community beitreten</Link>
                </button>
            </main>
            <Footer/>
        </div>
    );
}

export default Home;
