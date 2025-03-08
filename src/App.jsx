import Counter from "./Counter"
import Greeting from "./Greeting"
import Props from "./Props"
import Array from "./Array"
import table from "./data"
import Datas from "./Datas"
import data from "./mydata"
import Form from "./Form"

function App() {

  const ans = table.map(function(tables){
    return(
     <Array tables = {tables} />
    )
})

  const datas = data.map( function(data){

    return(
      < Datas data = {data} /*handleClick = {handleClick}*//>
    )
  }) 

  return (
    <>
      <p>Hello There</p>
      <Counter />
      <Greeting />
      <Form />
      
      <Props table = {{
                    name: "Ken",
                    age: 20,
                    citizen: "Kenya"
                    }}/>
      
      {ans}
      {datas}
      
    </>

  )
}

export default App
