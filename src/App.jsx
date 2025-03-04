import Counter from "./Counter"
import Greeting from "./Greeting"
import Props from "./Props"
import Array from "./Array"
import table from "./data"
import Datas from "./Datas"
import data from "./mydata"

function App() {

  const ans = table.map(function(tables){
    return(
     <Array tables = {tables} />
    )
})
// console.log (ans)

  const datas = data.map( function(data){

    return(
      < Datas data = {data}/>
    )
  }) 

  return (
    <>
      <p>Hello There</p>
      <Counter />
      <Greeting />
      
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
