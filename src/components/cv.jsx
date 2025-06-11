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

      <section className="educationHolder sectionHolder">
        <div className="titleHolder">
          <h3>Education</h3>
        </div>
        {educationInfo.map((entry) => (
          <div className="educationInfoHolder" key={entry.id}>
            <div className="dateHolder">
              <p>
                {entry.start} - {entry.end}
              </p>
            </div>
            <div className="schoolHolder">
              <b>{entry.schoolName}</b>
              <p>{entry.degree}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Spacer */}

      <section className="experienceHolder sectionHolder">
        <div className="titleHolder">
          <h3>Experience</h3>
        </div>

        {experienceInfo.map((entry) => (
          <div className="experienceInfoHolder" key={entry.id}>
            <div className="experienceInfo">
              <div className="company">
                <b>{entry.company}</b>
                <p>{entry.role}</p>
              </div>
              <b>
                {entry.start} - {entry.end}
              </b>
            </div>
            <div className="experienceInfoDes">
              <p>{entry.description}</p>
            </div>
          </div>
        ))}

        {/* <div className="experienceInfoHolder ">
          <div className="experienceInfo">
            <div className="company">
              <b>{experienceInfo.company}</b>
              <p>{experienceInfo.role}</p>
            </div>
            <b>
              {experienceInfo.start} - {experienceInfo.end}
            </b>
          </div>
          <div className="experienceInfoDes">
            <p>{experienceInfo.description}</p>
          </div>
        </div> */}
      </section>
    </div>
  );
}

export default Cv;
