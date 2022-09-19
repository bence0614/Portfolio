import { Col, Row } from "react-bootstrap"
import VideoJS from "./VideoJS";

import projImg1 from "../assets/img/limited1.jpg";
import projImg2 from "../assets/img/limited2.jpg";
import projImg3 from "../assets/img/limited3.jpg";
import thumbnail from "../assets/img/thumbnail.png";
import VideoJSBuiltDown from "./VideoJSBuiltDown"


const UnityGame = () => {

  const texts = [
    {
      title: "BuiltDown",
      description: '',
    },
    {
      description: 'A 3D platformer where the player has to slove the puzzles and find the way out from a destructive and rebuildable environment.',
    },
    {
      description: "",
    }
  ]

  return (
    <Row>
      <Col sm={8} md={6} >
        <div className="proj-texts">
          <div className="proj-title-text">
            <img src={texts[0].logo} className="proj-logo"></img>{texts[0].title}
          </div>
          <div className="proj-desc-text">
            <span>{texts[0].description}</span>
          </div>
          <div className="proj-desc-text">
            <span>{texts[1].description}</span>
          </div>
          <div className="proj-desc-text">
            <span>{texts[2].description}</span>
          </div>
        </div>
      </Col>
      <Col size={12} sm={8} md={6}>
        <div className="proj-texts">
          <div className="proj-title-text">
            <span className="technologies">Platform</span>
          </div>
          <div className="proj-desc-text-details">
            <span>PC</span>
          </div>
          <div className="proj-title-text">
            <span className="technologies">Technology</span>
          </div>
          <div className="proj-desc-text-details">
            <span>Unreal Engine 4</span>
          </div>
          <div className="proj-desc-text-details">
            <span>Blueprint</span>
          </div>
        </div>
      </Col>
      <Col sm={0} md={2}>
      </Col>
      <Col sm={12} md={8}>
        <div className="video-div">
          <VideoJSBuiltDown />
        </div>
      </Col>
    </Row>

  )
}

export default UnityGame;