import React from "react";
import Card from "react-bootstrap/Card";

function ExperienceCard(props) {
  return (
    <Card className="project-card-view" style={{ textAlign: "left" }}>
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold", fontSize: "1.5em", color: "white" }}>
          {props.title} <span className="purple" style={{ fontSize: "0.8em" }}>@ {props.company}</span>
        </Card.Title>
        <Card.Subtitle className="mb-3" style={{ fontStyle: "italic", color: "#c770f0" }}>
          {props.date}
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "justify", color: "white" }}>
          <ul>
            {props.description.map((point, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                {point}
              </li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ExperienceCard;
