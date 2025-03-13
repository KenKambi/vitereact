import { useState } from "react";

function Header (){

    const  [count, setCount] = useState(0)

    function changeCount(){
        setCount(c => c + 1);//previous cont then add 1
    }

    return(
        <>
            <p>My name is Kennedy Kambi</p>
            <p>New no: {count} </p>
            <button onClick={changeCount} >Click Me</button>
            <hr />
        </>

    );
}

export default Header