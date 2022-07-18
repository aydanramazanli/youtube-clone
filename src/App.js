import "./App.css";
import Sidebar from "./companents/sidebar/Sidebar";
import Header from "./companents/header/Header";
import Home from "./pages/Home";
import { Container } from "react-bootstrap";
import './style/_base.scss'

function App() {
  return (
    <>
      <Header />
      <div className="app__container">
        <Sidebar />
        <Container fluid className="app__main ">
          <Home />
        </Container>
      </div>
    </>
  );
}

export default App;
