import React, { useState, useEffect, useCallback } from 'react';

import { randomWord } from './Words';
import { letterArr } from './Alphabet';

// Styled-components
import { FlexBox } from '../styled_components/FlexBox';
import { Title } from '../styled_components/Title';
import { Subtitle } from '../styled_components/Subtitle';
import { KeyboardContainer } from '../styled_components/KeyboardContainer';
import { KeyboardBtn } from '../styled_components/KeyboardBtn';
import { ResetButton } from '../styled_components/ResetButton';
import { ResultBox } from '../styled_components/ResultBox';


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

  const keyPressed = useCallback((e) => {
    let eventLetter = e.key
    setGuessed([...guessed, eventLetter])
    wordToGuess.includes(eventLetter) ? setErrorCount(prevErrorCount => prevErrorCount) : setErrorCount(prevErrorCount => prevErrorCount + 1)
  }, [guessed, wordToGuess])

  const resetGame = () => {
    setGuessed([])
    setErrorCount(0)
    setWordToGuess(randomWord())
    setGameOver(false)
    setIsWinner(false)
  }

  useEffect(() => {
    document.addEventListener('keydown', keyPressed);
    return () => document.removeEventListener('keydown', keyPressed);
  }, [keyPressed])

  useEffect(() => {
    (errorCount >= maxError) && setGameOver(true)
  }, [errorCount])

  useEffect(() => {
    (wordToGuessStatus().join('') === wordToGuess) && setIsWinner(true)
  }, [wordToGuessStatus, wordToGuess])

  return (
    <div>
      <Title>Hangman</Title>
      <p>Wrong guesses : {errorCount} / {maxError}</p>
      <Subtitle>Guess the word :</Subtitle>
      <p>{gameOver ? `The word to guess was : ${wordToGuess}` : wordToGuessStatus()}</p>
      <FlexBox direction="row" justify="center" align="center">
        {<KeyboardContainer>
          {gameOver ? 
            <ResultBox><Subtitle>Unfortunately, you loose, try again!</Subtitle></ResultBox>
          : isWinner ? 
            <ResultBox><Subtitle>Congrats, you win! Another one?</Subtitle></ResultBox>
          :
          letterArr.map((letter, index) => 
            <KeyboardBtn key={index} tabIndex="1" onKeyDown={(e) => keyPressed(e)} onClick={(e) => changeSetAndErrorValues(e)} disabled={guessed.includes(letter)} value={letter}>
              {letter}
            </KeyboardBtn>
          )}
        </KeyboardContainer>
        }
        </FlexBox>
      <ResetButton onClick={resetGame}>Reset Game</ResetButton>
    </div>
  )
}

export default Hangman;


