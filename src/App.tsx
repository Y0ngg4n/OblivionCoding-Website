import React from 'react';
import './style/build/main.css';


// import Router
import {Route} from "react-router-dom";

// Import Pages
import Home from "./pages/Home";
import Community from "./pages/Community";
import Projects from "./pages/Projects";
import Games from "./pages/Games";

function App() {
    return (
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/community" component={Community}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/games" component={Games}/>
        </div>
    );
}

export default App;
