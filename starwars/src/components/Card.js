import React from "react";
import styled from "styled-components";

const Card = props => {
    // eslint-disable-next-line no-unused-expressions
    return(
    <div>
        <h2>Name: {props.Name} </h2>
        <p>Height: {props.Height} </p>
        <p>Eye Color: {props.EyeColor}</p>
        <p>Birth Year: {props.BirthYear}</p>
    </div>
    )
}
export default Card;