import { DateField } from "../DateField";
import { TextField } from "../TextField";

function EducationSection({ onChange, dataObject }) {
  const fields = ["degree", "school", "startdate", "enddate"];

  return (
    <div className="section">
      <p>Education</p>
      {fields.map((field, index) => {
        const props = {
          index: index,
          label: field,
          dataObject: dataObject,
          onChange: onChange,
        };

        return field.includes("date") ? (
          <DateField key={index} props={props}></DateField>
        ) : (
          <TextField key={index} props={props}></TextField>
        );
      })}
    </div>
  );
}

export { EducationSection };
