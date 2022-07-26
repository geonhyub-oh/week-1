import React, { useState } from 'react'
import Layout from '../layout/Layout';
import "./style.css";


function  Form() {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [done, setDone] = useState(false)
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "건협이 소유권",
      comment:"김지은",
      done,
    },
  ])

  const onRemove = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

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
          setTodos([...todos, { id: todos.length + 1, title: title ,comment: comment}])
          setTitle("")
          setComment("");
        }} >추가하기</button>
        
        {/* <div className="todos-container" >
        {todos.map((todo) => (
        <div className="todo" key={todo.id}>
        {todo.title}{todo.comment}
        </div>
          ))}
        </div> */}
    </div>
    <Layout setDone={setDone} done={done} todos={todos} setTodos={setTodos} onRemove={onRemove}/>
    
    </>
  )
  }
  export default Form;