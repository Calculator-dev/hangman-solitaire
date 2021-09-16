import React, { useState, useEffect } from "react";
import axios from "axios";
import Word from "./components/Word";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import { showNotification as show } from "./helper/helper";
import Notification from "./components/Notification";
import Popup from "./components/Popup";
import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header";



function App() {

  const [play, setPlay] = useState(true);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [word, setWord] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const randomWord = () => {
    axios.get("https://random-words-api.vercel.app/word")
      .then((response) => {
        setWord(response.data[0].word.toLowerCase())
      })

  }


  useEffect(() => {
    randomWord();
  }, [])



  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if ((play && keyCode >= 65 && keyCode <= 90) || keyCode === 32 || keyCode === 189) {
        const letter = key.toLowerCase();
        if (word.includes(letter)) {
          if (!guessedLetters.includes(letter)) {
            setGuessedLetters([...guessedLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters([...wrongLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);

  }, [guessedLetters, wrongLetters, play, word]);

  function playAgain() {
    setPlay(true);
    setGuessedLetters([]);
    setWrongLetters([]);
    randomWord();
  }

  console.log(word)

  return (
    <div>
      <Header />
      <Figure wrongLetters={wrongLetters} />
      <WrongLetters wrongLetters={wrongLetters} />
      <Word word={word} guessedLetters={guessedLetters} />
      <Popup guessedLetters={guessedLetters} wrongLetters={wrongLetters} word={word} setPlay={setPlay} playAgain={playAgain} />
      <Notification showNotification={showNotification} />
      <CssBaseline />
    </div>
  );
}

export default App;