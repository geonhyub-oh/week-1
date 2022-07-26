import React from "react";
import Form from './components/form/Form'
import Header from './components/header/Header'
import Layout from './components/layout/Layout'
import List from './components/list/List'
import "./App.css";

function App() {
  return(
  <div  className="app-container" id="app"  >
  <Header/>  
  <Form/>
  {/* <Layout/> */}
  <List/>
  </div>
)}

export default App;