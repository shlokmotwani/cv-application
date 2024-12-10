import { TextField } from "../TextField";
import { TextArea } from "../TextArea";
import { DateField } from "../DateField";

function ExperienceSection({ onChange, dataObject }) {
  const fields = [
    "positiontitle",
    "companyname",
    "joiningdate",
    "quittingdate",
    "responsibilities",
  ];

  return (
    <div className="section">
      <p>Professional Experience</p>
      {fields.map((field, index) => {
        const props = {
          index: index,
          label: field,
          dataObject: dataObject,
          onChange: onChange,
        };

        return field.includes("date") ? (
          <DateField key={index} props={props}></DateField>
        ) : field.includes("responsibilities") ? (
          <TextArea key={index} props={props}></TextArea>
        ) : (
          <TextField key={index} props={props}></TextField>
        );
      })}
    </div>
  );
}

export { ExperienceSection };
