import React, { useState } from "react"
import { Container, Jumbotron, Row } from "react-bootstrap"
import "../styles/floorplan.css"

var inLivingroom = true
var inBedroom = false

const topic = "bps/kjhaus/livingroom"
const topic2 = "bps/kjhaus/bedroom"
var mqtt = require("mqtt")
var options = {
  protocol: "mqtts",
  clientId: "tswuwu",
}
//
var client = mqtt.connect(process.env.MQTT_URL, options)
client.on("connect", function () {
  client.subscribe(topic, { qos: 1 }, function (err) {
    if (!err) {
      console.log("Connected to client on topic!")
    }
  })
  client.subscribe(topic2, { qos: 1 }, function (err) {
    if (!err) {
      console.log("Connected to client on topic2!")
    }
  })
})

function DemoApp() {
  const [mesg, setMesg] = useState(
    <div>
      <em>Connected to MQTT Network!</em>
    </div>
  )

  const [room, setRoom] = useState(0)

  client.on("message", function (topic, message) {
    var note = message.toString()
    setMesg(topic + ":" + note)
    if (topic == "fall") {
      // TODO: add a text to show on screen that a fall is detected at specific timing
    } else {
      console.log(topic)
      var splitTopic = topic.split("/")
      console.log(splitTopic)
      if (splitTopic[splitTopic.length - 1] === "livingroom") {
        inBedroom = false
        inLivingroom = true
        setRoom("in_livingroom")
        console.log("you are in living room")
      } else if (splitTopic[splitTopic.length - 1] === "bedroom") {
        inBedroom = true
        inLivingroom = false
        setRoom("in_bedroom")
        console.log("you are in bed room")
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
