import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Screen/Login/Login";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./Screen/Homepage/Home";
import { useSelector } from "react-redux";
import Profile from "./Screen/Profile/Profile";
import { useDispatch } from "react-redux";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./Firebase/FirebaseAuth";
import { useEffect } from "react";
import { updateProfileData } from "./store/profileDataSlice";
import { setUser } from "./store/allUsersSlice";
// import Home from "./Screen/Homepage/Home";
function App() {
  const user = useSelector((state) => state.auth);
  let dispatch = useDispatch();
  const allUsersList = [];
  const getAllUsersData = async () => {
    // const allUsersList = [];
    const userRef = doc(db, "users", user[1]);
    const docSnap = await getDoc(userRef);
    dispatch(updateProfileData(docSnap.data()));

    const allUsersRef = await getDocs(collection(db, "users"));

    allUsersRef.forEach((user) => {
      allUsersList.push(user.data());
      // dispatch(setUser(user.data()));
    });
    console.log("in app", allUsersList);
    dispatch(setUser(allUsersList));
    // <Home allUsersList={allUsersList} />;
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
