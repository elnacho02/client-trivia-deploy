import React, {useState, useEffect} from 'react'
import s from "./Rank.module.css"
import axios from "axios"


function Rank() {
    var [rank, setRank] = useState([]);
    
    useEffect(() => {
        axios("https://trivia-app01.herokuapp.com/ranking").then(data => setRank(data.data))
    }, [])
    
    if(rank.length)return (
        <div className={s.container}>
            <h2 style={{"position":"absolute","top":"10%"}}>RANKING</h2>
            <div className={s.podiumContainer}>

                <div className={s.second}>
                    <div className={s.position}>
                        
                        <h3>#2</h3>
                    </div>
                    <div className={s.name}>
                        <h5><i class="fas fa-trophy silver"></i>{rank[1].username.toUpperCase()}</h5>
                    </div>
                    <div className={s.score}>
                        <h4 >{rank[1].highScore} Points</h4>
                    </div>
                </div>
                <div className={s.first}>
                    <div className={s.position}>
                        <h3>#1</h3>
                    </div>
                    <div className={s.name}>
                        <h5><i class="fas fa-trophy gold"></i>{rank[0].username.toUpperCase()}</h5>
                    </div>
                    <div className={s.score}>
                        <h4 >{rank[0].highScore} Points</h4>
                    </div>
                </div>
                <div className={s.third}>
                    <div className={s.position}>
                        
                        <h3>#3</h3>
                    </div>
                    <div className={s.name}>
                     <h5><i class="fas fa-trophy bronce"></i>{rank[2].username.toUpperCase()}</h5> 
                    </div>
                    
                    <div className={s.score}>
                        <h4 >{rank[2].highScore} Points</h4>
                    </div>
                </div>
                
            </div>
            <div className={s.otherContainer}>
            {rank.slice(3).map((x,i) => (
                <div className={s.other}>
                    <h5>{i+4}°</h5>
                    <h4>{x.username.toUpperCase()}</h4>
                    <h5>{x.highScore} Points</h5>
                </div>
            ))}
            </div> 
        </div>
    )
    else return (
        <div>
            
        </div>
    )
}

export default Rank
