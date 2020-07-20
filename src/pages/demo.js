import React from "react"
import { Link } from "gatsby"
import { Jumbotron, Table } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/floorplan.css"
import "../styles/app.css"
import Header from "../components/header"
import { Col, Container, Row } from "react-bootstrap"

var inLivingroom = false
var inBedroom = true

var mqtt = require("mqtt")
var client = mqtt.connect("ws://broker.mqttdashboard.com:1883") //TODO: having trouble with this connection

var topic = "bps/kjhaus/livingroom"

client.on("connect", function () {
  client.subscribe(topic, function (err) {
    if (!err) {
      console.log("Connected to client!")
    }
  })
})

client.on("message", function (topic, message) {
  if (topic == "fall") {
    // TODO: add a text to show on screen that a fall is detected at specific timing
  } else if (topic.split("/")[-1] == "livingroom") {
    inBedroom = false
    inLivingroom = true
  } else if (topic.split("/")[-1] == "bedroom") {
    inBedroom = true
    inLivingroom = false
  }
})

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
