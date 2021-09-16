import { Typography } from '@material-ui/core'
import React from 'react'

export default function WrongLetters({ wrongLetters }) {
    return (
        <div style={{ width: "300px", textAlign: "center", position: "relative", left: "1140px", bottom: "130px" }}>
            <Typography variant="button" style={{ color: "white", fontSize: "20px" }}>
                Wrong Letters
            </Typography>
            <div style={{ color: "white", fontSize: "18px" }}>
                {wrongLetters
                    .map((letter, i) => <span key={i}>{letter}</span>)
                    .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}
            </div>
        </div>
    )
}
