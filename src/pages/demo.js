import React from "react"
import { Link } from "gatsby"
import { Jumbotron, Table } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/floorplan.css"
import "../styles/app.css"
import Header from "../components/header"
import { Col, Container, Row } from "react-bootstrap"

var inLivingroom = true
var inBedroom = false

var mqtt = require("mqtt")
// var client = mqtt.connect("ws://broker.mqttdashboard.com:1883") //TODO: having trouble with this connection
var client = mqtt.connect("mqtt://39.109.166.181:9001",{clientId:"mqttjs01"})
var topic = "bps/kjhaus/livingroom"
var topic2 = "bps/kjhaus/bedroom"

client.on("connect", function () {
  client.subscribe(topic, {qos:1}, function (err) {
    if (!err) {
      console.log("Connected to client on topic!")
    }
  })
  client.subscribe(topic2, {qos:1}, function (err) {
    if (!err) {
      console.log("Connected to client on topic2!")
    }
  } )
})

client.on("message", function (topic, message) {
  if (topic == "fall") {
    // TODO: add a text to show on screen that a fall is detected at specific timing
  } else{
    console.log(topic)
    var splitTopic = topic.split("/")
    console.log(splitTopic)
    if (splitTopic[splitTopic.length -1] === "livingroom"){
      inBedroom = false
      inLivingroom = true
      console.log("you are in living room")
    } else if (splitTopic[splitTopic.length -1] === "bedroom"){
      inBedroom = true
      inLivingroom = false
      console.log("you are in bed room")
    }
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
