import { useState } from 'react';
import './App.css';
import Weather from "./components/Weather/index";


function App() {

const [show, setShow] = useState(false)

  return (
    <>
<button onClick={()=>setShow(show=>!show)}>Show</button>
   
{show &&  <Weather></Weather>}

    </>
  );
}

export default App;
