export default function EditTaskInput({editedText,setEditedText,handleText}){return(
<input type='text' value={editedText} 
onChange={(e)=>{setEditedText(e.target.value)}} onblur={handleText} 
onKeyDown={(e)=>{if(e.key==='Enter'){handleText()}}} autoFocus/>)}
