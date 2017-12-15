import React from 'react'
import { Button,Container, Col, Row, Form, Input } from 'reactstrap'
import '../styles/_contact.css'


const Contact = () => {
  return (
    <Container className="contact-container">
      <Row>
        <Col xs={{size: 12}} sm={{ size: 12}} md={{ size: 8, offset: 2}} lg={{ size: 6, offset: 3}}>
            <Form>
              <Container className="form-container">
                <Row>
                  <Col>
                    <Input type="text" bsSize="lg" className="form-input name" placeholder="Name" required/>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Input type="email" bsSize="lg" className="form-input" placeholder="Email" required/>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Input type="text" bsSize="lg" className="form-input message" placeholder="Message"/>
                  </Col>
                </Row>
                <Row>
                  <Col xs={{size: 6, offset: 3}} sm={{size:8}}>
                    <Button  type="submit" className="form-btn">SEND</Button>
                  </Col>
                </Row>
              </Container>
            </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
