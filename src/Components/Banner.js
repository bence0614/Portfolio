import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle, Tornado } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg"
import "animate.css"
import TrackVisibility from 'react-on-screen'

export const Banner = () => {

  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = ["Junior Developer"]
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.round() * 100)
  const period = 3000

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)

    return () => { clearInterval(ticker) }
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updateText = isDeleting ? fullText.substring(0, text.length - text.length) : fullText.substring(0, text.length + 1)

    setText(updateText)

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updateText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(500)
    }

  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{"Hi I'm Bence, "}<span className="wrap">{text}</span></h1>
                  <p>I started to learn game development when I entered the university and I achieved to publish a game right after I got my degree. I got my degree. The only thing that is better then playing games is creating them.</p>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            {/*<img src={headerImg} alt="Header Img"></img>*/}
          </Col>
        </Row>
      </Container>
    </section>
  )
}