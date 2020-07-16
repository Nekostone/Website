import React from "react"
import { Link } from "gatsby"
import { Image, Jumbotron } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/floorplan.css"
import "../styles/app.css"
import Header from "../components/header"
import { Col, Container, Row } from "react-bootstrap"

var inLivingroom = false
var inBedroom = false

var mqtt = require("mqtt")

const DemoPage = () => {
  return (
    <>
      <Header />
      <Jumbotron>
        <Container className="content-center">
          <Row>
            <h2>Live Demo</h2>
          </Row>
          <Row>
            <div className="floorplan">
              {inLivingroom && <div className="in_livingroom"></div>}
              {inBedroom && <div className="in_bedroom"></div>}
            </div>
          </Row>
        </Container>
      </Jumbotron>
    </>
  )
}

export default DemoPage
