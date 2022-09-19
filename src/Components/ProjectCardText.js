import { Col } from "react-bootstrap"


export const ProjectCardText = ({ title, description, logo }) => {

  return (
    <Col sm={6} md={4}>
      <div className="proj-texts">
        <div className="proj-title-text">
          <img src={logo} className="proj-logo"></img>{title}
        </div>
        <div className="proj-desc-text">
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}