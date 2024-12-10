import "./styles/App.css";
import { PersonalInfoSection } from "./components/sections/PersonalInfoSection";
import { EducationSection } from "./components/sections/EducationSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { PersonalInfoPreview } from "./components/preview/PersonalInfoPreview";
import { useState } from "react";
import { EducationPreview } from "./components/preview/EducationPreview";
import { ExperiencePreview } from "./components/preview/ExperiencePreview";
import { SkillsPreview } from "./components/preview/SkillsPreview";

function App() {
  const data = {
    name: "",
    email: "",
    phone: "",
    about: "",
    degree: "",
    school: "",
    startdate: "",
    enddate: "",
    positiontitle: "",
    companyname: "",
    joiningdate: "",
    quittingdate: "",
    responsibilities: "",
    skills: "",
  };
  const [dataObject, setDataObject] = useState(data);

  function handleChange(e) {
    let newObj;
    let property = e.target.id;

    newObj = { ...dataObject, [property]: e.target.value };
    setDataObject(newObj);
  }
  return (
    <div id="main">
      <h1>CV Application</h1>
      <div id="content">
      <div id="sections">
        <PersonalInfoSection onChange={handleChange} dataObject={dataObject} />
        <EducationSection onChange={handleChange} dataObject={dataObject} />
        <ExperienceSection onChange={handleChange} dataObject={dataObject} />
        <SkillsSection onChange={handleChange} dataObject={dataObject}/>
      </div>
      <div id="preview">
        <PersonalInfoPreview dataObject={dataObject} />
        <EducationPreview dataObject={dataObject} />
        <ExperiencePreview dataObject={dataObject} />
        <SkillsPreview dataObject={dataObject} />
      </div>
      </div>
    </div>
  );
}

export default App;
