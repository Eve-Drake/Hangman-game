import { useEffect, useState } from 'react'
import Alphabet from './components/Alphabet'
import GetWord from './components/GetWord'
import './index.css'

function App() {
  const [word, setWord] = useState<string>('');
  const [guesses, setGuesses] = useState<string[]>([]);
  const [gameOver, setGameOver] = useState<boolean>(false)
  
  const [wordArray, setWordArray] = useState<string[]>([])

  useEffect(()=>{
    setWordArray([...word])
  },[word])
  
  return (
    <>
    {wordArray.map((char, index) =>(
      <p key={index}>{char}</p>
    ))}
      <GetWord 
        setWord={setWord} 
        gameOver={gameOver} 
        setGameOver={setGameOver}
      />
      
      <Alphabet 
        gameOver={gameOver} 
        setGameOver={setGameOver} 
        word={word} 
        guesses={guesses} 
        setGuesses={setGuesses}
      />
    </>
  )
}

export default App
