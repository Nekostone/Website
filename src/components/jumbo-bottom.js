import React from "react"
import { Button, Container, Jumbotron } from "react-bootstrap"

const JumboBottom = () => {
  return (
    <Jumbotron fluid className="jumbo-bot">
      <Container className="content-left">
        <h2>Ready to get started?</h2>
        <p> Subscribe to our telegram bot or contact us</p>
      </Container>
      <Container className="content-left">
        <Button variant="dark" size="lg">
          Learn More
        </Button>
        <Button variant="outline-dark" size="lg">
          Contact us
        </Button>
      </Container>
    </Jumbotron>
  )
}

export default JumboBottom
