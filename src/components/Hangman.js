import React, { useState, useEffect, useCallback } from 'react';
import { randomWord } from './Words.js';

const letterArr = ['a', 'b' , 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const Hangman = function(props){
  const [errorCount, setErrorCount] = useState(0);
  const [guessed, setGuessed] = useState([]);
  const [wordToGuess, setWordToGuess] = useState(randomWord());
  const [gameOver, setGameOver] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  const maxError = 6;

  const wordToGuessStatus = useCallback(() => {
    return wordToGuess.split("").map(letter => (guessed.includes(letter) ? letter : "_ "));
  }, [guessed, wordToGuess])

  const changeSetAndErrorValues = e => {
    let eventLetter = e.target.value
    setGuessed([...guessed, eventLetter])
    wordToGuess.includes(eventLetter) ? setErrorCount(prevErrorCount => prevErrorCount) : setErrorCount(prevErrorCount => prevErrorCount + 1)
  }

  const resetGame = () => {
    setGuessed([])
    setErrorCount(0)
    setWordToGuess(randomWord())
    setGameOver(false)
    setIsWinner(false)
  }

  useEffect(() => {
    (errorCount >= maxError) && setGameOver(true)
  }, [errorCount])

  useEffect(() => {
    (wordToGuessStatus().join('') === wordToGuess) && setIsWinner(true)
  }, [wordToGuessStatus, wordToGuess])

    return (
      <div>
        <h1>Hangman</h1>
        <p>Wrong guesses : {errorCount} / {maxError}</p>
        <h2>Guess the word :</h2>
        <p>{gameOver ? `The word to guess was : ${wordToGuess}` : wordToGuessStatus()}</p>
        <div>
         {  gameOver ? 
              "Dommage, recommence."
            : isWinner ? 
              "Bravo mon grand"
            :
              letterArr.map((letter, index) => 
                <button key={index} onClick={(e) => changeSetAndErrorValues(e)} disabled={guessed.includes(letter)} value={letter}>
                  {letter}
                </button>
              )
         }
        </div>
        <button onClick={resetGame}>Reset Game</button>
      </div>
    )
  }

export default Hangman;


