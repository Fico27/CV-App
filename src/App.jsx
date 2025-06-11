import { useState } from "react";
import "./App.css";
import GeneralInfo from "./components/generalInfo.jsx";
import Cv from "./components/cv.jsx";
import Education from "./components/education.jsx";
import Experience from "./components/experience.jsx";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    location: "",
    phone: "",
  });

  const [educationInfo, setEducationInfo] = useState([]);

  // const [educationInfo, setEducationInfo] = useState({
  //   schoolName: "",
  //   degree: "",
  //   start: "",
  //   end: "",
  // });

  const [experienceInfo, setExperienceInfo] = useState([]);
  return (
    <div className="mainHolder">
      <div className="formHolder">
        <GeneralInfo
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
        />
        <Education
          educationInfo={educationInfo}
          setEducationInfo={setEducationInfo}
        />
        <Experience
          experienceInfo={experienceInfo}
          setExperienceInfo={setExperienceInfo}
        />
      </div>
      <Cv
        generalInfo={generalInfo}
        educationInfo={educationInfo}
        experienceInfo={experienceInfo}
      />
    </div>
  );
}

export default App;
