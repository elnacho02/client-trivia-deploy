import React, {useState} from 'react'
import {useHistory} from "react-router-dom"
import s from "./Create.module.css"
import axios from "axios"
function Create() {
    let history = useHistory()
    var [datos, setDatos] = useState({
        username: "",
        password: ""
    })
    function handleChange(e){
        const value = e.target.value;
        setDatos({
          ...datos,
          [e.target.name]: value
        });
       }
       function handleSubmit(e){
        e.preventDefault()
        axios("https://trivia-app01.herokuapp.com/user/create",{
            method: "post",    
            data:datos
        }).then(history.push("/login"))
        
      }
    return (
        <div className={s.container}>
            <form onSubmit={handleSubmit}>
                <h2>CREATE ACCOUNT</h2>
                <h5>Username</h5>
                <input type="text" value={datos.username} name='username' onChange={(e)=>handleChange(e)} required autoComplete='off'/>
                <h5>Password</h5>
                <input type="text" value={datos.password} name='password' onChange={(e)=>handleChange(e)} required autoComplete='off'/>
                <button type='submit'>CREATE</button>
            </form>
            {/* <div className={s.side}>
                
            </div> */}
        </div>
    )
}

export default Create