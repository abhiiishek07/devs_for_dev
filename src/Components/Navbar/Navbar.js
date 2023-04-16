import React, { useEffect } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import { signOutFromGoogle } from "../../Firebase/FirebaseAuth";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { removeUser } from "../../store/authSlice";

function Navbar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth);
  const userProfileData = useSelector((state) => state.profileData);
  console.log(userProfileData.fullName);
  console.log("user in nav", user);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleProfile = () => {
    navigate("/profile");
    setAnchorElUser(null);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("logged in successfully");
      } else {
        dispatch(removeUser([]));
      }
    });
  }, []);
  return (
    <Wrapper>
      <ImageWrapper>
        <img
          onClick={() => navigate("/")}
          className="image"
          src="https://st2.depositphotos.com/5040187/10327/v/600/depositphotos_103276866-stock-illustration-monogram-negative-space-letter-logo.jpg"
          alt="profile"
          height={88}
        />
      </ImageWrapper>
      <TempWrapper></TempWrapper>
      <ButtonWrapper>
        {" "}
        <h2 className="title">
          Hi!{" "}
          {/* {userProfileData.fullName.length > 0
            ? userProfileData.fullName
            : "User"} */}
          {userProfileData.fullName}
          {/* user */}
        </h2>
        <Box sx={{ flexGrow: 0 }}>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar
              alt="user"
              src={user[2]}
              referrerPolicy="no-referrer"
              style={{ height: 42 }}
            />
          </IconButton>

          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleProfile}>
              <Typography textAlign="center">Profile</Typography>
            </MenuItem>
            <MenuItem onClick={signOutFromGoogle}>
              <Typography textAlign="center">Logout</Typography>
            </MenuItem>
          </Menu>
        </Box>
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
    font-family: "Montserrat", sans-serif;
  }
  margin-right: 2rem;
`;
export default Navbar;
