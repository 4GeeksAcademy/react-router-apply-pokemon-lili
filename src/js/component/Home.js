import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Pokemon from './Pokemon';

const Home = () => {

    const navigate = useNavigate();
    return (
        <div>
            <h1>I am the home</h1>
            <ul>
                <li>
                    <Link to="/pokemon/2">Go to pokemon 2 (normal Link)</Link>
                </li>
                <li>
                    <button onClick={() => navigate("/pokemon/3")}>
                        Go to pokemon 3 (history.push)
                    </button>
                </li>
                <li>
                    <Link to="/pokemon/">Go to pokemon list (normal Link)</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;