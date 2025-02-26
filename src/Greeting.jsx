import { useState } from "react";



const Greeting = () => {




    const date = new Date();
    const hour = date.getHours();
    let greet = "";
    let meridian = "";
    console.log(hour);
    
    if (hour < 11){
        console.log("AM");
        meridian = "AM";
        greet = "Good Morning";
    } 
    else if ( hour > 11 && hour < 17){
        meridian = "PM";
        greet = "Good Afternoon";
    }
    else{
        meridian = "PM";
        greet = "Good Night";
    }

    const style ={
        backgroundColor: "orange",
        fontSize : "30px",
    }

    return ( 
        <>
            <p style={style}>
                Greeting: {greet}. The time is {hour -12} {meridian}.
            </p>
            <p style={{backgroundColor : "green"}}> Let's change the color</p>
        </>
     );
}
 
export default Greeting;