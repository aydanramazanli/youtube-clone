import { useState } from "react";
import "./App.css";
import Sidebar from "./companents/sidebar/Sidebar";
import SideIcons from "./companents/sidebar/SideIcons";
import Header from "./companents/header/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Container } from "react-bootstrap";
import "./style/_base.scss";
import { BrowserRouter, Routes, Route} from "react-router-dom";



const Layout = ({ children }) => {
  console.log(children);
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <div className="app">
      <Header handleClick={handleClick} />
      <div className="app__container">
        {visible ? <Sidebar /> : <SideIcons />}
        <Container fluid className="app__main ">
          {children}
        </Container>
      </div>
    </div>
  );
};

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Layout>
                <Home />
              </Layout>
            }
          ></Route>

          <Route path="/auth" element={<Login />} />

          <Route
            path="/search"
            exact
            element={
              <Layout>
              <h1>Search Results</h1>
              </Layout>
            }
          ></Route>

<Route
        path="*"
         element={
          <Layout>
            <Home />
          </Layout>
        }
    />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
