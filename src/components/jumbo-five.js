import React from "react"
import { Card, Col, Container, Jumbotron, Row } from "react-bootstrap"
import ScrollableAnchor from "react-scrollable-anchor"

import Fall_Icon from "../images/fall_detection.png"


const JumboFive = () => {
  return (
    <ScrollableAnchor id={"features"}> 
    <Jumbotron fluid className="jumbo-overview"> 
      <Container className="content-center">
          <h2>System Overview</h2>
        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src={Fall_Icon} rounded />
              <Card.Body>
                <div class="text-center">
                  <Card.Title>Fall Detection</Card.Title>
                  <Card.Text>
                    Preserving privacy using radar technology and machine
                    learning
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <div class="text-center">
                  <Card.Title>Activity Levels</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <div class="text-center">
                  <Card.Title>Networking</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
    </ScrollableAnchor>
  )
}

export default JumboFive
