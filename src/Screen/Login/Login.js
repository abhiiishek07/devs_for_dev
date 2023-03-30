import React from "react";
import styled from "styled-components";
import Navbar from "../../Components/Navbar/LoginNavbar";
import Lottie from "lottie-react";
import student from "../../Lottie/student.json";
import girl from "../../Lottie/girl.json";
import Footer from "../../Components/Footer/Footer";
function Login() {
  return (
    <>
      <Navbar />
      <Container>
        <TextWrapper>
          <text className="text">
            Welcome to <span className="temp">Devs For Dev</span>, your home for
            finding study partner and connecting with students with similar
            <span className="temp"> skills and interests</span>.
          </text>
        </TextWrapper>
        <LottieWrapper top="92px" left="750px">
          <Lottie
            animationData={student}
            loop={true}
            style={{
              top: "-20%",
              right: "-13%",
              // height: "130%",
              zIndex: -1,
              overflow: "hidden",
              position: "absolute",
              width: "100%",
            }}
          />
        </LottieWrapper>
        <div className="gradient-bg"></div>
      </Container>
      <FeatureWrapper top="780px" left="730px">
        {" "}
        <h3>1. Sign In</h3>
        <p>Simply click on Login Button to SignIn with your google account.</p>
      </FeatureWrapper>
      <FeatureWrapper top="780px" left="1100px">
        {" "}
        <h3>2. Create your profile</h3>
        <p>
          Create a profile to showcase your skills, interests, and achievements,
          making it easier for others to find and connect with you.
        </p>
      </FeatureWrapper>
      <FeatureWrapper top="1000px" left="780px">
        {" "}
        <h3>3. Browse skills</h3>
        <p>
          you can browse different skills to find others with similar interests
          and abilities.
        </p>
      </FeatureWrapper>
      <FeatureWrapper top="1000px" left="1150px">
        {" "}
        <h3>4. Chat and Messaging</h3>
        <p>
          DFD includes a built-in chat and messaging system, making it easy for
          students to communicate with each other and collaborate on projects.
        </p>
      </FeatureWrapper>
      <LottieWrapper top="780px" left="-50px">
        <Lottie
          animationData={girl}
          loop={true}
          style={{
            top: "-20%",
            right: "-13%",
            // height: "130%",
            zIndex: -1,
            overflow: "hidden",
            position: "absolute",
            width: "100%",
          }}
        />
      </LottieWrapper>
      <Footer />
    </>
  );
}
const Container = styled.div`
  width: 100%;
  height: auto;
  /* background-color: red; */
  .gradient-bg {
    position: absolute;
    width: 600px;
    height: 570px;
    left: 919px;
    top: 690px;
    background: linear-gradient(
      270deg,
      #00d2ff -13.02%,
      rgba(0, 210, 255, 0) 103.77%
    );
  }
`;
const TextWrapper = styled.div`
  width: 42%;
  height: 60vh;
  position: absolute;
  top: 130px;
  left: 180px;
  /* margin-left: 11rem; */
  /* background-color: red; */
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
  .text {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 70px;
    /* padding-left: 9rem; */
    letter-spacing: -0.01em;
    font-feature-settings: "liga" off;
    /* margin: 2rem 0 0 0; */
    color: #001f27;
    .temp {
      color: #19c0a6;
    }
  }
`;
const LottieWrapper = styled.div`
  position: absolute;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  height: 60vh;
  width: 44%;
`;
const FeatureWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 343px;
  height: 175px;
  font-family: "Montserrat", sans-serif;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  border-left: 1.5px solid black;
  border-top: 0.5px solid black;
  background: #ffffff;
  padding: 0.5rem;
  box-shadow: 26px 26px 23px rgba(204, 210, 212, 0.36);
  border-radius: 12px;
`;
export default Login;
