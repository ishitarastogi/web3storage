import React,{useState} from 'react'
import {Ipfs} from "./Ipfs"
function App() {
    const[file,setFile]=useState("")
    function handleChange(e) {
        setFile(e.target.files[0])
    }
    const data={
        file:file
    }
        const result =  Ipfs({ data });
console.log(result)
  return (
    <div>
      <input type="file" onChange={handleChange}/>
    </div>
  )
}

export default App
