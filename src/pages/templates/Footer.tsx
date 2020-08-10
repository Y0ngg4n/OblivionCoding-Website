import React from "react";
import CookieBanner from 'react-cookie-banner';
function Footer() {

    return (
        <footer>
            <div className="bg-dark-grey p-2 container-fluid">
                <div className="text-center row">
                    <div className="col-5"/>
                    <div className="col-1"><a href="https://blog.oblivioncoding.pro/impressum" className="text-light"
                                              target="_blank" rel="noopener noreferrer">Impressum</a></div>
                    <div className="col-1"><a href="https://blog.oblivioncoding.pro/privacy" className="text-light"
                                              target="_blank" rel="noopener noreferrer">Datenschutz</a></div>
                    <div className="col-5"/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;