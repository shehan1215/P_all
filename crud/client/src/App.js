import logo from './logo.svg';
import './App.css';
import { MdClose } from "react-icons/md";
import { useEffect, useState } from 'react';
import axios from 'axios'
import Formtable from './Component/formtable';

axios.defaults.baseURL = "http://localhost:3000/"

function App() {
  const [addSection,setaddSection] = useState(false)
  const[editSection, setEditSection] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  })
  const [formDataEdit, setFormDataEdit] = useState({
    name: "",
    email: "",
    mobile: "",
    id: ""
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
      getFetchData()
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

const handleDelete = async(id)=>{
  const data = await axios.delete("http://localhost:8080/delete/"+id)
  if(data.data.success){
    getFetchData()
    alert(data.data.message)
  }
}

const handleUpdate = async(id)=>{

}
const hadleEditOnchange = async(e)=>{
  const {value,name} = e.target
  setFormDataEdit((prev)=>{
    return{
      ...prev,
      [name]:value
    }
  })
}
const handleEdit = (el)=>{
  setFormDataEdit(el)
  setEditSection(true)
}
  return (
    <>
      <div className="container">
        <button className="btn btn-add" onClick={()=>setaddSection (true)}>Add </button>
        
        {
          addSection && (
              <Formtable
                handleSubmit = {handleSubmit}
                hadleOnchange = {hadleOnchange}
                handleclose = {()=>setaddSection(false)}
                rest={formData}
              />
          )
        }
        {
          editSection &&(
            <Formtable
              handleSubmit = {handleUpdate}
              hadleOnchange = {hadleEditOnchange}
              handleclose = {()=>setEditSection(false)}
              rest={formDataEdit}
          />
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
                dataList[0] ? (
                dataList.map((el)=>{
                   return(
                    <tr>
                      <td>{el.name}</td>
                      <td>{el.email}</td>
                      <td>{el.mobile}</td>
                      <td>
                        <button className='btn btn-edit' onClick={()=>handleEdit(el)}>Edit</button>
                        <button className='btn btn-delete' onClick={()=>handleDelete(el._id)}>Delete</button>
                      </td>
                    </tr>
                   ) 
                }))
                :(
                  <p style={{alignItems:"center"}}>No data</p>
                )
              }
            </tbody>
          </table>
        </div>




      </div>
    </>
  );
}

export default App;
