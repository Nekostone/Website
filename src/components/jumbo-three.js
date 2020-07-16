import React from "react"
import { Col, Container, Image, Jumbotron, Row } from "react-bootstrap"
import setupPhoto from "../images/easy_set_up.png"

const JumboThree = () => {
  return (
    <Jumbotron className="jumbo-gray content-center">
      <Container>
        <Row>
          <Col xs={12} md={6} className="text-center content-center">
            <Image src={setupPhoto} className="jumbo-img" />
          </Col>
          <Col xs={12} md={6} className="content-center">
            <h2>Easy Setup</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default JumboThree
