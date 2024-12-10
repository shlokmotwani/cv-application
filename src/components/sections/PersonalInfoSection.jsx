import { TextField } from "../TextField";
import { TextArea } from "../TextArea";
import "../../styles/Sections.css";

function PersonalInfoSection({onChange, dataObject}) {
  const fields = ["name", "email", "phone", "about"];

  return (
    <div className="section">
      <p>Personal Information</p>
      {fields.map((field, index) => {
        const props = {
          index: index,
          label: field,
          dataObject: dataObject,
          onChange: onChange,
        };
        return field === "about" ? (
          <TextArea
            key={index}
            props={props}
          ></TextArea>
        ) : (
          <TextField
          key={index}
          props={props}
          ></TextField>
        );
      })}
    </div>
  );
}

export { PersonalInfoSection };
