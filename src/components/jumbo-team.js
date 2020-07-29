import React from "react"
import { Col, Container, Figure, Jumbotron, Row } from "react-bootstrap"
import ScrollableAnchor from 'react-scrollable-anchor'

import JundeMeow from "../images/team_members/JD.jpg"
import KayJinMeow from "../images/team_members/KJ.jpg"
import SiewWenMeow from "../images/team_members/sw.png"
import TeckMeow from "../images/team_members/Teck.jpg"
import TeeMengMeow from "../images/team_members/TM.jpg"
import XavierMeow from "../images/team_members/Xavier.jpg"
import YiChengMeow from "../images/team_members/yc.jpg"

const JumboTeam = () => {
  const MakeFace = (imgsrc, name) => {
    return (
      <div class="text-center">
        <Figure>
          <Figure.Image src={imgsrc} roundedCircle width={200} height={200} />
          <Figure.Caption className="text-center">{name}</Figure.Caption>
        </Figure>
      </div>
    )
  }

  return (
    <ScrollableAnchor id={"team"}>
    <Jumbotron fluid className="jumbo-team">
      <Container className="content-center">
        <h2>Meet the Team</h2>
        <h3> EPD</h3>
        <Row>
          <Col>{MakeFace(XavierMeow, "Xavier")}</Col>
          <Col>{MakeFace(TeeMengMeow, "Tee Meng")}</Col>
          <Col>{MakeFace(KayJinMeow, "Kay Jin")}</Col>
          <Col>{MakeFace(TeckMeow, "Tiang Teck")}</Col>
        </Row>
        <h3>ISTD</h3>
        <Row>
          <Col>{MakeFace(JundeMeow, "Jun De")}</Col>
          <Col>{MakeFace(YiChengMeow, "Yi Cheng")}</Col>
          <Col>{MakeFace(SiewWenMeow, "Siew Wen")}</Col>
        </Row>
      </Container>
    </Jumbotron>
    </ScrollableAnchor>
  )
}

export default JumboTeam
