import React, { useState } from "react"
import { Container, Jumbotron, Row } from "react-bootstrap"
import "../styles/floorplan.css"

var topic1 = "bps/kjhaus/livingroom"
var topic2 = "bps/kjhaus/bedroom"
var topics = [topic1, topic2]
var mqtt = require("mqtt")
var client = mqtt.connect(process.env.MQTT_URL)

function DemoApp() {
  const [mesg, setMesg] = useState("Connecting...")
  const [room, setRoom] = useState(0)

  client.on("connect", () => {
    var subscribed = true
    for (let x in topics) {
      client.subscribe(x, { qos: 1 }, err => {
        if (!err) {
          console.log("Subscribed to topic!")
        } else {
          subscribed = false
        }
      })
    }
    if (subscribed) {
      setMesg(
        "Live demo successfully subscribed to all topics! Waiting for messages..."
      )
    }
  })

  client.on("message", function (topic, message) {
    var note = message.toString()
    setMesg(topic + ":" + note)
    if (topic == "fall") {
      setMesg("Fall Detected!")
    } else {
      var splitTopic = topic.split("/")
      if (splitTopic[splitTopic.length - 1] === "livingroom" && note === "1") {
        setRoom("in_livingroom")
      } else if (
        splitTopic[splitTopic.length - 1] === "bedroom" &&
        note === "1"
      ) {
        setRoom("in_bedroom")
      }
    }
  })

  return (
    <div className="App">
      <Jumbotron>
        <Container className="content-center">
          <Row>
            <h2>Live Demo</h2>
            <p>{mesg}</p>
          </Row>
          <Row>
            <div className="floorplan">
              <div className={room}></div>
            </div>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default DemoApp
