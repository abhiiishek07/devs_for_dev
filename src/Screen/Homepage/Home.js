import React from "react";
import styled from "styled-components";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useState } from "react";
import ProfileCard from "../../Components/Cards/ProfileCard";
import { useSelector } from "react-redux";
function Home(props) {
  // console.log("home me", props.allUsersList);
  const users = useSelector((state) => state.allUsers);
  const [usersData, setUsersData] = useState(users);
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
  const animatedComponents = makeAnimated();
  const customStyles = {
    control: (base) => ({
      ...base,
      height: 60,
      width: 1200,
      backgroundColor: "#f3f6f9",
    }),
  };

  return (
    <Container>
      <div className="wrapper">
        <div className="searchBar">
          <Select
            // menuPlacement="top"
            // autoFocus
            isMulti
            components={animatedComponents}
            isSearchable
            placeholder="Search by Skills 🚀"
            // onChange={(e) => setSearchedSkills(e)}
            styles={customStyles}
            options={skillOptions}
          />
        </div>
        <div className="cardsContainer">
          {usersData.map((user) => {
            return (
              <ProfileCard
                fullname={user.fullName}
                bio={user.bio}
                branch={user.branch}
                section={user.section}
                passingYear={user.passingYear}
                linkedin={user.linkedin}
                github={user.github}
                twitter={user.twitter}
                skills={user.skills}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  /* background-color: aliceblue; */
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  /* align-items: center; */
  .searchBar {
    width: 100%;
    height: 10vh;
    /* border: 1px solid red; */
    margin-top: 3rem;
  }
  .wrapper {
    width: 80%;
    height: auto;
    /* border: 2px solid black; */
    margin-left: 3rem;
  }
  .cardsContainer {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
    gap: 1.3rem;
    flex-wrap: wrap;
    /* background-color: red; */
    width: 99%;
    height: auto;
  }
`;

export default Home;
