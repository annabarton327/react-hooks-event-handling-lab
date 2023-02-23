// Code Keypad Component Here
import React from 'react'

function Keypad() {

    function handleEvent() {
        console.log("Entering password...")
    }

    return (
        <div>
            <input type="password" onChange={handleEvent} />
        </div>
    )
}

export default Keypad;