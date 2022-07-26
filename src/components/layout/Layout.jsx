
import "./style.css";

function Layout() {
    return(
      <div className="layout-container" id="layout">
      <div> <h2 className="working">Working..🔥</h2> 
      <div className="todo-container" id="todocontainer">
      <div>
        <h2 className="todotitle">리액트 공부하기</h2>
        <div>리액트 기초를 공부해봅시다.</div>
      </div>
      <div className="layout-wrapper" id="layout"  >
      <div className="btnset">
      <button className="btn1-container" > 삭제하기 </button>
      <button className="btn2-container" > 완료 </button> </div>
      </div>
      </div>
      </div>
      </div>
    
  )
  }
  export default Layout;