import React, { useState } from 'react'

function Problem1() {
    const [inputText ,setInputText]=useState('');
const [countchar,setCountchar]=useState([]);

    const handleSubmit = ()=>{
        const count={}
      const text = inputText.split(' ').join('');
      for(const char of text){
    count[char]= (count[char]||0)+1;
      }
      console.log(count);
      const items = [];
      for(const char in count){
         items.push(`${char}:${count[char]}`)

    }
    console.log(items)
    setCountchar(items);
    }
    
   



  return (
    <div>
        <input type="text" value={inputText} onChange={(e)=>setInputText(e.target.value)}/>
<button onClick={handleSubmit}>Add</button>
<ol style={{listStyle:'none'}}>
    {
        countchar.map((value,index)=>(
            <li key={index}>{value}</li>
        ))
    }
</ol>
    </div>
  )
}

export default Problem1