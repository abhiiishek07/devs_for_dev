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

function Profile() {
  const user = useSelector((state) => state.auth);
  const userProfileData = useSelector((state) => state.profileData);
  const [profileData, setProfileData] = useState(userProfileData);
  const [bgImg, setBgImg] = useState("");
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
      image: "",
    },
    {
      id: "3",
      value: "CSS",
      label: "CSS",
      image:
        "data:image/png;base64,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",
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
    {
      id: "22",
      value: "Kotlin",
      label: "Kotlin",
    },
    {
      id: "23",
      value: "Flutter",
      label: "Flutter",
    },
    {
      id: "24",
      value: "IOS Dev",
      label: "IOS Dev",
    },
    {
      id: "25",
      value: "AWS",
      label: "AWS",
    },
  ];
  const uploadUserData = async () => {
    // let bgImg = "";
    // fetch(`https://source.unsplash.com/1600x900/?coding`).then((response) => {
    //   bgImg = response.url;
    //   console.log("hfjs", bgImg);
    // });
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
      profilePic: user[2],
      uid: user[1],
      bgImg: bgImg,
    })
      .then(() => {
        console.log("Data updated");
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log("cry aa raha", user);
  };
  const getBgImage = () => {
    fetch(`https://source.unsplash.com/1600x900/?tech`).then((response) => {
      console.log("bg img is", response.url);
      setBgImg(response.url);
    });
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
    getBgImage();
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
