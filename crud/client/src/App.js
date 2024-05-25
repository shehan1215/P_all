import logo from './logo.svg';
import './App.css';
import { MdClose } from "react-icons/md";
import { useEffect, useState } from 'react';
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:3000/"

function App() {
  const [addSection,setaddSection] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  })
  const [dataList, setDataList] = useState([])

  const hadleOnchange = (e)=>{
    const {value,name} = e.target
    setFormData((prev)=>{
      return{
        ...prev,
        [name]:value
      }
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const data = await axios.post("http://localhost:8080/create",formData)
    console.log(data)
    if(data.data.success){
      setaddSection(false)
      alert(data.data.message)
    }
  }
  const getFetchData = async()=>{
    const data = await axios.get("http://localhost:8080/")
    console.log(data)
    if(data.data.success){
      setDataList(data.data.data)
    }
  }
  useEffect(()=>{
    getFetchData()
  },[])

  console.log(dataList);

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

        <div className='tableContainer'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                dataList.map((el)=>{
                   return(
                    <tr>
                      <td>{el.name}</td>
                      <td>{el.email}</td>
                      <td>{el.mobile}</td>
                      <td></td>
                    </tr>
                   ) 
                })
              }
            </tbody>
          </table>
        </div>




      </div>
    </>
  );
}

export default App;
