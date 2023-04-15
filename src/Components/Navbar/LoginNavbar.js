import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { signInWithGoogle } from "../../Firebase/FirebaseAuth";
import { useSelector, useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../../store/authSlice";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase/FirebaseAuth";
function Navbar() {
  // const user = useSelector((state) => state.auth);
  const auth = getAuth();
  const dispatch = useDispatch();
  const addNewUser = async (uid) => {
    const userRef = doc(db, "users", uid);
    const data = {
      fullName: "",
      bio: "",
      branch: "",
      section: "",
      passingYear: "",
      linkedin: "",
      github: "",
      twitter: "",
      skills: [],
    };
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      console.log("user exits");
    } else {
      setDoc(userRef, data)
        .then(() => {
          console.log("Document has been added successfully");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser([user.displayName, user.uid, user.photoURL]));
        addNewUser(user.uid);
        // dispatch(userProfileData(initialData));
      } else {
        dispatch(removeUser([]));
      }
    });
  }, []);
  return (
    <Wrapper>
      <ImageWrapper>
        <img
          className="image"
          src="https://st2.depositphotos.com/5040187/10327/v/600/depositphotos_103276866-stock-illustration-monogram-negative-space-letter-logo.jpg"
          alt="clapingo"
          height={88}
        />
      </ImageWrapper>
      <TempWrapper></TempWrapper>
      <ButtonWrapper>
        <Button
          onClick={signInWithGoogle}
          style={{
            height: 35,
            width: 100,
            borderRadius: 20,
            backgroundColor: "#19c0a6",
            color: "#ffffff",
            marginLeft: "6rem",
          }}
        >
          <PermIdentityIcon style={{ height: 30 }} />
          <h3>login</h3>
        </Button>{" "}
      </ButtonWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  height: 90px;
  left: 0px;
  top: 0px;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 2px 22px rgba(82, 164, 154, 0.08),
    inset 0px -1px 0px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: row;
`;
const ImageWrapper = styled.div`
  width: 30%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  .image {
    cursor: pointer;
  }
  /* background-color: red; */
`;
const TempWrapper = styled.div`
  width: 40%;
`;
const ButtonWrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    padding: 1rem;
  }
`;
export default Navbar;
