import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Home = () => {

    const [characters, setCharacters] = useState(null);

    useEffect(() => {
        getCharacters("https://rickandmortyapi.com/api/character")
    }, [])

    const getCharacters = (url) => {
        fetch(url)
            .then(response => response.json()) //respuesta
            .then(data => setCharacters(data)) //datos
            .catch(error => console.log(error)) //error
    }

    const navigate = useNavigate();
    return (
        <div>
            <h1>I am the home</h1>
            <ul>
                <li>
                    <Link to="/pony/2">Go to pony 2 (normal Link)</Link>
                </li>
                <li>
                    <button onClick={() => navigate("/pony/3")}>
                        Go to pony 3 (history.push)
                    </button>
                </li>
            </ul>
            <ul>
                {
                    !!characters &&
                    characters.results.map((character) => {
                        return <li key={character.id}>{character.name} <Link to={`/details/${character.id}`}>See details</Link></li>
                    })
                }
            </ul>
        </div>
    );
};

export default Home;