function Experience({ experienceInfo, setExperienceInfo }) {
  return (
    <div className="experienceContainer">
      <form action="">
        <h2>Experience</h2>

        <label htmlFor="company">Company: </label>
        <input
          type="text"
          name="company"
          id="company"
          onChange={(e) => {
            setExperienceInfo({ ...experienceInfo, company: e.target.value });
          }}
        />

        <label htmlFor="role">Role: </label>
        <input
          type="text"
          id="role"
          name="role"
          onChange={(e) => {
            setExperienceInfo({ ...experienceInfo, role: e.target.value });
          }}
        />

        <label htmlFor="description">Description: </label>
        <textarea
          type="textarea"
          id="description"
          name="description"
          onChange={(e) => {
            setExperienceInfo({
              ...experienceInfo,
              description: e.target.value,
            });
          }}
        />

        <label htmlFor="jobStartDate">Start: </label>
        <input
          type="text"
          id="jobStartDate"
          name="jobStartDate"
          onChange={(e) => {
            setExperienceInfo({ ...experienceInfo, start: e.target.value });
          }}
        />
        <label htmlFor="jobEndDate">End: </label>
        <input
          type="text"
          id="jobEndDate"
          name="jobEndDate"
          onChange={(e) => {
            setExperienceInfo({ ...experienceInfo, end: e.target.value });
          }}
        />
      </form>
    </div>
  );
}

export default Experience;
