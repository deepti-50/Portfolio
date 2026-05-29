import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here is a summary of my professional experience.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10} className="project-card">
            <ExperienceCard
              title="AI Engineer - Intern"
              company="Vedic Rishi Astro"
              date="August 2025 – May 2026 | Mumbai, Maharashtra"
              description={[
                "Independently researched and built a 4-agent CrewAI pipeline from scratch powered by GPT-4 with specialized agents for data retrieval, astrological reasoning, PDF report design, and end-to-end validation, automating the full report generation workflow for the content team.",
                "Reduced manual content team effort by 30% by replacing fully manual reporting processes with LLM-based multi-agent orchestration enabling non-technical teams to focus on high-value creative tasks.",
                "Trained a YOLOv8 object detection model on a 7,100-image dataset over 75 epochs to detect and classify 4 palm line features (heart, head, life, and fate lines) achieving 82% accuracy and handling real-world challenges like partial and occluded lines.",
                "Deployed both the CrewAI pipeline and YOLOv8 model as containerized services on AWS Lambda using Docker enabling scalable, cost-effective serverless execution in production.",
                "Designed data flow across all agents using PostgreSQL for persistent storage and Redis for caching ensuring consistent state management and reliable AI model integration throughout the pipeline."
              ]}
            />
          </Col>

          <Col md={10} className="project-card">
            <ExperienceCard
              title="Backend Developer"
              company="GNZY"
              date="November 2024 – December 2024 | Mumbai, Maharashtra"
              description={[
                "Streamlined backend codebase, reducing technical debt by 25% and improving system performance by 15%.",
                "Designed and tested 20+ APIs, achieving 100% functionality and data accuracy within project deadlines."
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
