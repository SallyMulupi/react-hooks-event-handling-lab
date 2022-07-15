// Code Keypad Component Here
import React from 'react'
const Keypad = () => {
    function fireEvent() {
        console.log("Entering password...")
    }
    return ( <
        input onChange = { fireEvent }
        type = "password" / >
    )
}

export default Keypad;