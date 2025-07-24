import { useState,useEffect } from "react";

export default function useTasks(){
const [tasks,setTasks]=useState(()=>{
const saved = localStorage.getItem('tasks');
return saved? JSON.parse(saved):[ 
{ text: 'サンプルタスク１', done: false },
{ text: 'サンプルタスク２', done: true },
{ text: 'サンプルタスク３', done: false }]});

useEffect(()=>{localStorage.setItem('tasks',JSON.stringify(tasks))},[tasks]);

const addTasks=(text)=>{
const newTasks={text,done:false};
setTasks([...tasks,newTasks]);
};

const toggleDone=(index)=>{
const updatetasks=[...tasks];
updatetasks[index].done=!updatetasks[index].done 
setTasks(updatetasks) ;
};

return{
    tasks,
    setTasks,
    addTasks,
    toggleDone,
    deleteSelectedTasks,
    updateTaskText,}
  };