import { Col, Row } from "react-bootstrap"
import VideoJS from "./VideoJS";

import projImg1 from "../assets/img/limited1.jpg";
import projImg2 from "../assets/img/limited2.jpg";
import projImg3 from "../assets/img/limited3.jpg";
import thumbnail from "../assets/img/thumbnail.png";
import video from '../assets/video/limitedVideo2.mp4'


const PublishedGame = () => {

  const videoSrc = [
    { video: video }
  ]
  const texts = [
    {
      title: "Limited Reality",
      description: 'Everything in this world is temporary. Your presence only lasts for so long, so make sure to leave some of yourself behind.',
      logo: thumbnail
    },
    {
      description: "Featuring 33 levels from easy to mind-boggling across 3 bioms with many different mechanics and gameplay elements. Solve challenging hand crafted puzzles and discover many aesthetically pleasing levels.",
    },
    {
      description: "Are you ready to dive into Limited Reality?",
    }
  ]

  return (
    <Row>
      <Col sm={8} md={5} >
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
      <Col sm={10} md={7}>
        <div className="proj-texts">
          <div className="proj-title-text">
            <span className="technologies">Platform</span>
          </div>
          <div className="proj-desc-text-details">
            <span>Android</span>
          </div>
          <div className="proj-title-text">
            <span className="technologies">Technology</span>
          </div>
          <div className="proj-desc-text-details">
            <span>Unity 3D</span>
          </div>
          <div className="proj-desc-text-details">
            <span>C#</span>
          </div>
          <div className="proj-title-text">
            <span className="technologies">Additional Details</span>
          </div>
          <div className="proj-desc-text-details">
            <span>Menu and shop system</span>
          </div>
          <div className="proj-desc-text-details">
            <span> In-game purchases, advertising</span>
          </div>
          <div className="proj-desc-text-details">
            <span>Local / Cloud save with Google Play Services</span>
          </div>
          <div id="btn-div">
            <a className="btn-15" href="https://play.google.com/store/apps/details?id=com.NullPointer.LimitedReality" rel="noreferrer">
              <span>Check It On Google Play</span>
            </a>
          </div>
        </div>
      </Col>
      <Col sm={0} md={1}>
      </Col>
      <Col sm={12} md={10}>
        <div className="video-div">
          <VideoJS />
        </div>
      </Col>
    </Row>

  )
}

export default PublishedGame;