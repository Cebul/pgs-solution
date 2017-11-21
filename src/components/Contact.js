import React from 'react'
import { Button, Col, Container, Form, FormGroup, Row, Input, Jumbotron } from 'reactstrap'



const Contact = () => {
  return (
    <Container>
      <Row>
        <Col xs={6} sm={6} md={6} lg={6}>
          <Jumbotron>
            <Row>
              <Col xs={8} sm={8} md={8} lg={6}>
                <Form>
                  <FormGroup>
                    <Row>
                        <Input type="text" placeholder="Name" valid={true}/>
                    </Row>
                    <Row>
                      <Input type="email" placeholder="Email" valid={true} />
                    </Row>
                    <Row>
                      <Input type="textarea" placeholder="Message" />
                    </Row>
                    <Row>
                      <Button>SEND</Button>
                    </Row>
                  </FormGroup>
                </Form>
              </Col>
            </Row>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
