import React from "react"

import { Jumbotron, Container } from "react-bootstrap"


const JumboTwo = () => {
    return(
        <Jumbotron fluid className="jumbo-gray">
            <Container className="content-left">
                <h2>Non invasive monitoring</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
            </Container>
        </Jumbotron>
    )
}

export default JumboTwo