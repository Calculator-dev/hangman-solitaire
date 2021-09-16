import { Paper } from '@material-ui/core'
import React from 'react'

const Notification = ({ showNotification }) => {
    return (
        <Paper style={{ width: "300px", margin: "auto" }}>
            <div style={{ textAlign: "center", fontSize: "30px", color: "#2b2e4a" }}>
                {showNotification ? <p>You have already entered this letter</p> : ""}
            </div>
        </Paper>
    )
}

export default Notification