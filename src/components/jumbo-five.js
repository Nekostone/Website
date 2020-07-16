import React from "react"

import { 
    Jumbotron, 
    Container,
    Card,
    Col,
    Row
} from "react-bootstrap"

const JumboFive = () => {
    return (
        <Jumbotron fluid className="jumbo-overview">
            <Container className="content-center">
                <h2>System Overview</h2>
                <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <div class="text-center">
                            <Card.Title>Fall Detection</Card.Title>
                            <Card.Text>
                                Preserving privacy using radar technology and machine learning
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default JumboFive