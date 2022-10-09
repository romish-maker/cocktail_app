import React from 'react';
import './App.css'
import { MainRoutes } from "./modules/common/router";
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <MainRoutes/>
        </Router>
    );
};

export default App;