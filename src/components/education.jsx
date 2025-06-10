import { useState } from "react";

function Education({ educationInfo, setEducationInfo }) {
  const [formData, setFormData] = useState({
    schoolName: "",
    degree: "",
    start: "",
    end: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEducation = { ...formData, id: Date.now() };
    setEducationInfo([...educationInfo, newEducation]);

    setFormData({
      schoolName: "",
      degree: "",
      start: "",
      end: "",
    });
    console.log("Form reset, schoolName:", formData.schoolName);
  };

  return (
    <div className="educationContainer">
      <form onSubmit={handleSubmit}>
        <h2>Education</h2>

        <label htmlFor="schoolName">School: </label>
        <input
          type="text"
          name="schoolName"
          id="schoolName"
          key={formData.schoolName}
          value={formData.schoolName}
          onChange={(e) => {
            e.target.value;
          }}
        />

        <label htmlFor="degree">Degree: </label>
        <input
          type="text"
          id="degree"
          name="degree"
          onChange={(e) => {
            setEducationInfo({ ...educationInfo, degree: e.target.value });
          }}
        />

        <label htmlFor="schoolStartDate">Start: </label>
        <input
          type="text"
          id="schoolStartDate"
          name="schoolStartDate"
          onChange={(e) => {
            setEducationInfo({ ...educationInfo, start: e.target.value });
          }}
        />

        <label htmlFor="schoolEndDate">Start: </label>
        <input
          type="text"
          id="schoolEndDate"
          name="schoolEndDate"
          onChange={(e) => {
            setEducationInfo({ ...educationInfo, end: e.target.value });
          }}
        />
        <button type="submit">Add Education</button>
      </form>
    </div>
  );
}

export default Education;
