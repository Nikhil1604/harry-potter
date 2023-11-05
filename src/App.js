import React,{useEffect, useState} from "react";

function App() {
  const [value,setValue]=useState()
  
  async function data(){
    const response=await fetch('https://hp-api.onrender.com/api/characters/students')
    const json=await response.json([])
    console.log(json)
    setValue(json)
  }
  useEffect (()=>{
    data()
  }

  ,[])

  const myimg = {
    height: '200px',
    width: '200px'
  }

  const cont = {
    display:'flex',
    flexDirection:'rows',
    backgroundColor:'lightgreen',
  

  }
  const outer ={
    display:'grid',
    gap:'20px 20px',
    backgroundColor:'yellow'
  }

  return (
    <div style={cont}>
      <div style={outer}>   
          {value ?   value.map((item)=>(
            <>
            <h1 key={item.name}>Name of Charcter is: {item.name}</h1>
            <img src={item.image} style={myimg}/> 
            <h1>Charcter Played by :{item.actor}</h1>
            
            <br/>

            </>
            
          ))
          : null}
      </div>
    </div>
  );
}

export default App;
