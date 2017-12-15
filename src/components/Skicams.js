import React, {Component} from 'react'
import {Container, Row, Col, Card, CardTitle,CardSubtitle, CardImg} from 'reactstrap'
import axios from 'axios'
import '../styles/_skicams.css'


class Skicams extends Component {

  state = {
    cams: ''
  }

  componentDidMount() {
    axios.get('https://makevoid-skicams.p.mashape.com/cams.json', {
        headers: { "X-Mashape-Key": "kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw" }
      })
    .then((resp) => {
      this.setState({
        cams: resp
      })
    })
    .catch(err => {
      console.log(err)
    })
  } //componentDidMount, getting data from API and setting them to state object

  getDate() {
    const dateObj = new Date()
    const month = dateObj.getUTCMonth() + 1
    const day = dateObj.getUTCDate()
    const year = dateObj.getUTCFullYear()
    return (
      day + "-" + month + "-" + year
    ) //return
  } //getDate

  render() {

    if(!this.state.cams) return <div className="loader"></div> //cheking if data has been loaded

    return (
      <Container className="container">
        <Row>
          <Col xs={12} sm={12} md={12} lg={{size: 5, offset: 1}}>
            <Card>
              <CardSubtitle className="recent-date">{this.getDate()}</CardSubtitle>
              <CardTitle className="resort-name">{this.state.cams.data[14].name}</CardTitle>
              <CardImg  className="resort-name" src={this.state.cams.data[14].cams[56].url} alt={this.state.cams.data[14].name} />
            </Card>
          </Col>
          <Col xs={12} sm={12} md={12} lg={{size: 5}}>
            <Card className="card-container">
              <CardSubtitle className="recent-date">{this.getDate()}</CardSubtitle>
              <CardTitle className="resort-name">{this.state.cams.data[159].name}</CardTitle>
              <CardImg className="resort-name" src={this.state.cams.data[159].cams[479].url} alt={this.state.cams.data[159].name} />
            </Card>
          </Col>
        </Row>
      </Container>
    ) //return
  } //render
} //Skicams

export default Skicams
