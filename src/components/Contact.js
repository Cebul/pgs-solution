import React from 'react'
import { Button, Col, Container, Row, Form, Input } from 'reactstrap'

const styles = {
  container: {
    position: "absolute",
    top: "50%",
    marginTop: -150
  }
}


const Contact = () => {
  return (
    <Container style={styles.container}>
      <Row>
        <Col sm={{ size: 8, offset: 3}} md={{ size: 5, offset: 4}} lg={{ size: 5, offset: 4}}>
          <Form>
            <Container style={{border: "2px solid #222", paddingTop: 70, paddingBottom: 50, margin: "0 auto"}}>
              <Row>
                <Col sm={{size:8, offset: 2}}>
                  <Input type="text" required />
                </Col>
              </Row>
              <Row>
                <Col sm={{size:8, offset: 2}}>
                  <Input type="email" required />
                </Col>
              </Row>
              <Row>
                <Col sm={{size:8, offset: 2}}>
                  <Input type="textarea" />
                </Col>
              </Row>
              <Row>
                <Col sm={{size:8, offset: 7}}>
                  <Button>SEND</Button>
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
