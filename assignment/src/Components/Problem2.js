import React ,{useState} from 'react'
import axios from 'axios'

const Problem2=()=> {
    const [name,setName]=useState([])
    const handleSubmit = async()=>{
         try {
            const randomNumber =  Math.floor(Math.random()*10)+1;

            const response = await axios.get(`https://swapi.dev/api/people/${randomNumber}`);
            console.log(response.data.name);
            setName([...name,response.data.name]);
        } catch (error) {
            console.log(error)
        }
    }
    const handleDelete = (index)=>{

setName(name.filter((_,i)=> i !== index))

    }
  return (
    <div>
        <button onClick={handleSubmit}>Click Button</button>
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
                        <td >{item}</td>
                        <td onClick={()=>handleDelete(index)}>delete</td>

                   </tr>
                      ))
                  }
                </tbody>
             
        </table>
    </div>
  )
}

export default Problem2