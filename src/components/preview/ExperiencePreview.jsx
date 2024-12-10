function ExperiencePreview({ dataObject }) {
    return (
      <div>
        <h1>{dataObject.positiontitle}</h1>
        <p>{dataObject.companyname}</p>
        <p>{dataObject.joiningdate}</p>
        <p>{dataObject.quittingdate}</p>
        <p>{dataObject.responsibilities}</p>
      </div>
    );
  }
  
  export { ExperiencePreview };