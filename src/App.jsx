import Counter from "./Counter"
import Greeting from "./Greeting"
import Props from "./Props"
import Array from "./Array"

function App() {

//   table.map(function(tab){
//     //console.log(tab)
//     <Props name = {tab.name} citzen= {tab.citizen}/>
// })
 

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
      <Props table  />
      <Array />
      
    </>

  )
}

export default App
