import { Col } from "react-bootstrap"

export const ProjectCard = ({ title, description, imgUrl }) => {

  return (
    <Col sm={8} md={6}>
      <div className="proj-imgbox">
        <img src={imgUrl} className="project-image"></img>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}