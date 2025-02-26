import Counter from "./Counter"
import Greeting from "./Greeting"
import Props from "./Props"

function App() {
  // let table = [{
    
  //     name: "Ken",
  //     age: "20",
  //     citizen: "Kenyan"
  //   },
  //   {
  //     name: "John",
  //     age: 21,
  //     citizen: "Tanzania"
  //   }
  // ]


  return (
    <>
      <p>Hello There</p>
      <Counter />
      <Greeting />
      
      <Props table = {{
                    name: "Ken",
                    age: 20,
                    citizen: "Kenyan"
                    }}/>
      <Props table  />
      
    </>

  )
}

export default App
