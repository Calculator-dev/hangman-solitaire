import { Typography } from '@material-ui/core'
import React from 'react'

export default function Header() {
    return (
        <div>
            <Typography variant="button" display="block" style={{ textAlign: "center", color: "white", fontSize: "30px", marginTop: "30px" }}>
                Hangman Solitaire
            </Typography>
            <Typography variant="caption" display="block" style={{ textAlign: "center", color: "white", fontSize: "15px" }}>
                Find the hidden word - Enter a letter
            </Typography>
        </div>
    )
}
