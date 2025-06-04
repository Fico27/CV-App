function Education({ educationInfo, setEducationInfo }) {
  return (
    <div className="educationContainer">
      <form action="">
        <h2>Education</h2>

        <label htmlFor="schoolName">School: </label>
        <input
          type="text"
          name="schoolName"
          id="schoolName"
          onChange={(e) => {
            setEducationInfo({ ...educationInfo, schoolName: e.target.value });
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
      </form>
    </div>
  );
}

export default Education;
