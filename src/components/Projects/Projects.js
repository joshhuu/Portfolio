import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import scraping from "../../Assets/Projects/Scraping.png";
import github from "../../Assets/Projects/github.png";
import Summarizer from "../../Assets/Projects/summarizer.png";
import Flashcard from "../../Assets/Projects/flashcard.png";
import Bitcoin from "../../Assets/Projects/bitcoin.png";
import retail from "../../Assets/Projects/retail.png"


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
              imgPath={retail}
              isBlog={false}
              title="AI-Powered Employee Scheduling Engine (Freelance Project)"
              description="Developed an AI-driven scheduling and performance monitoring system tailored for retail businesses, leveraging synthetic datasets and machine learning techniques. Engineered a real-time task scheduler and feedback engine using Python and JavaScript, enabling dynamic workload distribution and visual tracking of employee performance across diverse retail settings."
              ghLink="https://github.com/joshhuu/AI-Retail-Scheduler"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bitcoin}
              isBlog={false}
              title=" Bitcoin Trend Forecaster (Personal Project)"
              description="Developed a machine learning model to forecast Bitcoin price trends using technical indicators such as RSI, MACD, and Moving Averages. Utilized Python and Scikit-learn to train a Random Forest classifier that predicts future price movements, providing data-driven insights to support investment decisions."
              ghLink="https://github.com/joshhuu/Bitcoin-Trend-Forecaster"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Summarizer}
              isBlog={false}
              title=" Website Summarizer AI Tool (Personal Project)"
              description="Created an AI-powered Website Summarizer leveraging LangChain, Google Gemini API, and BeautifulSoup to extract and condense key content from URLs or raw HTML. Built with Flask and React, the application delivers summaries in various formats—including bullet points, emoji-style, and detailed markdown—through a dynamic and responsive user interface."
              ghLink="https://github.com/joshhuu/AI-Scraper-Summarizer"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scraping}
              isBlog={false}
              title="Shopify- Product Scraping API (Personal Project)"
              description="This FastAPI project extracts product information from e-commerce websites by scraping JSON-LD and meta tags. Through a POST endpoint, it retrieves key details such as product name, price, URL, image, and description, enabling efficient data extraction for various applications."
              ghLink="https://github.com/joshhuu/Product-DataScraping-API"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Flashcard}
              isBlog={false}
              title="AI Flashcard Generator for Education (Personal Project)"
              description="This app uses AI to generate question-answer pairs (flashcards) from provided text or PDF documents. By inputting keywords, users can quickly create study flashcards, making it ideal for educational purposes."
              ghLink="https://github.com/joshhuu/AI-Flashcard-Generator"
              demoLink="https://aiflashcardgenerator.streamlit.app" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={github}
              isBlog={false}
              title="All Projects"
              description="Feel free to explore my GitHub to see the full range of projects I’ve been working on. From personal experiments to collaborative open-source contributions, each repository reflects my passion for clean code, problem-solving, and continuous learning. I’m always building, refining, and exploring new technologies—so there’s always something fresh to check out!"
              ghLink="https://github.com/joshhuu" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
