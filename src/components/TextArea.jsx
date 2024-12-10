import "../styles/TextArea.css";

function TextArea({ props }) {
  return (
    <div className="container">
      <label>
        {props.label.charAt(0).toUpperCase() + props.label.slice(1)}
      </label>
      <textarea
        className="textarea"
        onChange={props.onChange}
        value={props.dataObject[props.label]}
        id={props.label}
      ></textarea>
    </div>
  );
}

export { TextArea };
