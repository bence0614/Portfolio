import { Col } from "react-bootstrap"
import VideoJS from "./VideoJS";



const ProjectCardVideo = () => {
  return (
    
     
      <div className="proj-imgbox">
       {/* <h3 className="project-video-h3">Video</h3> */}
        <VideoJS className="player-wrapper"/>
      </div>
  
  )
}

export default ProjectCardVideo;