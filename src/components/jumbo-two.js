import React from "react"
import { Col, Container, Image, Jumbotron, Row } from "react-bootstrap"
import ScrollableAnchor from "react-scrollable-anchor"

import noCameraPhoto from "../images/no_camera.png"

const JumboTwo = () => {
  return (
    <ScrollableAnchor id={"about"}>
    <Jumbotron className="jumbo-gray content-center">
      <Container>
        <Row>
          <Col xs={12} md={6} className="content-center">
            <h2>Non invasive monitoring</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
          <Col xs={12} md={6} className="text-center">
            <Image src={noCameraPhoto} className="jumbo-img" />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
    </ScrollableAnchor>
  )
}

export default JumboTwo
