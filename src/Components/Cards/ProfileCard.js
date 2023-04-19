import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import { useSelector } from "react-redux";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";

function ProfileCard(props) {
  // const user = useSelector((state) => state.auth);
  // console.log("in card", props.profilePic);
  const [showSkills, setShowSkill] = useState(false);
  return (
    <>
      <Wrapper>
        <div className="background_img">
          <img className="bg_img" src={props.bgImg} alt="bg" />
          <div className="profile_img">
            <img className="pf_img" src={props.profilePic} alt="user" />
          </div>
        </div>

        {!showSkills ? (
          <>
            <div className="bio_div">
              <div>
                <ImQuotesLeft style={{ marginRight: "0.5rem" }} />
                {props.bio}
                <ImQuotesRight style={{ marginLeft: "0.5rem" }} />
              </div>
            </div>
            <div className="info_div">
              <h3 className="fullname">{props.fullname}</h3>
              <h5 className="basic_info">
                {props.branch} {props.section} {props.passingYear - 4}-
                {props.passingYear}{" "}
              </h5>
            </div>
            <div className="social_div">
              <IconButton
                href={props.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon
                  fontSize="small"
                  style={{
                    color: "#0A66C2",
                    cursor: "pointer",
                    margin: "0rem",
                  }}
                />
              </IconButton>
              <IconButton
                href={props.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon
                  fontSize="small"
                  style={{
                    color: "#4078c0",
                    cursor: "pointer",
                    margin: "0rem",
                  }}
                />
              </IconButton>
              <IconButton
                href={props.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon
                  fontSize="small"
                  style={{
                    color: "#1DA1F2",
                    cursor: "pointer",
                    margin: "0rem",
                  }}
                />
              </IconButton>
            </div>
          </>
        ) : (
          <div className="skills_div">
            {props.skills.map((skill) => {
              console.log("jjnjn", skill);
              return (
                <div className="skill_wrapper">
                  <div className="skill_img">
                    <img src={skill.image} alt="skill" />
                  </div>
                  <div>{skill.value}</div>
                </div>
              );
            })}
          </div>
        )}
        <hr />
        <div className="showSkillsWrap">
          <Button onClick={() => setShowSkill(!showSkills)}>
            {showSkills ? "Hide Skills" : "Show Skills"}
          </Button>
        </div>
      </Wrapper>
    </>
  );
}
// render(<Cont />, document.getElementById("root"));
const Wrapper = styled.div`
  height: 50vh;
  width: 20rem;
  border-radius: 0.8rem;
  /* background-color: aliceblue; */
  box-shadow: 0 2px 5px gray;
  transition: transform 0.2s;
  /* :hover {
    transform: scale(1.02);
  } */
  /* border-radius: 0.5rem; */
  transition: all 0.2s ease;
  /* margin: 1.5rem 5.5rem 0 0; */
  overflow: hidden;
  /* :hover {
    height: 60vh;
    position: relative;
    margin-bottom: -60px;
  } */
  /* :hover .skills_div {
    z-index: 9999;
  } */
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
    height: 8vh;
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    margin-left: 2rem;
  }
  .info_div {
    /* background-color: yellow; */
    width: 80%;
    height: 7vh;
    margin-left: 2rem;
    /* line-height: 1rem; */
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
    line-height: 30px;
    word-spacing: 10px;
    color: #454545;
  }
  .skills_div:hover {
    z-index: 1;
  }
  .social_div {
    /* background-color: red; */
    height: 3vh;
    display: flex;
    /* justify-content: center; */
    /* gap: 1rem; */
    width: 80%;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    margin-left: 1.5rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;

    /* margin-bottom: 0.8rem; */
  }
  .showSkillsWrap {
    margin: 0;
    height: 4vh;
    display: flex;
    justify-content: center;
    color: #19c0a6;
    /* background-color: red; */
    /* position: absolute; */
  }
  .skills_div {
    /* background-color: pink; */
    height: 19vh;
    margin-top: 4rem;
    margin-left: 2rem;
    /* padding: 0.2rem; */
    /* transition: all ease 1s; */
    width: 80%;
    /* -webkit-transition: all 250ms ease;
    -moz-transition: all 250ms ease;
    -o-transition: all 250ms ease;
    transition: all 250ms ease;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -o-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d; */
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    flex-wrap: wrap;
    /* justify-content: space-around; */
    align-content: flex-start;
  }
  .skill_text {
    margin: 0;
    padding: 0;
    /* background-color: red; */
    /* width: auto;
     */
    /* margin: 0 4px 0 4px; */
    padding: 2px;
    display: inline;
  }
  .skill_wrapper {
    display: flex;
    justify-content: center;
    /* color-interpolation-filters: ; */
    width: auto;
    height: 25px;
    /* background-color: #19c0a6; */
    margin: 0;
    padding: 0;
    /* gap: 0.1rem; */
    max-height: inherit;
    margin: 0.3rem;
    /* overflow-y: auto; */
  }
  .skill_img {
    /* background-color: red; */
    width: 20px;
    height: inherit;
    /* object-fit: cover; */
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
`;

export default ProfileCard;
