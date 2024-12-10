import "../styles/TextField.css";

function TextField({ props }) {
  return (
    <div className="container">
      <label>
        {props.label.charAt(0).toUpperCase() + props.label.slice(1)}
      </label>
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
