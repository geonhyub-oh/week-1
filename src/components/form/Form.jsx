import React, { useState } from 'react'
import Layout from '../layout/Layout';
import List from '../list/List';
import "./style.css";


function  Form() {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [done, setDone] = useState(false)
  const [todolist, setTodolist] = useState([
    {
      id: 0,
      title: "리액트 공부를 하자",
      comment:"리액트 기초 공부를 합니다",
      done: false
    },
    
  ])
  const [donelist, setDonelist] = useState([
    {
      id: 1,
      title: "리액트 공부를 하자",
      comment: "리액트 기초 공부를 합니다",
      done:true
    },
  ]);

  

  const tonRemove = id => {
    setTodolist(todolist.filter(todos => todos.id !== id));}
  
    const doneRemove = id => {
    setDonelist(donelist.filter(dones => dones.id !== id));}
  

 

   return(
     <>
    <div  className="form-container" id="title"  >
      <p>제목</p><input value={title} type="text" className="input-title" onChange={(event) => {
          setTitle(event.target.value);
        }}></input>
      <p>내용</p><input value={comment} type="text" className="input-comment" onChange={(event) => {
          setComment(event.target.value)
          ;
        }} ></input>
      <button  className="btn-add" id="btnadd" onClick={() => {
          setTodolist([...todolist, { id: todolist.length + 1, title: title ,comment: comment,done:false }])
          setTitle("")
          setComment("");
        }} >추가하기</button>
   
    </div>
    <Layout setDone={setDone} done={done} todolist={todolist} setTodolist={setTodolist} tonRemove={tonRemove} 
    setDonelist={setDonelist} donelist={donelist} doneRemove={doneRemove}/>
    
    <List setDone={setDone} done={done} todolist={todolist} setTodolist={setTodolist} tonRemove={tonRemove}
   setDonelist={setDonelist} donelist={donelist} doneRemove={doneRemove}
    />
    </>
  )
  }
  export default Form;