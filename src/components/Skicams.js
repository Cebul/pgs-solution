import React, {Component} from 'react'
import {Container, Row, Col, Card, CardImg, Media} from 'reactstrap'
import axios from 'axios'
import '../index.css'


class Skicams extends Component {

  state = {
    cams: '',
    data: [],
    name: '',
    url: '',
    url2: '',
    url3: '',
    url4: '',
    url5: ''
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
        .then(() => {
          const ar = []
          for(const item in this.state.cams.data) {
              ar.push(this.state.cams.data[item])
          }
          this.setState({
            data: ar
          })
        })
        .then(() => {
          const arr = []
          const arr2 = []
          for(let i=0; i<this.state.data.length; i++) {
            arr.push(this.state.data[i].name)
            arr2.push(this.state.data[i].cams)
          }
          this.setState({
            name: arr,
            url: arr2
          })
        })
        .then(() => {
          const arr = []
          for(const item in this.state.url[12]) {
            arr.push(this.state.url[12][item])
          }
          this.setState({
            url2: arr
          })
        })
        .then(() => {
          const arr = []
          for(const item in this.state.url2[0]) {
            arr.push(this.state.url2[0][item])
          }
          this.setState({
            url3: arr
          })
        })
        .then(() => {
          const arr = []
          for(const item in this.state.url[130]) {
            arr.push(this.state.url[130][item])
          }
          this.setState({
            url4: arr
          })
        })
        .then(() => {
          const arr = []
          for(const item in this.state.url4[1]) {
            arr.push(this.state.url4[1][item])
          }
          this.setState({
            url5: arr
          })
        })
        .catch(err => {
          console.log(err)
        })
    }

    getDate() {
      const dateObj = new Date()
      const month = dateObj.getUTCMonth() + 1
      const day = dateObj.getUTCDate()
      const year = dateObj.getUTCFullYear()
      return (
        day + "-" + month + "-" + year
      )
    }

  render() {

    if(!this.state.url3) return <div className="loader"></div>

    return (
      <div>
        <Container style={{paddingBottom: 150, marginTop: 50}}>
          <Row>
            <Col sm={12} md={12} lg={6}>
              <Card>
                <Media>
                  <Media href="#">
                    <Media heading>
                      <div style={{float: "right"}}>{this.getDate()}</div>
                      {this.state.name[4]}
                    </Media>
                    <CardImg width="100%" src={this.state.url2[0].url} alt="Generic placeholder image" />
                  </Media>
                </Media>
              </Card>

            </Col>
            <Col sm={12} md={12} lg={6}>
              <Card>
                <Media href="#">
                  <Media heading>
                    <div style={{float: "right"}}>{this.getDate()}</div>
                    {this.state.name[130]}
                  </Media>
                  <CardImg width="100%" src={this.state.url5[1]} alt="Generic placeholder image" />
                </Media>
              </Card>
            </Col>
          </Row>
        </Container>
          {console.log(this.state.name)}
      </div>
    ) //return
  } //render
} //Skicams

export default Skicams
