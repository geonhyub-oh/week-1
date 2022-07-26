import "./style.css";


function List() {
    return(
      <div className="list-container" id="list">
      <div> <h2 className="done">Done..! 🎉</h2> 
      <div className="done-container" id="donecontainer">
      <div>
        <h2 className="listtitle">리액트 공부하기</h2>
        <div>리액트 기초를 공부해봅시다.</div>
      </div>
      <div className="list-wrapper" id="layout"  >
      <div className="btnset">
      <button className="btn1-container" id="btn1"> 삭제하기 </button>
      <button className="btn2-container" id="btn2"> 완료 </button> </div>
      </div>
      </div>
      </div>
      </div>
    
  )
  }
  export default List;

