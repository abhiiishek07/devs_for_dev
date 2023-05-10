import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Screen/Login/Login";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./Screen/Homepage/Home";
import { useSelector } from "react-redux";
import Profile from "./Screen/Profile/Profile";

function App() {
  const user = useSelector((state) => state.auth);

  return (
    <>
      <BrowserRouter>
        {user.length === 0 ? (
          <Routes>
            {" "}
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        ) : (
          <Routes>
            {" "}
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Home />
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  <Navbar />
                  <Profile />
                </>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
