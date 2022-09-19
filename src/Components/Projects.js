import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import "animate.css"
import "./Project.css"
import PublishedGame from "./PublishedGame";
import UnityGame from "./UnityGame";
import UnrealGame from "./UnrealGame";

export const Projects = () => {

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12} >
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <h2>Published Game</h2>
                  <p id="project-p">And Other Projects</p>
                </div>}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">My Published Game</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Unity</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Unreal Engine</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first" className="project-col">
                  <PublishedGame />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <UnityGame />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <UnrealGame />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>

          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}