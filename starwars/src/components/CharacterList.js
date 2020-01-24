import React, { useState, useEffect } from "react";
import Header from "./Header"

import axios from "axios";

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
                return console.log(character);
                    
            })}
        </div>
    )
}

export default CharacterList;