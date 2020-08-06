import React, { useState } from "react"
import { Alert, Container, Jumbotron, Row } from "react-bootstrap"
import "../styles/floorplan.css"
var mqtt = require("mqtt")

var topic1 = "bps/kjhaus/livingroom"
var topic2 = "bps/kjhaus/bedroom"
var topic3 = "bps/kjhaus/toilet"
var topic4 = "bps/kjhaus/exit"
var topic5 = "fall"

var topics = [topic1, topic2, topic3, topic4, topic5]
var client = mqtt.connect(process.env.MQTT_URL)
console.log(process.env.MQTT_URL)
function DemoApp() {
  const [mesg, setMesg] = useState("Connecting...")
  const [fallMsg, setFallMsg] = useState("No Falls Detected.")
  const [fallDetected, setFallDetected] = useState(false)
  const [room, setRoom] = useState("in_livingroom")

  client.on("connect", () => {
    var subscribed = true
    for (var topic of topics) {
      client.subscribe(topic, { qos: 1 }, err => {
        if (!err) {
          console.log("Subscribed to topic!")
        } else {
          subscribed = false
        }
      })
    }
    if (subscribed) {
      setMesg(
        "Live demo successfully subscribed to all topics! Waiting for room status messages..."
      )
    }
  })

  client.on("message", function (topic, message) {
    var note = message.toString()

    if (topic == "fall" && note === "1") {
      setFallDetected(true)
      setFallMsg("Fall Detected! " + new Date())
    } else {
      var splitTopic = topic.split("/")
      var roomIdentified = splitTopic[splitTopic.length - 1]
      setMesg("User in: " + roomIdentified)
      if (roomIdentified === "livingroom" && note === "1") {
        setRoom("in_livingroom")
      } else if (roomIdentified === "bedroom" && note === "1") {
        setRoom("in_bedroom")
      } else if (roomIdentified === "toilet" && note === "1") {
        setRoom("in_toilet")
      } else if (roomIdentified === "exit" && note === "1") {
        setRoom("not_in_house")
      }
    }
  })

  return (
    <div className="App">
      <Jumbotron>
        <Container className="content-center">
          <Row>
            <h2>Live Demo</h2>
          </Row>
          <Row>
            <div className="floorplan">
              <div className={room}>
                <p>{room}</p>
              </div>
            </div>

            <div className="log">
              <h4>Room Activity</h4>
              <Alert key={"status"} variant="primary">
                {mesg}
              </Alert>

              <h4>Falls Detected</h4>
              <Alert
                className={"fall_detected_" + fallDetected}
                key={"fall" + new Date().getDate()}
                variant="danger"
              >
                {fallMsg}
              </Alert>
            </div>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default DemoApp
