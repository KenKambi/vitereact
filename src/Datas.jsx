import { useState } from "react"


export default function Datas (props){

    //const [data, useData] = useState("hello")
     
    // function okayNow (){
    //    useData = "now";
    // }
    
    return(
        <>
        <p>My name is {props.data.name}. I am {props.data.age} years old. </p>
        <p>Email: {props.data.email} </p>
        </>
    )
}
