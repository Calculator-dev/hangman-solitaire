import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { checkWin } from "../helper/helper"

export default function Popup({ guessedLetters, wrongLetters, word, setPlay, playAgain }) {

    let finalMessage = "";
    let revealWord = "";
    let play = true;
    let buttonPlayAgain = "";

    if (checkWin(guessedLetters, wrongLetters, word) === "win") {
        finalMessage = "Congratulations! You won! :D";
        play = false;
        buttonPlayAgain = <Button variant="contained" color="primary" onClick={playAgain}>Play Again</Button>;
    } else if (checkWin(guessedLetters, wrongLetters, word) === "lose") {
        finalMessage = "Unfortunately you lost :(";
        revealWord = `... the word was ${word}`;
        play = false;
        buttonPlayAgain = <Button variant="contained" color="primary" onClick={playAgain}>Play Again</Button>;
    }

    useEffect(() => setPlay(play));

    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <h2 style={{ color: "white" }}>{finalMessage}</h2>
                <h3 style={{ color: "white" }}>{revealWord}</h3>
                <h2>{buttonPlayAgain}</h2>
            </div>
        </div>
    )
}
