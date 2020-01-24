import React, { useState, useEffect } from "react";
import Card from "./Card"

import axios from "axios";
import styled from "styled-components";

function CharacterList(){
    const [characters, setCharacters] = useState([]);
    useState(() => {
        axios.get("https://swapi.co/api/people/")
        .then(res => {
            console.log(res);
            setCharacters(res.data.results);
        })
        .catch(err => {
            console.log(`This is not your data`, err);
        })
    }, []);
    return (
        <div>
            {characters.map(character => {
                return (
                    <Card
                    key={character.url}
                    Name={character.name}
                    Height={character.height}
                    BirthYear={character.birth_year}
                    EyeColor={character.eye_color}
                    />
                );
                    
            })}
        </div>
    )
}

export default CharacterList;