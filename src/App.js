import {useState} from 'react'
import "./App.css";
import Sidebar from "./companents/sidebar/Sidebar";
import Header from "./companents/header/Header";
import Home from "./pages/Home";
import SideIcons from "./companents/sidebar/SideIcons";
import { Container } from "react-bootstrap";
import './style/_base.scss'

function App() {
  const [visible, setVisible] = useState(true);

const handleClick =()=>{
  setVisible(!visible)
}
  return (
    <div className="app">
      <Header handleClick= {handleClick}/>
    
      <div className="app__container">
       {visible? <Sidebar/>: <SideIcons/>}
        
        <Container fluid className="app__main ">
          <Home />
        </Container>
      </div>
    </div>
  );
}

export default App;
