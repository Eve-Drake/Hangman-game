import React, { useEffect, useState } from 'react'

interface Props {
    setWord: React.Dispatch<React.SetStateAction<string>>;
    gameOver: boolean;
    setGameOver : React.Dispatch<React.SetStateAction<boolean>>;
}

const GetWord = ({setWord, gameOver, setGameOver} : Props) => {

    const fetchWord = () =>{
        fetch('https://random-word-api.herokuapp.com/word')
        .then((response) => response.json())
        .then((data) =>{
            setWord(data)
        })
        setGameOver(false)
    }

    useEffect(()=>{
        fetchWord();
    },[gameOver]);

    return(
        <></>
    )
}

export default GetWord