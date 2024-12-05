import { LabelField } from "./LabelField";
import "../styles/PersonalInfoSection.css"

function PersonalInfoSection() {
  const fields = ["Full Name", "Email", "Phone", "About Me"];

  return (
    <div className="section">
      {fields.map((field, index) => {
        return <LabelField key={index} text={field}></LabelField>;
      })}
    </div>
  );
}

export { PersonalInfoSection };
