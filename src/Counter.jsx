import { useEffect, useState } from "react";


function Counter () {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(function (){
        document.title = "Counter";
    }, [])//will update only once because of the []
    
    
    function handleNameChange(event){
        setName(event.target.value);
    };
    
    function decreaseCount(){
        setCount(prevCount => prevCount - 1);
        console.log(count);

    };

    function increaseCount(){
        setCount(c => c + 1);
    };

    function resetCount(){
        setCount(0);
        
    };

    return( 
            <>
            <p> {count} </p>
            <button onClick={decreaseCount} >Decrease</button>
            <button onClick={resetCount} >Reset</button>
            <button onClick={increaseCount} >Increase</button>
            <div>
                <input type="text" name="name" id="1" value={name} onChange={handleNameChange}/>
                <p> {name} </p>
            </div>
            </>
    );
}

export default Counter