import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    letter: {
        borderBottom: " 3px solid #903749",
        display: "inline-flex",
        fontSize: "20px",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 3px",
        height: "30px",
        width: "20px",
        color: "white",
    },
    root: {
        textAlign: "center",
    }
})

export default function Word({ word, guessedLetters }) {


    const classes = useStyles();

    return (
        <div className={classes.root}>
            {word.split("").map((letter, i) => {
                return (
                    <div className={classes.letter} key={i}>
                        {guessedLetters.includes(letter) ? letter : ""}
                    </div>
                )
            })}
        </div>
    )
}
