import React, { useState } from 'react'
import axios from 'axios'

function Problem2() {
    const [name,setName]=useState([]);
    const handleSubmit =async ()=>{
        try {
            const randomNumber = Math.floor(Math.random()*10)+1
     const response = await axios.get(` https://swapi.dev/api/people/${randomNumber}`);
console.log(response.data.name);
setName([...name,response.data.name])
            
        } catch (error) {
            console.log(error)
        }
    }
    const handleDelete = (index)=>{
        setName(name.filter((_,i)=> i !== index));
    }
  return (
    <div>
        <button onClick={handleSubmit}>Add Record</button>
        <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}} className='tableWrapper'> 
        <table>
           <thead>
            <tr> 
            <th>name</th>
            <th>Action</th>

            </tr>
           </thead>
           <tbody>
            {
name.map((item,index)=>(
    <tr key={index}>
        <td>{item}</td>
<td onClick={()=>handleDelete(index)}>Delete</td>
    </tr>
))
            }
 
           </tbody>
        </table>
        </div>
    </div>
  )
}

export default Problem2