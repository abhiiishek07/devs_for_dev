import React from "react";
import styled from "styled-components";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

function ProfileCard() {
  return (
    <>
      <Wrapper>
        <div className="background_img">
          <img
            className="bg_img"
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="bg"
          />
          <div className="profile_img">
            <img
              className="pf_img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK6jMtoAtv5zD9LQzqTxIc1Amlxq0BnhEsenmoKis&s"
              alt="user"
            />
          </div>
        </div>
        <div className="bio_div">
          <div>
            <ImQuotesLeft style={{ marginRight: "0.5rem" }} />
            developer who is on the never ending path of learning
            <ImQuotesRight style={{ marginLeft: "0.5rem" }} />
          </div>
          {/* <ImQuotesRight /> */}
        </div>
        <div className="info_div">
          <h3 className="fullname">Abhishek Kumar</h3>
          <h5 className="basic_info">CCE B 2020-2024</h5>
          {/* <h5 className="basic_info">2020-2024</h5> */}
        </div>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  height: 50vh;
  width: 20rem;
  border-radius: 0.8rem;
  /* background-color: aliceblue; */
  box-shadow: 0 2px 5px gray;
  transition: transform 0.2s;
  :hover {
    transform: scale(1.07);
  }
  /* border-radius: 0.5rem; */
  .background_img {
    width: 20rem;
    height: 15vh;
    border-radius: 0.8rem;
    /* overflow: hidden; */
  }
  .profile_img {
    background-color: white;
    height: 15vh;
    width: 15vh;
    border-radius: 50%;
    padding: 5px;
    transform: translate(95px, -70px);
  }
  .bg_img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 0.8rem 0.8rem 0 0;
  }
  .pf_img {
    width: 100%;
    height: 100%;
    display: inline-block;
    background-position: 50% 50%;
    background-size: cover;
    border-radius: 50%;
  }
  .bio_div {
    /* background-color: pink; */
    width: 80%;
    height: 9vh;
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    margin-left: 2rem;
  }
  .info_div {
    /* background-color: yellow; */
    width: 80%;
    height: 9vh;
    margin-left: 2rem;
  }
  .fullname {
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
  }
  .basic_info {
    margin: 0;
    padding: 0;
    color: black;
    font-family: "Montserrat", sans-serif;
    line-height: 20px;
    word-spacing: 10px;
  }
`;
export default ProfileCard;
