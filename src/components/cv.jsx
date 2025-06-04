function Cv({ generalInfo, educationInfo, experienceInfo }) {
  return (
    <>
      <h1>{generalInfo.name}</h1>
      <h1>{experienceInfo.company}</h1>
      <h1>{educationInfo.degree}</h1>
      <h1>{educationInfo.start}</h1>
      <h1>{educationInfo.end}</h1>
    </>
  );
}

export default Cv;
