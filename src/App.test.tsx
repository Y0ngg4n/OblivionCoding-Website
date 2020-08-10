import React from 'react';
import { render } from '@testing-library/react';
import Navbar from "./pages/templates/Navbar";
import {BrowserRouter} from "react-router-dom";
const pages = 3

test('Navbar', () => {
    // for (var i = 0; i < pages; i++) {
        var navbar = Navbar(0)
        const {getByText} = render(<BrowserRouter>{navbar}</BrowserRouter>);
        const homelink = getByText(/OblivionCoding/);
        const communitylink = getByText(/Community/);
        const gameslink = getByText(/Games/);
        const projectslink = getByText(/Projekte/);
        expect(homelink).toBeInTheDocument();
        expect(communitylink).toBeInTheDocument();
        expect(gameslink).toBeInTheDocument();
        expect(projectslink).toBeInTheDocument();
        console.log(homelink.toString())

    // }
});
