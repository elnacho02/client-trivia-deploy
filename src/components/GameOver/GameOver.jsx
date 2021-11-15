import React from 'react'
import s from "./GameOver.module.css"
function GameOver({points, getPreg}) {
    return (
        <div>
            Game Over!
            Your score: {points}
            <button onClick={getPreg}>TRY AGAIN</button>
            <h4>working on this page...</h4>
        </div>
    )
}

export default GameOver
