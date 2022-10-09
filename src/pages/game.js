import React, {useState} from "react";
import styled from 'styled-components'
import Player from "../components/player";
import Square from "../components/square";

export default function Game() {
    let arr = [];
    let Y = 20;
    for(let i = 1; i <=40; i++){
        arr.push({X: i, Y});
        console.log(arr);
        if(i%40 === 0){
         Y--;
         if(Y>=1){
            i=0;
         }   
        }
    }

    return (
        <>
            <GameScreen>
                <Player/>
                {arr.map((num, index) => <Square key = {index} X = {num.X} Y = {num.Y}/>)}
            </GameScreen>
        </>
    );
}

const GameScreen = styled.div`
    width 1440px;
    height: 720px;
    margin: auto;
    margin-top: 10vh;
    background-color: red;
    position: relative;
    display: flex;
    flex-wrap: wrap;
`;