import { useState } from "react";

function Education({ educationInfo, setEducationInfo }) {
  const [formData, setFormData] = useState({
    schoolName: "",
    degree: "",
    start: "",
    end: "",
  });

  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId !== null) {
      const updatedEntry = { ...formData, id: editId };
      setEducationInfo((prev) =>
        prev.map((entry) => (entry.id === editId ? updatedEntry : entry))
      );
      setEditId(null);
    } else {
      const newEducation = { ...formData, id: Date.now() };
      setEducationInfo((prev) => [...prev, newEducation]);
    }

    setFormData({
      schoolName: "",
      degree: "",
      start: "",
      end: "",
    });
  };

  const handleDelete = (id) => {
    setEducationInfo(educationInfo.filter((entry) => entry.id !== id));
  };

  const handleEdit = (entry) => {
    setFormData({
      schoolName: entry.schoolName,
      degree: entry.degree,
      start: entry.start,
      end: entry.end,
    });
    setEditId(entry.id);
  };

  return (
    <div className="educationContainer">
      <h2>Education</h2>
      {educationInfo.map((entry) => (
        <div>
          {entry.schoolName}
          <div>
            <button onClick={() => handleEdit(entry)}>Edit</button>
            <button onClick={() => handleDelete(entry.id)}>Delete</button>
          </div>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <label htmlFor="schoolName">School: </label>
        <input
          type="text"
          name="schoolName"
          id="schoolName"
          value={formData.schoolName}
          onChange={handleChange}
          required
        />

        <label htmlFor="degree">Degree: </label>
        <input
          type="text"
          id="degree"
          name="degree"
          value={formData.degree}
          onChange={handleChange}
          required
        />

        <label htmlFor="schoolStartDate">Start: </label>
        <input
          type="text"
          id="schoolStartDate"
          name="start"
          value={formData.start}
          onChange={handleChange}
          required
        />

        <label htmlFor="schoolEndDate">End: </label>
        <input
          type="text"
          id="schoolEndDate"
          name="end"
          value={formData.end}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Education</button>
      </form>
    </div>
  );
}

export default Education;
