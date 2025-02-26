import { useState } from "react";



const Greeting = () => {

    const date = new Date();
    const hour = date.getHours();
    let greet = "";
    let hourt = "";
    console.log(hour);
    
    if (hour < 11){
        console.log("AM");
        hourt = "AM";
        greet = "Good Morning"
    } else if ( hour > 11 && hour < 17){
        greet = "Good Afternoon"
    }
    else{
        hourt = "PM";
        greet = "Good Night"
    }

    const style ={
        backgroundColor: "orange",
        fontSize : "30px",
    }

    return ( 
        <>
            <p style={style}>
                Greeting: {greet}. The time is {hour} {hourt} .
            </p>
            <p style={{backgroundColor : "green"}}> Let's change the color</p>
        </>
     );
}
 
export default Greeting;