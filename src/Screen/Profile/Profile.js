import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { TextField } from "@mui/material";
import Select from "react-select";
import MenuItem from "@mui/material/MenuItem";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import makeAnimated from "react-select/animated";
import { useDispatch } from "react-redux";
import { updateProfileData } from "../../store/profileDataSlice";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../Firebase/FirebaseAuth";
// import { Height } from "@mui/icons-material";

function Profile() {
  const user = useSelector((state) => state.auth);
  const userProfileData = useSelector((state) => state.profileData);
  const [profileData, setProfileData] = useState(userProfileData);
  const { handleSubmit } = useForm();
  const dispatch = useDispatch();
  const animatedComponents = makeAnimated();
  const branches = ["CSE", "IT", "CCE", "DSE", "ECE", "EEE", "MEC"];
  const sections = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const skillOptions = [
    {
      id: "2",
      value: "HTML",
      label: "HTML",
    },
    {
      id: "3",
      value: "CSS",
      label: "CSS",
    },
    {
      id: "1",
      value: "Javascript",
      label: "Javascript",
    },
    {
      id: "0",
      value: "React JS",
      label: "React JS",
    },

    {
      id: "4",
      value: "Angular JS",
      label: "Angular JS",
    },
    {
      id: "5",
      value: "Vue JS",
      label: "Vue JS",
    },
    {
      id: "6",
      value: "Material UI",
      label: "Material UI",
    },
    {
      id: "7",
      value: "Ant Design",
      label: "Ant Design",
    },
    {
      id: "8",
      value: "Chakra UI",
      label: "Chakra UI",
    },
    {
      id: "9",
      value: "UI/UX",
      label: "UI/UX",
    },
    {
      id: "10",
      value: "Node JS",
      label: "Node JS",
    },
    {
      id: "11",
      value: "Express JS",
      label: "Express JS",
    },
    {
      id: "12",
      value: "MongoDB",
      label: "MongoDB",
    },
    {
      id: "13",
      value: "Go",
      label: "Go",
    },
    {
      id: "14",
      value: "SQL",
      label: "SQL",
    },
    {
      id: "15",
      value: "C/C++",
      label: "C/C++",
    },
    {
      id: "16",
      value: "JAVA",
      label: "JAVA",
    },
    {
      id: "17",
      value: "Python",
      label: "Python",
    },
    {
      id: "18",
      value: "Ruby",
      label: "Ruby",
    },
    {
      id: "19",
      value: "AI/ML",
      label: "AI/ML",
    },
    {
      id: "20",
      value: "Firebase",
      label: "Firebase",
    },
    {
      id: "21",
      value: "DSA",
      label: "DSA",
    },
  ];
  const uploadUserData = async () => {
    await setDoc(doc(db, "users", user[1]), {
      fullName: profileData.fullName,
      bio: profileData.bio,
      branch: profileData.branch,
      section: profileData.section,
      passingYear: profileData.passingYear,
      linkedin: profileData.linkedin,
      github: profileData.github,
      twitter: profileData.twitter,
      skills: profileData.skills,
    })
      .then(() => {
        console.log("Data updated");
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log("cry aa raha", user);
  };
  const onSubmit = () => {
    console.log(profileData);
    dispatch(updateProfileData(profileData));
    toast.success("Data Updated Successfully 😀", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    uploadUserData();
  };

  const years = ["2023", "2024", "2025", "2026"];
  const customStyles = {
    control: (base) => ({
      ...base,
      minHeight: 60,
      // width: 1200,
      backgroundColor: "#f3f6f9",
    }),
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Wrapper>
            <h3 className="heading">Personal Information </h3>
            <div className="fullnamediv">
              <TextField
                required
                id="outlined-required"
                label="Full Name"
                fullWidth
                value={profileData.fullName}
                onChange={(e) =>
                  setProfileData((prevState) => ({
                    ...prevState,
                    fullName: e.target.value,
                  }))
                }
                style={{ backgroundColor: "#f3f6f9" }}
              />
            </div>
            <div className="biodiv">
              <TextField
                required
                id="outlined-required"
                label="Bio"
                fullWidth
                value={profileData.bio}
                inputProps={{ maxLength: 75 }}
                onChange={(e) =>
                  setProfileData((prevState) => ({
                    ...prevState,
                    bio: e.target.value,
                  }))
                }
                style={{ backgroundColor: "#f3f6f9" }}
              />
            </div>
            <div className="collegeinfodiv">
              <div className="branch_div">
                <TextField
                  required
                  select
                  label="Branch"
                  value={profileData.branch}
                  onChange={(e) =>
                    setProfileData((prevState) => ({
                      ...prevState,
                      branch: e.target.value,
                    }))
                  }
                  style={{ width: 200, backgroundColor: "#f3f6f9" }}
                >
                  {branches.map((branch) => {
                    return (
                      <MenuItem key="{branch}" value={branch}>
                        {branch}
                      </MenuItem>
                    );
                  })}
                </TextField>
              </div>
              <div className="section_div">
                <TextField
                  required
                  select
                  label="Section"
                  value={profileData.section}
                  onChange={(e) =>
                    setProfileData((prevState) => ({
                      ...prevState,
                      section: e.target.value,
                    }))
                  }
                  style={{ width: 200, backgroundColor: "#f3f6f9" }}
                >
                  {sections.map((section, idx) => {
                    return (
                      <MenuItem key={idx} value={section}>
                        {section}
                      </MenuItem>
                    );
                  })}
                </TextField>
              </div>
              <div className="year_div">
                <TextField
                  required
                  select
                  label="Passing Year"
                  value={profileData.passingYear}
                  onChange={(e) =>
                    setProfileData((prevState) => ({
                      ...prevState,
                      passingYear: e.target.value,
                    }))
                  }
                  style={{ width: 200, backgroundColor: "#f3f6f9" }}
                >
                  {years.map((year, idx) => {
                    return (
                      <MenuItem key={idx} value={year}>
                        {year}
                      </MenuItem>
                    );
                  })}
                </TextField>
              </div>
            </div>
            <h3 className="heading">Social Media</h3>
            <div className="socialmedia_div">
              <TextField
                required
                id="outlined-required"
                label={<LinkedInIcon />}
                fullWidth
                value={profileData.linkedin}
                onChange={(e) =>
                  setProfileData((prevState) => ({
                    ...prevState,
                    linkedin: e.target.value,
                  }))
                }
                style={{ marginBottom: "0.9rem", backgroundColor: "#f3f6f9" }}
              />
              <TextField
                required
                id="outlined-required"
                label={<GitHubIcon />}
                fullWidth
                value={profileData.github}
                onChange={(e) =>
                  setProfileData((prevState) => ({
                    ...prevState,
                    github: e.target.value,
                  }))
                }
                style={{ marginBottom: "0.9rem", backgroundColor: "#f3f6f9" }}
              />
              <TextField
                // required
                id="outlined-required"
                label={<TwitterIcon />}
                fullWidth
                value={profileData.twitter}
                onChange={(e) =>
                  setProfileData((prevState) => ({
                    ...prevState,
                    twitter: e.target.value,
                  }))
                }
                style={{ backgroundColor: "#f3f6f9" }}
              />
            </div>
            <h3 className="heading">Skills</h3>
            <div className="skills_div">
              <Select
                // menuPlacement="top"
                autoFocus
                isMulti
                components={animatedComponents}
                isSearchable
                defaultValue={profileData.skills}
                onChange={(e) =>
                  setProfileData((prevState) => ({
                    ...prevState,
                    skills: e,
                  }))
                }
                options={skillOptions}
                styles={customStyles}
              />
            </div>
            <input className="submit_btn" type="submit" value="Save Changes" />
            {/* <input
              className="reset_btn"
              type="reset"
              value="Reset"
              onClick={reset}
            /> */}
          </Wrapper>
          <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </Container>
      </form>
      <FooterDiv>
        Made with ❤️ by {"     "}
        <h3>
          <a
            href="https://www.linkedin.com/in/abhishek-k-96abb6210/"
            target="_blank"
            rel="noreferrer"
          >
            Abhishek
          </a>
        </h3>
      </FooterDiv>
    </>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
  height: 140vh;
  /* background-color: yellow; */
`;
const Wrapper = styled.div`
  margin-top: 4rem;
  width: 50%;
  min-height: 115vh;
  max-height: 100vh;
  height: auto;
  border: 1px solid black;
  border-radius: 0.5rem;
  .fullnamediv,
  .skills_div,
  .biodiv {
    margin: 1rem;
  }
  .collegeinfodiv {
    margin: 1rem;
    display: flex;
    justify-content: space-between;
  }
  .socialmedia_div {
    margin: 1rem;
  }
  .heading {
    padding: 0;
    font-family: "Montserrat", sans-serif;
    margin: 30px 0px 24px 18px;
    color: #5896d4;
  }
  .submit_btn {
    margin: 1rem;
    width: 96%;
    height: 5vh;
    color: white;
    font-family: "Montserrat", sans-serif;
    background-color: #4caf50;
    cursor: pointer;
    border: 0px;
    border-radius: 0.3rem;
  }
  .reset_btn {
    margin: 1rem;
    width: 96%;
    height: 5vh;
    color: white;
    font: bold;
    font-family: "Montserrat", sans-serif;
    background-color: #fd5c63;
    cursor: pointer;
    border: 0px;
    border-radius: 0.3rem;
  }
`;
const FooterDiv = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #001f27;
  color: white;
  top: 1400px;
  a {
    text-decoration: none;
    padding-left: 0.5rem;
    color: white;
  }
`;
export default Profile;
