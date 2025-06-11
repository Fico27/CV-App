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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEducation = { ...formData, id: Date.now() };
    setEducationInfo((prev) => [...prev, newEducation]);

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

        {educationInfo.map((entry) => (
          <div>
            {entry.schoolName}
            <div>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        ))}

        <label htmlFor="schoolName">School: </label>
        <input
          type="text"
          name="schoolName"
          id="schoolName"
          value={formData.schoolName}
          onChange={handleChange}
        />

        <label htmlFor="degree">Degree: </label>
        <input
          type="text"
          id="degree"
          name="degree"
          value={formData.degree}
          onChange={handleChange}
        />

        <label htmlFor="schoolStartDate">Start: </label>
        <input
          type="text"
          id="schoolStartDate"
          name="start"
          value={formData.start}
          onChange={handleChange}
        />

        <label htmlFor="schoolEndDate">End: </label>
        <input
          type="text"
          id="schoolEndDate"
          name="end"
          value={formData.end}
          onChange={handleChange}
        />
        <button type="submit">Add Education</button>
      </form>
    </div>
  );
}

export default Education;
