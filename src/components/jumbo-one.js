import React from "react"
import NiceBG from "../images/nice_scenery.jpg"

import { 
    Jumbotron, 
    Button, 
    Container
} from "react-bootstrap"

const JumboOne = () => {
    return (
        <Jumbotron fluid className="jumbo-top">
            <Container className="content-center nice-image">
                <h1>Sentry</h1>
                <h2 >Fall Activity Monitor</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <div class="text-center">
                    <Button variant="dark" size="lg" className="btn-primary text-center">Learn More</Button>
                </div>
            </Container>
        </Jumbotron>
    )
}

export default JumboOne