import logo from './logo.svg';
import './App.css';
import {useState} from 'react'


function App() {
    const [num1,setNum1] = useState();      
    const [num2,setNum2] = useState();  
    const [sum,setSum] = useState();

    const add = (event)=>{
      event.preventDefault()
      setSum(parseInt(num1)+parseInt(num2));
    }

  return (
    
    <div>
      <form onSubmit={add}>
      <input type="text"  value={num1} id="num1" onChange={(event)=>setNum1(event.target.value)}  placeholder="Enter number"></input>
      <input type="text" value={num2} onChange={(event)=>setNum2(event.target.value)}  placeholder="Enter number" required></input>
      <input type="submit"></input> 
      </form>
      <p>
        {sum}
      </p>
   </div>
   

  );
}

export default App;
