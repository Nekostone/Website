import React from "react"
import { Button, Container, Jumbotron } from "react-bootstrap"
import ScrollableAnchor from "react-scrollable-anchor"

const JumboOne = () => {
  return (
    <ScrollableAnchor id={"home"}>
    <Jumbotron fluid className="jumbo-top">
      <Container className="content-center nice-image">
        <h1>Sentry</h1>
        <h2>Fall Activity Monitor</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="text-center">
          <Button variant="dark" size="lg" className="btn-primary text-center">
            Learn More
          </Button>
        </div>
      </Container>
    </Jumbotron>
    </ScrollableAnchor>
  )
}

export default JumboOne
