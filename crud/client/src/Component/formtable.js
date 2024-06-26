import React from 'react'
import "../App.css"
import { MdClose } from 'react-icons/md'

const formtable = ({handleSubmit,hadleOnchange,handleclose,rest}) => {
  return (
    <div className="addContainer">
    <form onSubmit={handleSubmit}>
      <div className="close-btn" onClick={handleclose}><MdClose /></div>
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" name="name" onChange={hadleOnchange} value={rest.name}/>

      <label htmlFor="email">E-mail: </label>
      <input type="email" id="email" name="email" onChange={hadleOnchange} value={rest.email}/>

      <label htmlFor="mobile">Mobile: </label>
      <input type="number" id="mobile" name="mobile" onChange={hadleOnchange} value={rest.mobile}/>

      <button className="btn">Submit</button>
    </form>
  </div>
  )
}

export default formtable
