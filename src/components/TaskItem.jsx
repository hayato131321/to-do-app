import EditTaskInput from './EditTaskInput';

export default function TaskItem({
  task,
  index,
  isDeleteMode,
  selectedIndexes,
  setSelectedIndexes,
  isEditMode,
  editingIndex,
  setEditingIndex,
  editedText,
  setEditedText,
  handleText,
  toggleDone
}){
const handleClick=()=>{
if(isDeleteMode){if(selectedIndexes.includes(index)){setSelectedIndexes(selectedIndexes.filter(i=>i!==index));}
else{setSelectedIndexes([...selectedIndexes,index]);};}
else if(isEditMode){ setEditingIndex(index);setEditedText(task.text); }}


return(
<li 
onClick={handleClick}
style={{cursor: isDeleteMode ? 'pointer' : 'default',
        backgroundColor: selectedIndexes.includes(index) ? '#f8d7da' : 'white',
        padding: '4px',
        marginBottom: '4px'}}
title={isDeleteMode ? 'クリックで削除' : ''}>

<input type="checkbox" checked={task.done} onChange={()=>toggleDone(index)}  disabled={isDeleteMode}/>  

{isEditMode&&editingIndex===index?(
<EditTaskInput editedText={editedText}setEditedText={setEditedText} handleText={handleText}/>):
(<span className={task.done ? 'done' : ''}>{task.text}</span>)}</li>)}


