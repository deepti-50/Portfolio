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
} from "react-icons/si"; // Removed duplicate import of Streamlit

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql /> {/* MySQL icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStreamlit /> {/* Streamlit icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas /> {/* Pandas icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy /> {/* Numpy icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress /> {/* Express icon */}
      </Col>
    </Row>
  );
}

export default Techstack;