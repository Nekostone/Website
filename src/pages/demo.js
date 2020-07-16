import React from "react"
import { Link } from "gatsby"
import { Image, Jumbotron } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/floorplan.css"
import "../styles/app.css"
import Header from "../components/header"
import { Col, Container, Row } from "react-bootstrap"

var inLivingroom = true
var inBedroom = false

// Setup MQTT
var client = new Paho.MQTT.Client(
  location.hostname,
  Number(location.port),
  "clientId"
)

// set callback handlers
client.onConnectionLost = onConnectionLost
client.onMessageArrived = onMessageArrived

// connect the client
client.connect({ onSuccess: onConnect })

// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("onConnect")
  client.subscribe("bps/kjhaus/livingroom")
  client.subscribe("bps/kjhaus/bedroom")
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:" + responseObject.errorMessage)
  }
}

// called when a message arrives
function onMessageArrived(message) {
  console.log("onMessageArrived:" + message.payloadString)
}

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
