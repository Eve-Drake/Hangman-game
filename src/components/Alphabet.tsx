import React, { useEffect, useState } from 'react'

interface Props{
    gameOver: boolean;
    setGameOver : React.Dispatch<React.SetStateAction<boolean>>;
    word: string
    guesses: string[];
    setGuesses: React.Dispatch<React.SetStateAction<string[]>>;
}

const Alphabet = ({gameOver, setGameOver, word, guesses, setGuesses}:Props) => {
    
    const [strikes, setStrikes] = useState<number>(10);
    
    const handleClick  = (value : string) =>{
        setStrikes(strikes - 1);
        if(strikes === 0){
            setGameOver(true)
        }
    }

    useEffect(()=>{
        setStrikes(10)
    }, [gameOver])

  return (
    <>
    {strikes}

    <div className='alphabet-container'>
        <button onClick={()=>handleClick('a')}>a</button>
        <button onClick={()=>handleClick('b')}>b</button>
        <button onClick={()=>handleClick('c')}>c</button>
        <button onClick={()=>handleClick('d')}>d</button>
        <button onClick={()=>handleClick('e')}>e</button>
        <button onClick={()=>handleClick('f')}>f</button>
        <button onClick={()=>handleClick('g')}>g</button>
        <button onClick={()=>handleClick('h')}>h</button>
        <button onClick={()=>handleClick('i')}>i</button>
        <button onClick={()=>handleClick('j')}>j</button>
        <button onClick={()=>handleClick('k')}>k</button>
        <button onClick={()=>handleClick('l')}>l</button>
        <button onClick={()=>handleClick('m')}>m</button>
        <button onClick={()=>handleClick('n')}>n</button>
        <button onClick={()=>handleClick('o')}>o</button>
        <button onClick={()=>handleClick('p')}>p</button>
        <button onClick={()=>handleClick('q')}>q</button>
        <button onClick={()=>handleClick('r')}>r</button>
        <button onClick={()=>handleClick('s')}>s</button>
        <button onClick={()=>handleClick('t')}>t</button>
        <button onClick={()=>handleClick('u')}>u</button>
        <button onClick={()=>handleClick('v')}>v</button>
        <button onClick={()=>handleClick('w')}>w</button>
        <button onClick={()=>handleClick('x')}>x</button>
        <button onClick={()=>handleClick('y')}>y</button>
        <button onClick={()=>handleClick('z')}>z</button>
    </div>
    </>
  )
}

export default Alphabet