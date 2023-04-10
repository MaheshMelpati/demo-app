import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

function EmpData() {
    const baseUrl = 'https://633245c8a54a0e83d24e58d8.mockapi.io/cude_project'
    const [data,setData] = useState([])
    useEffect(()=>{
        getData()
    })

    const getData = async() =>{
        const gdata = await axios.get(baseUrl)
        const res = await gdata.data
        setData(res)
        console.warn('gdata', res)
    }
    const navigate = useNavigate();
    const newHandelar =()=>{
        navigate('emp-new')
    }

  return (
   <>
   <div className='container mt-5'>
   <div className="clearfix mb-4">
  <h3 className="float-start">EMP DATA</h3>
  <button className="float-end btn btn-info" onClick={newHandelar}>New</button>
</div>
   <table className='table table-bordered'>
       <tr>
           <th>S No</th> 
           <th>id</th>
           <th>First Name</th>
           <th>Last Name</th>
           <th>Email</th>
           <th>Phone No</th>
           <th></th>
       </tr>
 
   {
    data && data.length > 0 ?
    data.map((datas,inx)=>{
        return(
            <tr key={inx }>
                <td>{inx}</td>
                <td>{datas.id}</td>
                <td>{datas.firstName}</td>
                <td>{datas.lastName}</td>
                <td>{datas.email}</td>
                <td>{datas.phone}</td>
                <th>
                <i class="fa fa-trash-o" aria-hidden="true"></i>
                <i class="fa fa-eye" aria-hidden="true"></i>
                </th>
            </tr>
            
        )
    }):null
   }
     </table>
   </div>

   </>
  )
}

export default EmpData