import "../styles/TextField.css";

function TextField({ props }) {
  let displayText;
  switch (props.label) {
    case "positiontitle":
      displayText = "Position Title";
      break;
    case "companyname":
      displayText = "Company Name";
      break;
    default:
      displayText = props.label.charAt(0).toUpperCase() + props.label.slice(1);
      break;
  }

  return (
    <div className="container">
      <label>{displayText}</label>
      <input
        type="text"
        onChange={props.onChange}
        value={props.dataObject[props.label]}
        id={props.label}
      />
    </div>
  );
}

export { TextField };
