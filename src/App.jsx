import './App.css';
import { useState } from 'react';

function TaskAdd({addTasks}){
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
<button onClick={handleClick}>追加</button></>);
}

//tasksのそれぞれに対して機能追加。checkboxはindexを渡してtaggleDoneを呼び出す。
//task.doneという変数に対しての真偽でclassNameを変化
function TaskList({tasks,taggleDone}){return(
<ul>
{tasks.map((task,index)=>(
<li key={index}>
<input type="checkbox" checked={task.done} onChange={()=>taggleDone(index)} />  
<span className={task.done?'done':''}>{task.text}</span>
</li>))} 
</ul>)};

export default function App(){
//usestateにtasksの初期状態の配列を渡している。
const [tasks,setTasks]=useState([ 
{ text: 'サンプルタスク１', done: false },
{ text: 'サンプルタスク２', done: true },
{ text: 'サンプルタスク３', done: false }]);

//textという引数を受け取って、それを使ってtasksに処理を加える
const addTasks=(text)=>{
const newTasks={text,done:false};
setTasks([...tasks,newTasks]);
};

//taggledoneが呼び出された場合は配列のコピーを作り、index番目のdoneを反転→stateを記憶
const taggleDone=(index)=>{
const updatetasks=[...tasks];
updatetasks[index].done=!updatetasks[index].done 
setTasks(updatetasks) ;
};

return(
<div style={{ display: 'inline-block', textAlign: 'left' }}>
<h1>To Do リスト</h1>
<TaskAdd addTasks={addTasks}/>
<TaskList tasks={tasks} taggleDone={taggleDone}/>
</div>); 
}