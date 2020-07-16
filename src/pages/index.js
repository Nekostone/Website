import React from "react"
import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/app.css'

import Header from "../components/header"
import JumboOne from "../components/jumbo-one"
import JumboTwo from "../components/jumbo-two"
import JumboThree from "../components/jumbo-three"
import JumboFour from "../components/jumbo-four"
import JumboFive from "../components/jumbo-five"
import JumboTeam from "../components/jumbo-team"

import { 
  Jumbotron, 
  Button 
} from "react-bootstrap"
import JumboBottom from "../components/jumbo-bottom"

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
    <JumboBottom/>
  </>
  )
}

export default IndexPage
