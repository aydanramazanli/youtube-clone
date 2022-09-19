import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Sidebar from "./companents/sidebar/Sidebar";
import SideIcons from "./companents/sidebar/SideIcons";
import Header from "./companents/header/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SearchScreen from "./pages/searchScreen/SearchScreen";
import { Container } from "react-bootstrap";
import "./style/_base.scss";
import "./_app.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import WatchScreen from "./pages/watchScreen/WatchScreen";


const Layout = ({ children }) => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);


  const handleClick = () => {
    setVisible(!visible);
  };

  const { loading, accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!loading && !accessToken) {
      navigate("/auth");
    }
  }, [loading, accessToken, navigate]);

  return (
    <div className="app">
      <Header handleClick={handleClick} />

      <div className="app__container">
        {visible ? <Sidebar handleClick={handleClick} /> : <SideIcons />}
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
		<Route path="/watch/:id" element={ <Layout>
            <WatchScreen />
            </Layout>} />

        <Route
          path="/search/:query"
          element={
            <Layout>
              <SearchScreen />
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
    </>
  );
};

export default App;
