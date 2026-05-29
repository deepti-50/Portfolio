import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiMysql,
  SiStreamlit,
  SiExpress,
  SiPandas,
  SiNumpy,
  SiTypescript,
  SiFastapi,
  SiFlask,
} from "react-icons/si";
import crewaiLogo from "../../Assets/crewai_logo.png";

function Techstack() {
  const skills = [
    { icon: <DiPython />, name: "Python" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <SiTypescript/>, name: "TypeScript" },
    { icon: <DiReact />, name: "React" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiFastapi />, name: "FastAPI" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiStreamlit />, name: "Streamlit" },
    { icon: <img src={crewaiLogo} alt="CrewAI" style={{ width: "80px", marginBottom: "5px" }} />, name: "CrewAI" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiPandas />, name: "Pandas" },
    { icon: <SiNumpy />, name: "NumPy" },
    { icon: <DiGit />, name: "Git" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          {skill.icon}
          <div style={{ fontSize: "0.25em", marginTop: "10px" }}>{skill.name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;