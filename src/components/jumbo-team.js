import React from "react"
import face1 from "../images/gatsby-astronaut.png"

import {
     Jumbotron, 
     Container, 
     Col, 
     Row,
     Figure
} from "react-bootstrap"

const JumboTeam = () => {
    const MakeFace = (imgsrc, name) => {
        return (
            <div class="text-center">
                <Figure>
                    <Figure.Image
                        src= {imgsrc}
                        roundedCircle
                        width={200}
                        height={200}
                    />
                    <Figure.Caption className="text-center">
                        {name}
                    </Figure.Caption>
                </Figure>
            </div>
        )
    }

    return (
        <Jumbotron fluid className="jumbo-team">
            <Container className="content-center">
                <h2>Meet the Team</h2>
                <h3> EPD</h3>
                <Row>
                    <Col>{MakeFace(face1, "name1")}</Col>                    
                    <Col>{MakeFace(face1, "name2")}</Col>                    
                    <Col>{MakeFace(face1, "name3")}</Col>
                    <Col>{MakeFace(face1, "name4")}</Col>
                </Row>
                <h3>ISTD</h3>
                <Row>
                    <Col>{MakeFace(face1, "name5")}</Col>
                    <Col>{MakeFace(face1, "name6")}</Col>
                    <Col>{MakeFace(face1, "name7")}</Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default JumboTeam
