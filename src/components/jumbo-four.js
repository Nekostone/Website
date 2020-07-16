import React from "react"
import { Col, Container, Jumbotron, Row, Image } from "react-bootstrap"
import budgetPhoto from "../images/budget_friendly.png"

const JumboFour = () => {
  return (
    <Jumbotron className="jumbo-gray content-center">
      <Container xs={0} md={12}>
        <Row>
          <Col xs={12} md={6}>
            <h2>Cost</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
          <Col xs={12} md={6} className="text-center content-center">
            <Image src={budgetPhoto} className="jumbo-img" />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default JumboFour
