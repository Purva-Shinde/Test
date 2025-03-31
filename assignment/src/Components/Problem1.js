
import React, { useState } from 'react'

const Problem1 =()=> {
    const [inputValue,setInputValue] = useState('');
    const [items,setItems] = useState([])
    const handleSubmit = ()=>{
const count = {}
     const text = inputValue.split(" ").join("");
        for(let char of text){
            count[char] = (count[char] || 0)+1
        }
        console.log(count);
        const countChar = [];

        for(let char in count){
 
            countChar.push(`${char}:${count[char]}`)
           
        }
        setItems(countChar);
        console.log('items' ,items);

    }
   
  return (
    <div>
        <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
        <ol style={{listStyle:'none'}}>
            {
                items.map((value,index)=>(
                    <li key={index}>{value}</li>
                ))
            }
        </ol>
    </div>
  )
}

export default Problem1