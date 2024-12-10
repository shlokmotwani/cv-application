function EducationPreview({ dataObject }) {
    return (
      <div>
        <h1>{dataObject.degree}</h1>
        <p>{dataObject.school}</p>
        <p>{dataObject.startdate}</p>
        <p>{dataObject.enddate}</p>
      </div>
    );
  }
  
  export { EducationPreview };
