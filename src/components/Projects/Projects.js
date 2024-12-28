import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import credit from "../../Assets/Projects/credit.png";
import utube from "../../Assets/Projects/utube.png";
import imaginify from "../../Assets/Projects/imaginify.png";
import worksmart from "../../Assets/Projects/worksmart.png";
import terrorism from "../../Assets/Projects/terrroism.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imaginify}
              isBlog={false}
              title="Imaginify"
              description="A project that transforms creative ideas into stunning images using AI-driven tools and models. It enables users to generate artwork, visualize concepts, or experiment with AI-generated visuals seamlessly. Perfect for artists, developers, and enthusiasts exploring the intersection of AI and creativity."
              ghLink="https://github.com/deepti-50/Imaginify"
              demoLink="imaginify-cloud.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={worksmart}
              isBlog={false}
              title="Work Smart-AI"
              description="Work Smart AI projects utilize artificial intelligence to automate tasks, enhance decision-making, and improve overall efficiency across various domains."
              ghLink="https://github.com/deepti-50/WorkSmart-AI"
              demoLink="jazzy-longma-8369ae.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={credit}
              title="Credit Risk Analysis"
              description="Credit Risk Analysis is the process of analyzing an individual's credit history and ability to repay a loan or debt. The model predicts the probability of a customer defaulting on a loan based on the customer's credit history and other related factors."
              ghLink="https://github.com/deepti-50/Credit-Risk-Analysis"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={terrorism}
              isBlog={false}
              title="Global Terrorism Analysis"
              description="This repository contains a comprehensive analysis and visualization of global terrorism trends using the Global Terrorism Database (GTD). The project aims to uncover patterns and provide insights into the geographic and temporal distribution of terrorist activities worldwide through interactive and static visualizations."
              ghLink="https://github.com/deepti-50/Global-Terrorism-Analysis"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={utube}
              isBlog={false}
              title="Youtube Video Transcript Summariser"
              description="This Streamlit application allows users to convert YouTube video transcripts into detailed notes with multi-language support. Users can generate summaries at different levels of detail, translate the summaries, and view visual highlights through keyframes extracted from the video."
              ghLink="https://github.com/deepti-50/Youtube-Transcript-Summarizer"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
