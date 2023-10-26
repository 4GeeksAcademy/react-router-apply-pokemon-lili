import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Pokemon = () => {
    const [characters, setCharacters] = useState(null);

    useEffect(() => {
        getCharacters("https://pokeapi.co/api/v2/pokemon/")
    }, [])

    const getCharacters = (url) => {
        fetch(url)
            .then(response => response.json()) //respuesta
            .then(data => setCharacters(data)) //datos
            .catch(error => console.log(error)) //error
    }

    return (
        <div>
            <ul>
                {
                    !!characters &&
                    characters.results.map((character) => {
                        return <li key={character.id}>{character.name} <Link to={`/details/${character.id}`}>See details</Link></li>
                    })
                }
            </ul>
        </div>
    )
}

export default Pokemon;