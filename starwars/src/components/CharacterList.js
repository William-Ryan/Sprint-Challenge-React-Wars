import React, { useState, useEffect } from "react";
import Card from "./Card"

import axios from "axios";
import styled from "styled-components";

const BodyWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 0% 10% 0% 0%;
`;

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
        <BodyWrapper>
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
        </BodyWrapper>
    )
}

export default CharacterList;