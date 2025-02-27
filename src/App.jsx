import Counter from "./Counter"
import Greeting from "./Greeting"
import Props from "./Props"
import Array from "./Array"
import table from "./data"

function App() {

  const ans = table.map(function(tab){
    //console.log(tab)
     <Array tables = {tab} />
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
      
    </>

  )
}

export default App
