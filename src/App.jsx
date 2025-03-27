import Counter from "./Counter"
import Greeting from "./Greeting"
import Props from "./Props"
import Array from "./Array"
import table from "./data"
import Datas from "./Datas"
import data from "./mydata"
import Form from "./Form"
import Footer from "./Footer"

function App() {

  const ans = table.map((tables) => {
    return(
      <>
        <Array tables = {tables} />
        <Props table = {table} />  
      </>
    )
})

  const datas = data.map( function(data){

    return(
      < Datas data = {data} />
    )
  }) 

  return (
    <>
      <p>Hello There...</p>
      <Counter />
      <Greeting />
      <Form />
      {ans}
      {datas}
      <Footer/>
    </>

  )
}

export default App
