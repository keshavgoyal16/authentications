import React from 'react'
import { useHistory } from 'react-router-dom'

function FirstRout() {
    let history = useHistory ();

  const onHome=()=>{
    history.push('/');
    }

    return (
        <div>
            <h1>Hello</h1>
            <h2>you are in first route page</h2>
            <button onClick={onHome}>Home</button>
        </div>
    )
}

export default FirstRout
