import React from 'react';
import Navbar from "./templates/Navbar";
import Footer from "./templates/Footer";

import WidgetBot from '@widgetbot/react-embed'
import joinDiscord from './images/community/join_discord.png'

// Import CSS
import '../style/build/community.css';


function Community() {
    const navigation = Navbar(1)
    const width = window.innerWidth / 1.02;
    const height = window.innerHeight / 1.75;
    return (
        <div>
            {navigation}
            <main>
                <div className="bg-primary p-3">
                    <h2 className="text-center text-light">Triff dich mit uns auf Discord und Matrix</h2>
                </div>


                <ul className="nav nav-tabs nav-justified bg-dark" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link bg-dark-grey text-light" id="home-tab" data-toggle="tab" href="#discord"
                           role="tab"
                           aria-controls="home" aria-selected="true">Discord</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link bg-dark-grey text-light" id="profile-tab" data-toggle="tab"
                           href="#matrix"
                           role="tab"
                           aria-controls="profile" aria-selected="false">Matrix</a>
                    </li>
                </ul>
                <div className="tab-content bg-dark" id="myTabContent">
                    <div className="tab-pane fade show active bg-dark" id="discord" role="tabpanel"
                         aria-labelledby="home-tab">
                        <WidgetBot
                            server="671454884536647710"
                            channel="671464699979759636"
                            height={height}
                            width={width}
                        />
                        <a href="https://discord.gg/bexrjyQ" target="_blank" rel="noopener noreferrer" className="m-5">
                            <img src={joinDiscord} className="mt-4 join-discord-image" alt="join discord"/>
                        </a>
                    </div>
                    <div className="tab-pane fade bg-dark text-light" id="matrix" role="tabpanel"
                         aria-labelledby="profile-tab">
                        <h1 className="p-4 text-center">Wie verbinde ich mich?</h1>
                        <div className="container">
                            <ul className="matrix-list">
                                <li>Geh zu <a href="https://riot.oblivioncoding.pro">riot.oblivioncoding.pro</a> oder
                                    zu <a
                                        href="https://roit.im/app">riot.im</a></li>
                                <li>Klicke auf Account erstellen</li>
                                <li>Wähle Erweitert oder Andere um einen angepassten Server einzutragen</li>
                                <li>Gib folgende Adresse in das Feld mit der Heimserver-Adresse ein: <a
                                    href="https://synpase.oblivioncoding.pro">https://synpase.oblivioncoding.pro</a>
                                </li>
                                <li>Vergib einen Benutzernamen und ein Passwort (und bestätige es)
                                    und gib optional eine Email Adresse ein
                                </li>
                                <li>Solltest du keine Email Addresse eingegeben haben, drücke auf fortfahren</li>
                                <li>Vergib ein Verschlüssellungspassphrase (Nicht dein Passwort!)</li>
                                <li>Speicher dir den Wiederherstellungskey ab</li>
                                <li>Drücke auf Erkunden um die Räume des Servers zu erkunden</li>
                                <li>Tritt unserer Community bei <a
                                    href="https://riot.oblivioncoding.pro/#/group/+oblivioncoding:oblivioncoding.pro">https://riot.oblivioncoding.pro/#/group/+oblivioncoding:oblivioncoding.pro</a>
                                </li>
                            </ul>
                        </div>
                        <h2 className="text-center pb-5 ">Eine detailiertere Anleitung findest du auf <a
                            href="https://matrix.org/">Matrix.org</a> oder <a href="https://riot.im">Riot.im</a> bzw. <a
                            href="https://element.io">element.io</a></h2>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default Community;
