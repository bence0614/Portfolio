import React from "react"
import "./Experience.css"
import colorSharp from "../assets/img/color-sharp.png"
import { Col, Container, Row } from "react-bootstrap"
import "animate.css"

export const Experience = () => {
  return (
    <section className="experience" id="skills">
      <Container>
        <div className="experience-bx">
          <div className="animate__animated animate__slideInUp">
            <h2>
              Skills
            </h2>
            <p>And Experiences</p>

            <Row >
              <Col >
                <div className="experience-col">
                  <Row>
                    <Col>
                    <h4>Game</h4>
                    <span className="tagline"></span>
                    </Col>
                  </Row>
                  <div className="item">
                    <h5>C#</h5>
                  </div>
                  <div className="item">
                    <h5>C++</h5>
                  </div>
                  <div className="item">
                    <h5>Unity 3D</h5>
                  </div>
                  <div className="item">
                    <h5>Unreal Engine 4-5</h5>
                  </div>
                </div>


              </Col>
              <Col>
                <Row>
                  <Col>
                    <h4>Web</h4>
                    <span className="tagline"></span>
                  </Col>
                </Row>
                <div className="item">
                  <h5>Symphony</h5>
                </div>
                <div className="item">
                  <h5>React</h5>
                </div>
                <div className="item">
                  <h5>Docker</h5>
                </div>
                <div className="item">
                  <h5>MySql</h5>
                </div>
                <div className="item">
                  <h5>Php</h5>
                </div>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <h4>Other</h4>
                    <span className="tagline"></span>
                  </Col>
                </Row>
                <div className="item">
                  <h5>Scrum</h5>
                </div>
                <div className="item">
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <h5>Linux</h5>
                </div>
                <div className="item">
                  <h5>Ticketing Systems</h5>
                </div>
              </Col>
            </Row>
          </div>

        </div>

      </Container>
      <img className="background-image-left" src={colorSharp}></img>
    </section>
  )
}
