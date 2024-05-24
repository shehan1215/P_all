import logo from './logo.svg';
import './App.css';
import { MdClose } from "react-icons/md";
import { useState } from 'react';

function App() {
  const [addSection,setaddSection] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  })
  const hadleOnchange = (e)=>{
    const {value,name} = e.target
    setFormData((prev)=>{
      return{
        ...prev,
        [name]:value
      }
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(formData)
  }
  return (
    <>
      <div className="container">
        <button className="btn btn-add" onClick={()=>setaddSection (true)}>Add </button>
        
        {
          addSection && (
            <div className="addContainer">
            <form onSubmit={handleSubmit}>
              <div className="close-btn" onClick={()=>setaddSection (false)}><MdClose /></div>
              <label htmlFor="name">Name: </label>
              <input type="text" id="name" name="name" onChange={hadleOnchange}/>
  
              <label htmlFor="email">E-mail: </label>
              <input type="email" id="email" name="email" onChange={hadleOnchange}/>
  
              <label htmlFor="mobile">Mobile: </label>
              <input type="number" id="mobile" name="mobile" onChange={hadleOnchange}/>
  
              <button className="btn">Submit</button>
            </form>
          </div>
          )
        }

      </div>
    </>
  );
}

export default App;
