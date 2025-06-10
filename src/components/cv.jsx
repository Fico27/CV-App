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
        <div className="educationInfoHolder">
          <div className="dateHolder">
            <p>
              {educationInfo.start} - {educationInfo.end}
            </p>
          </div>
          <div className="schoolHolder">
            <b>{educationInfo.schoolName}</b>
            <p>{educationInfo.degree}</p>
          </div>
        </div>
      </section>
      <section className="experienceHolder sectionHolder">
        <div className="titleHolder">
          <h3>Experience</h3>
        </div>
        <div className="experienceInfoHolder ">
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
        </div>
      </section>
    </div>
  );
}

export default Cv;
