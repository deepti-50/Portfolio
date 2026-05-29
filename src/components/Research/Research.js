import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ResearchCard from "./ResearchCard";

function Research() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Research & <strong className="purple">Publications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my recent research projects and publications.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10} className="project-card">
            <ResearchCard
              title="AI for Detecting Greenwashing in Corporate Sustainability Reports"
              status="Accepted"
              date="Jan 2025 - April 2025"
              description={[
                "Conceptualized and designed a web-based system utilizing NLP models to identify misleading corporate sustainability claims.",
                "Defined workflows, UI mockups, backend logic, and data architecture for features like claim verification, scorecard exploration, and community reporting.",
                "Aimed to reduce manual greenwashing detection by up to 70%, enhancing transparency and enabling faster assessments.",
                "The research is under the guidance of Dr. Anand Khandare (Associate Dean of Planning and Operations for Digital Resources, TCET)."
              ]}
            />
          </Col>

          <Col md={10} className="project-card">
            <ResearchCard
              title="TrustED: AI-Powered Accreditation System"
              status="In-Process"
              date="Jan 2025 - Present"
              description={[
                "Developing TrustED, an AI-driven system that streamlines accreditation processes in higher education.",
                "Uses NLP and machine learning to evaluate Self-Assessment Reports and provide accreditation readiness scores and insights.",
                "Enhances efficiency, reduces manual effort, and offers a transparent alternative to traditional accreditation methods.",
                "The research is under the guidance of Dr. Anand Khandare (Associate Dean of Planning and Operations for Digital Resources, TCET)."
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Research;
