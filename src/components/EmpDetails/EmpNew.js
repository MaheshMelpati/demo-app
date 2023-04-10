import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function EmpNew() {
    const[firstName,setfName] = useState('')
    const[lastName,setlName] = useState('')
    const[email,setEmail] = useState('')
    const[phone,setPhone] = useState('')
   
    const baseUrl = 'https://633245c8a54a0e83d24e58d8.mockapi.io/cude_project'
    const newEmp = () =>{
        axios.post('https://633245c8a54a0e83d24e58d8.mockapi.io/cude_project', firstName,lastName,email,phone)
        console.log(firstName, lastName, email,phone)

    }
  return (
    <>
    <div className='container mt-5'>
    <div className="clearfix mb-4">
        <h3 className="float-start">EMP New</h3>
        <Link to="/" className="float-end btn btn-info">Back</Link>
        </div>
        <div className='w-100 mt-2 mb-2'>
           
                <input className='w-100 mb-2' type='text' onChange={(e)=>{setfName(e.target.value)}} value={firstName} placeholder='First Name...' />              
                <input className='w-100 mb-2' type='text' onChange={(e)=>{setlName(e.target.value)}} value={lastName} placeholder='Last Name...' />              
                <input className='w-100 mb-2' type='email' onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder='Email...' />              
                <input className='w-100 mb-2' type='tel' onChange={(e)=>{setPhone(e.target.value)}} value={phone} placeholder='phone...' />  
                <button className='btn btn-info' onClick={newEmp} >Submit</button>           
            
        </div>
    </div>
    </>
  )
}

export default EmpNew