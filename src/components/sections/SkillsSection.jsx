import { TextField } from "../TextField";

function SkillsSection({onChange, dataObject}) {
  const fields = ["skills"];

  return (
    <div className="section">
      <p>Skills</p>
      {fields.map((field, index) => {
        const props = {
          index: index,
          label: field,
          dataObject: dataObject,
          onChange: onChange,
        };
        return <TextField key={index} props={props}></TextField>          
      })}
    </div>
  );
}

export { SkillsSection };
