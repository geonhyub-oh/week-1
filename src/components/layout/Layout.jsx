import "./style.css";

function Layout({setDone, done, todolist,setTodolist,Delete,tonRemove,donelist,setDonelist}) {
 

    return(
      <div className="layout-container" id="layout">
       <div><h2 className="working">Working..🔥</h2>
      
       <div className="oh">
       {todolist.filter((todos) => todos.done === false)
            .map((el) => (
            <div key={el.id} className="todo-container" id="todocontainer">
              <h2 className="listtitle">{el.title}</h2>
              <div>{el.comment}</div>
            <div className="list-wrapper" id="layout"  >
            <div className="btnset">
            <button className="btn1-container" id="btn1" onClick={()=> tonRemove(el.id)} > 삭제하기 </button>
            <button className="btn2-container" id="btn2" onClick={() => {
                      tonRemove(el.id)
                      setDonelist([
                        ...donelist,
                        {
                          id: el.id,
                          title: el.title,
                          comment: el.comment,
                          done:true,
                        },
                      ])
                    }}
                  > 완료</button> </div>
                    
      </div>
      </div>
      ))}
      </div>
     </div>
     </div>
      
  )
  }
  export default Layout;