import { useState } from "react";



const Greeting = () => {

    const date = new Date();
    const hour = date.getHours();
    let greet = "";
    let hourt = "";
    console.log(hour);
    
    if (hour < 12){
        console.log("AM");
        hourt = "AM";
        greet = "Good Morning"
    }else{
        hourt = "PM";
        greet = "Good Night"
    }

    return ( 
        <>
            <p>
                Greeting: {greet}. The time is {hour} {hourt} .
            </p>
        </>
     );
}
 
export default Greeting;