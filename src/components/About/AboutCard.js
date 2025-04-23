import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Joshua S </span>
            from <span className="purple"> Coimbatore , India.</span>
            <br />
            I am currently a University student.
            <br />
            I am Pursuing B.Tech in Artificial Intelligence and Data Science in L
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing music ( Keyboard ,Guitar)
            </li>
            <li className="about-activity">
              <ImPointRight /> Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Explore something new 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The best way to predict the future is to create it!"{" "}
          </p>
          <footer className="blockquote-footer">Someone</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
