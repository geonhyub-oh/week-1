import React, { useState } from 'react'
import "./style.css";


function Form() {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "react를 배워봅시다.",
    },
  ]);
  
   return(
    <div  className="form-container" id="title"  >
      
      <p>제목</p><input  type="text" className="input-title" id="input1"  onChange={(event) => {
          setTitle(event.target.value);
        }}></input>
      <p>내용</p><input  type="text" className="input-comment" id="input2" onChange={(event) => {
          setComment(event.target.value);
        }} ></input>
      <button  className="btn-add" id="btnadd" onClick={() => {
          setTodos([...todos, { id: todos.length + 1, title: title ,comment: comment}]);
        }} >추가하기</button>
        
        <div className="todos-container" >
        {todos.map((todo) => (
        <div className="todo" key={todo.id}>
        {todo.title}{todo.comment}
        </div>
          ))}
        </div>
    
    </div>
    
    
  )
  }
  export default Form;