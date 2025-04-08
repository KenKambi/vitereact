import { useState } from "react";

export default function Header (){

    const  [count, setCount] = useState(0)
    const name = "Ken Kambi"

    function changeCount(){
        setCount(c => c + 1);//previous count then add 1
    }

    return(
        <>
            <p> {name} </p>
            <p>New no: {count} </p>
            <button onClick={changeCount} >Click Me</button>
            <hr />
        </>

    );
}
