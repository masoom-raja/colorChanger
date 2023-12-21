import { useState } from 'react'



function App() {
  const [color, setColor] = useState("Olive")
  //  let value=()=>{ setColor(color=>color="red")
  //  }
  let value=(color)=>{ setColor(color)
}
  return (
  
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          {/* <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"green"}} onClick={()=>value("green")}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"yellow"}} onClick={()=>value("yellow")}>Yellow</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"orange"}} onClick={()=>value("orange")}>Orange</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"white"}}onClick={()=>value("white")}>White</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"blue"}}onClick={()=>value("blue")}>Blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"red"}}onClick={()=>value("red")}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"grey"}}onClick={()=>value("green")}>grey</button> */}

          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"white"}}onClick={()=>setColor("white")}>White</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"blue"}}onClick={()=>setColor("blue")}>Blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"red"}}onClick={()=>setColor("re")}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"grey"}}onClick={()=>setColor("grey")}>grey</button>




        </div>
      </div>
</div>
 
  )
}

export default App
