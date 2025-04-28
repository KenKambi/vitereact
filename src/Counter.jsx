import { useEffect, useState } from "react";


function Counter () {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(function (){
        document.title = "My React App";
    }, [])//Render once
    
    function handleNameChange(event){
        setName(event.target.value);
    };
    
    function decreaseCount(){
    setCount(prevCount => prevCount - 1);
       

    };

    function increaseCount(){
        setCount(c => c + 1);
    };

    function resetCount(){
        setCount(0);
        
    };

    return( 
            <div>
                <h2> {count} </h2>
                <button onClick={decreaseCount} >Decrease</button>
                <button onClick={resetCount} >Reset</button>
                <button onClick={increaseCount} >Increase</button>
                <div>
                    <input type="text" name="name" id="1" value={name} onChange={handleNameChange}/>
                    <p> {name} </p>
                </div>
                <img src="/assets/react.svg" alt="React Logo" />
            </div>
    );
} 

export default Counter