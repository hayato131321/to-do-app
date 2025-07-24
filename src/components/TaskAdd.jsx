import { useState } from "react";

export default function TaskAdd({addTasks}){
const [input,setInput]=useState('')

const handleChange=(e)=>{
setInput(e.target.value);  
}
const handleClick=()=>{
if (input.trim()===''){return;}
addTasks(input)
setInput('')  
}
return(
<><input type="text" placeholder="タスクを追加する" value={input} onChange={handleChange}/>
<button onClick={handleClick}>追加</button></>);}