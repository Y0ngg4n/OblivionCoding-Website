import React from 'react';
import Navbar from "./templates/Navbar";
import Footer from "./templates/Footer";

function Projects() {
    const navigation = Navbar(2)
    return (
        <div>
            {navigation}
            <main className="bg-dark text-center text-light p-4">
                <h1 className="pb-4">Wo finde ich eure Projekte?</h1>
                <h3>Die meisten Projekte findest du auf GitHub.<br/>
                    Jedoch haben wir nicht immer eine Open Source Code Base <br/>
                    und viele Projekte sind auf unserem eigenen Git gehostet<br/>
                    Schau doch einfach mal bei meinem Github Account vorbei: <a
                        href="https://github.com/Y0ngg4n">Y0ngg4n</a><br/><br/>
                    Die Dokumentation für die Projekte findest du auf unserem <a
                        href="https://blog.oblivioncoding.pro">Blog</a><br/><br/>
                    Wenn du bei einem Projekt mitwirken möchtest,<br/>
                    triff uns doch einfach auf unserem Discord oder unserem Matrix Server.<br/>
                </h3>
            </main>
            <Footer/>
        </div>
    );
}

export default Projects;
