import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import Header from "../components/header"
import JumboBottom from "../components/jumbo-bottom"
import JumboFive from "../components/jumbo-five"
import JumboFour from "../components/jumbo-four"
import JumboOne from "../components/jumbo-one"
import JumboTeam from "../components/jumbo-team"
import JumboThree from "../components/jumbo-three"
import JumboTwo from "../components/jumbo-two"
import "../styles/app.css"

const IndexPage = () => {
  return (
    <>
      <Header />
      <JumboOne />
      <JumboTwo />
      <JumboThree />
      <JumboFour />
      <JumboFive />
      <JumboTeam />
      <JumboBottom />
    </>
  )
}

export default IndexPage
