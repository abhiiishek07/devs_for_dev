import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Screen/Login/Login";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./Screen/Homepage/Home";
import { useSelector } from "react-redux";
import Profile from "./Screen/Profile/Profile";
import { useDispatch } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./Firebase/FirebaseAuth";
import { useEffect } from "react";
import { updateProfileData } from "./store/profileDataSlice";
function App() {
  const user = useSelector((state) => state.auth);
  let dispatch = useDispatch();
  const getAllUsersData = async () => {
    const userRef = doc(db, "users", user[1]);
    const docSnap = await getDoc(userRef);
    console.log("docy", docSnap.data());
    dispatch(updateProfileData(docSnap.data()));
  };
  useEffect(() => {
    getAllUsersData();
  });
  return (
    <>
      <BrowserRouter>
        {user.length === 0 ? (
          <Routes>
            {" "}
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Navigate to="/" />} />
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
