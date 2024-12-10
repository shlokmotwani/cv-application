function DateField({ props }) {
  return (
    <div className="container">
      <label>{props.label}</label>
      <input
        type="date"
        onChange={props.onChange}
        value={props.label === "startdate" ? props.dataObject.startdate : props.dataObject.enddate}
        id={props.label}
      />
    </div>
  );
}

export { DateField };