import { useState } from 'react'
import Home from './pages/Home';
import About from './pages/About';
import './App.css'
import Loginpage from './pages/Loginpage';

function App() {

  const [toggle, setToggle] = useState(true);

  return (
    <div className="App">
      {/* <p>This is App Page</p> */}
      {/* <button onClick ={()=>setToggle(!toggle)}>Change Button</button> */}
      {/* {toggle ? <Home /> : <About />} */}
      <Loginpage />
    </div>

  )
}
export default App;
