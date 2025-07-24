import './App.css';
import { useState, useEffect } from 'react';
import TaskAdd from './components/TaskAdd';
import TaskList from './components/TaskList';

export default function App(){
const {
    tasks,
    setTasks,
    addTasks,
    toggleDone,
  } = useTasks();


const [isEditMode,setIsEditMode]=useState(false)
const [editingIndex,setEditingIndex]=useState(null)
const [editedText,setEditedText]=useState('')

const confirmEdit=()=>{
if(editingIndex===null)return;
const newTasks=[...tasks]
newTasks[editingIndex].text=editedText

setTasks(newTasks)
setIsEditMode(false)
setEditingIndex(null)
}


const [isDeleteMode,setIsDeleteMode]=useState(false);
const[selectedIndexes,setSelectedIndexes]=useState([]);

const confirmDelete=()=>{const remainingTasks=tasks.filter((_,i)=>!selectedIndexes.includes(i))
setTasks(remainingTasks);
setSelectedIndexes([])
setIsDeleteMode(false);  
}    


return(
<div style={{ display: 'inline-block', textAlign: 'left' }}>
<h1>To Do リスト</h1>
<TaskAdd addTasks={addTasks}/>

<button onClick={()=>{setIsEditMode(!isEditMode) , setEditedText('')} }  

style={{backgroundColor: isEditMode ? '#cfe2ff' : '#e2e3e5',
        margin: '10px 0',
        padding: '5px 10px',
        cursor: 'pointer'}}>
  {isEditMode ? '📝 編集モード解除' : '🖊️ 編集モード'} </button>

<DeleteModeToggle isDeleteMode={isDeleteMode} 
  onToggle={()=>setIsDeleteMode(!isDeleteMode)}/>

<TaskList isDeleteMode={isDeleteMode} confirmDelete={confirmDelete} tasks={tasks} 
toggleDone={toggleDone} selectedIndexes={selectedIndexes} setSelectedIndexes={setSelectedIndexes}
isEditMode={isEditMode} editingIndex={editingIndex} setEditingIndex={setEditingIndex} editedText={editedText}
setEditedText={setEditedText} confirmEdit={confirmEdit}/>
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