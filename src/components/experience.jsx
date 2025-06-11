import { useState } from "react";

function Experience({ experienceInfo, setExperienceInfo }) {
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    description: "",
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
      setExperienceInfo((prev) =>
        prev.map((entry) => (entry.id === editId ? updatedEntry : entry))
      );
      setEditId(null);
    } else {
      const newExperience = { ...formData, id: Date.now() };
      setExperienceInfo((prev) => [...prev, newExperience]);
    }

    setFormData({
      company: "",
      role: "",
      description: "",
      start: "",
      end: "",
    });
  };

  const handleDelete = (id) => {
    setExperienceInfo(experienceInfo.filter((entry) => entry.id !== id));
  };

  const handleEdit = (entry) => {
    setFormData({
      company: entry.company,
      role: entry.role,
      description: entry.description,
      start: entry.start,
      end: entry.end,
    });
    setEditId(entry.id);
  };

  return (
    <div className="experienceContainer">
      <h2>Experience</h2>
      {experienceInfo.map((entry) => (
        <div>
          {entry.company}
          <div>
            <button onClick={() => handleEdit(entry)}>Edit</button>
            <button onClick={() => handleDelete(entry.id)}>Delete</button>
          </div>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <label htmlFor="company">Company: </label>
        <input
          type="text"
          name="company"
          id="company"
          value={formData.company}
          onChange={handleChange}
          required
        />

        <label htmlFor="role">Role: </label>
        <input
          type="text"
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description: </label>
        <textarea
          type="textarea"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label htmlFor="jobStartDate">Start: </label>
        <input
          type="text"
          id="start"
          name="start"
          value={formData.start}
          onChange={handleChange}
          required
        />
        <label htmlFor="jobEndDate">End: </label>
        <input
          type="text"
          id="end"
          name="end"
          value={formData.end}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Experience</button>
      </form>
    </div>
  );
}

export default Experience;
