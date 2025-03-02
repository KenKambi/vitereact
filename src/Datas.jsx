

export default function Datas (props){
    //console.log(props)
    return(
        <>
        <p>My name is {props.data.name}. I am {props.data.age} years old. </p>
        <p>Email: {props.data.email} </p>
        </>
    )
}
