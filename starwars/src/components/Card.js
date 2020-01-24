import React from "react";
import styled from "styled-components";

const CardWrap = styled.div `
color: black;
background-color: cornflowerblue;
width: 24%;
margin-left: 10%;
border-radius: 50%;
`;

const Card = props => {
    return(
    <CardWrap>
        <h2>Name: {props.Name} </h2>
        <p>Height: {props.Height} </p>
        <p>Eye Color: {props.EyeColor}</p>
        <p>Birth Year: {props.BirthYear}</p>
    </CardWrap>
    )
}
export default Card;