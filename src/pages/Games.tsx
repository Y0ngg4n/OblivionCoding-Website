import React from 'react';

import Navbar from "./templates/Navbar";
import Footer from "./templates/Footer";

// Import CSS
import '../style/build/home.css';

import war_thunder_1 from "../pages/images/games/war-thunder-1.jpg"
import will_to_live_online from "../pages/images/games/will-to-live-online-1.jpg"


function Games() {
    const navigation = Navbar(3)
    return (
        <div>
            {navigation}
            <main>
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"/>
                        <li data-target="#myCarousel" data-slide-to="1"/>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="first-slide w-100"
                                 src={war_thunder_1}
                                 alt="War Thunder"/>
                            <div className="container">
                                <div className="carousel-caption">
                                    <h1>War Thunder</h1>
                                    <p>War Thunder is the most comprehensive free-to-play, cross-platform, MMO military
                                        game for Windows, Linux, Mac and PlayStation®4 dedicated to aviation, armoured
                                        vehicles, and naval craft from World War II and the Cold War.</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="second-slide w-100"
                                 src={will_to_live_online}
                                 alt="Second slide"/>
                            <div className="container">
                                <div className="carousel-caption">
                                    <h1>Will to live online</h1>
                                    <p>Will To Live is a MMORPG-shooter whose action takes place in a severe
                                        post-apocalyptic world. Explore the world, engage in fights with mutants and
                                        other survivors, join the clans in the struggle for existence and prove your
                                        right to Live.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default Games;
