function DateField({ props }) {
  let displayText = "";
  switch (props.label) {
    case "startdate":
      displayText = "Start Date";
      break;
      case "enddate":
      displayText = "End Date";
      break;
      case "joiningdate":
      displayText = "Joining Date";
      break;
      case "quittingdate":
      displayText = "Quitting Date";
      break;
  }
  return (
    <div className="container">
      <label>{displayText}</label>
      <input
        type="date"
        onChange={props.onChange}
        value={props.dataObject[props.label]}
        id={props.label}
      />
    </div>
  );
}

export { DateField };
