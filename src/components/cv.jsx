function Cv({ generalInfo, educationInfo, experienceInfo }) {
  return (
    <div className="documentHolder">
      <header>
        <h1 className="nameHolder">{generalInfo.name}</h1>
        <div className="genInfoHolder">
          <h2>{generalInfo.email}</h2>
          <h2>{generalInfo.phone}</h2>
          <h2>{generalInfo.location}</h2>
        </div>
      </header>

      <section className="educationHolder"></section>
      <section className="experienceHolder"></section>
    </div>
  );
}

export default Cv;
