import './App.css';
import { useState } from 'react';

//タスクの追加。inputという関数を使って状態管理
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
function TaskList({tasks,toggleDone,isDeleteMode,setSelectedIndexes,selectedIndexes}){return(
<ul>
{tasks.map((task,index)=>(
<li key={index} 
onClick={()=>{if(isDeleteMode)
{if(selectedIndexes.includes(index)){setSelectedIndexes(selectedIndexes.filter(i=>i!==index));}
else{setSelectedIndexes([...selectedIndexes,index]);};}
}}
style={{cursor: isDeleteMode ? 'pointer' : 'default',
        backgroundColor: selectedIndexes.includes(index) ? '#f8d7da' : 'white',
        padding: '4px',
        marginBottom: '4px'
}}
title={isDeleteMode ? 'クリックで削除' : ''}>
<input type="checkbox" checked={task.done} onChange={()=>toggleDone(index)}  disabled={isDeleteMode}/>  
<span className={task.done?'done':''}>{task.text}</span>
</li>))} 
</ul>);}


function DeleteModeToggle({onToggle,isDeleteMode}){
return(<button onClick={onToggle} style={{
marginTop: '10px',
marginBottom: '10px',
backgroundColor: isDeleteMode ? '#f8d7da' : '#d1e7dd',
border: '1px solid #ccc',
padding: '5px 10px',
cursor: 'pointer',}}>
{isDeleteMode? '🛑 削除モード解除' : '🗑️ 削除モード'}
</button>)}


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
const toggleDone=(index)=>{
const updatetasks=[...tasks];
updatetasks[index].done=!updatetasks[index].done 
setTasks(updatetasks) ;
};

const [isDeleteMode,setIsDeleteMode]=useState(false);

const[selectedIndexes,setSelectedIndexes]=useState([]);

const confirmDelete=()=>{const newTasks=tasks.filter((_,i)=>!selectedIndexes.includes(i))
setTasks(newTasks);
setSelectedIndexes([])
setIsDeleteMode(false);  
}


return(
<div style={{ display: 'inline-block', textAlign: 'left' }}>
<h1>To Do リスト</h1>
<TaskAdd addTasks={addTasks}/>
<DeleteModeToggle isDeleteMode={isDeleteMode} 
  onToggle={()=>setIsDeleteMode(!isDeleteMode)}/>
<TaskList isDeleteMode={isDeleteMode} confirmDelete={confirmDelete} tasks={tasks} 
toggleDone={toggleDone} selectedIndexes={selectedIndexes} setSelectedIndexes={setSelectedIndexes}/>
{isDeleteMode&&selectedIndexes.length>0&&(<button onClick={confirmDelete} style={{
    backgroundColor: '#dc3545',
    color: 'white',
    padding: '5px 10px',
    marginBottom: '10px',
    border: 'none',
    cursor: 'pointer',
  }}>
    ✅ 削除を確定
  </button>)}
</div>);};