function PersonalInfoPreview({ dataObject }) {
  return (
    <div>
      <h1>{dataObject.name}</h1>
      <p>{dataObject.email}</p>
      <p>{dataObject.phone}</p>
      <p>{dataObject.about}</p>
    </div>
  );
}

export { PersonalInfoPreview };
