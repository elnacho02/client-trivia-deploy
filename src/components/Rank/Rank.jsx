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
                        
                        <img src="https://cdn-icons.flaticon.com/png/512/3188/premium/3188675.png?token=exp=1637001835~hmac=35443e328eb858a9f672da8c3a93e942" alt="" width="50px"/>
                    </div>
                    <div className={s.name}>
                        
                        <h5>{rank[1].username.toUpperCase()}</h5>
                    </div>
                    <div className={s.score}>
                        <h4 >{rank[1].highScore} Points</h4>
                    </div>
                </div>
                <div className={s.first}>
                    <div className={s.position}>
                    <img src="https://cdn-icons.flaticon.com/png/512/1648/premium/1648486.png?token=exp=1637001714~hmac=9198ba89ca67bdb57f09c70848855cd5" alt="" width="32%"/>
                    </div>
                    <div className={s.name}>
                        
                        <h5>{rank[0].username.toUpperCase()}</h5>
                    </div>
                    <div className={s.score}>
                        <h4 >{rank[0].highScore} Points</h4>
                    </div>
                </div>
                <div className={s.third}>
                    <div className={s.position}>
                        
                    <img src="https://cdn-icons.flaticon.com/png/512/3188/premium/3188676.png?token=exp=1637001971~hmac=bf4b2b895abe47e6c6d84ff533b81cde" alt="" width="22%"/>
                    </div>
                    <div className={s.name}>
                    
                     <h5>{rank[2].username.toUpperCase()}</h5> 
                    </div>
                    
                    <div className={s.score}>
                        <h4 >{rank[2].highScore} Points</h4>
                    </div>
                </div>
                
            </div>
            <div className={s.otherContainer}>
            {rank.slice(3).map((x,i) => (
                <div className={s.other}>
                    <div className={s.otherName}>
                        <h5>#{i+4}</h5>
                        <h4>{x.username.toUpperCase()}</h4>
                    </div>
                    <div className={s.otherScore}>
                        <h5>{x.highScore} Points</h5>
                    </div> 
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
