import { useState } from "react";


function Counter () {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    function handleNameChange(e){
        setName(e.target.value);
    };

    
    function decrease(){
        setCount(c => c - 1);
        console.log(count);

    };

    function increase(){
        setCount(c => c + 1);
    };

    function reset(){
        setCount(0);
        //console.log(count);
    };

    return( 
            <>
            <p> {count} </p>
            <button onClick={decrease} >Decrease</button>
            <button onClick={reset} >Reset</button>
            <button onClick={increase} >Increase</button>
            <div>
                <input type="text" name="name" id="1" value={name} onChange={handleNameChange}/>
                <p> {name} </p>
            </div>
            </>
    );
}

export default Counter