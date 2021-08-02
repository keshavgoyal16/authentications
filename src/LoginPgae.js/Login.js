import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import './Login.css'

function Login() {
    let history = useHistory();

    const [email, setEmail] = useState('')
    const [passowrd, setPassowrd] = useState('')
    const [body, setBody] = useState('')
    const [errMsg, setErrMsg] = useState('notFalse')
    const [showDiv, setShowDiv] = useState(false)

    let getEmail = (event) => {
        setEmail(event.target.value);
    }

    let getPassword = (event) => {
        setPassowrd(event.target.value);
    }

    let getBodyDetails = (event) => {
        setBody(event.target.value)
    }
    let onMouseHover =(event)=>{
      setShowDiv(true)  
    }
    let leaveHover = (event)=>{
        setShowDiv(false)  
    }
    let onLogin = (event) => {
        event.preventDefault();
        const data = {
            userId: email,
            title: passowrd,
            body: body
        }
        var mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (email && passowrd && body) {
            if (email.match(mailformat)) {axios.post('https://jsonplaceholder.typicode.com/posts', data).then((resp) => {
                if (resp.data.id) {
                    console.log('dsdsfds', resp);
                    history.push('/FirstRout');
                }
            }).catch((err) => { console.log('err', err) }) }
            else{
                alert('enter valid email');
            }
            
        }
        else {
            alert('enter full details')
            setErrMsg('false');
        }
        //   if(email && passowrd){
        //     history.push('/FirstRout');
        //   }
        //   else{
        //      setErrMsg('false');
        //   }
    };
    return (
        <div>
            <h1>Welcome to login page</h1>
            <input className={errMsg} type='text' value={email} placeholder='enter email' onChange={getEmail} />
            <input className={errMsg} type='password' value={passowrd} placeholder='enter password' onChange={getPassword} />
            <input className={errMsg} type='text' value={body} placeholder='body' onChange={getBodyDetails} onMouseLeave={leaveHover} onMouseMove={onMouseHover} />
            <button type='submit' onClick={onLogin}>Login</button>

            {
                showDiv?<div>hello buddy</div>: null
            }
        </div>
    )
}

export default Login
