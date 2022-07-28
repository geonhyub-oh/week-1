import "./style.css";


function List({setDone, done, todolist,setTodolist,Delete,donelist,setDonelist,doneRemove}) {
  
  return(
      
      <div className="list-container" id="list">
      <div> <h2 className="donee">Done..! 🎉</h2> 



      <div className="ohh">
      {donelist.filter((dones) => dones.done === true)
      .map((don) => (
      <div key={don.id} className="done-container" id="donecontainer">
        <h2 className="listtitle">{don.title}</h2>
        <div>{don.comment}</div>
      <div className="list-wrapper" id="layout"  >
      <div className="btnset">
      <button className="btn1-container" id="btn1" onClick={()=> doneRemove(don.id)} > 삭제하기 </button>
      <button className="btn2-container" id="btn2" onClick={() =>{
                      doneRemove(don.id)
                      setTodolist([
                        ...todolist,
                        {
                          id: don.id,
                          title: don.title,
                          comment: don.comment,
                          done,
                         },
                      ])
                      
                    }}> 취소 </button> </div>
      </div>
      </div>
      ))}
      </div>


      </div>
      </div>
      
        )
        }
  export default List;