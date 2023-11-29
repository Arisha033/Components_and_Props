import { MyList } from "./Components/MyList";
import { User } from "./Components/User";
import { UserInfo } from "./Components/UserInfo";

function App() {

  const myName = "Arisha";
  const sum = (a, b) => a + b;
  const specialClass = 'simple-class'
  const dynamicClass = "dynamic-class"


  return (
    <>
    {/* <h2>Hello, my name is {myName}</h2>
    <h2>20 + 10 = {sum(20, 10)} </h2>
    <h3>My friends are: {["Alex ", "John ", "Smith"]}</h3>
    <h4 className={specialClass}>This is a special class</h4>
    <p className= {dynamicClass}>This is a dynamic class</p>
    <MyList />
    <UserInfo /> */}

    <User
    img ="https://avatars.githubusercontent.com/u/128699505?v=4"
    name= "Arisha"
    age= {20}
    hobbies= {["Coding, ", "Sleeping"]}
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eius.</p>
    </User>
    </>
  )
}

export default App
