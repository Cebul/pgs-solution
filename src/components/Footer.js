import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import '../styles/_footer.css'

const Footer = () => {
  return (
    <Container fluid className="my-container">
      <Row>
        <Col xs={{size:8, offset: 2}} sm={{size:4, offset: 4}} md={{size:4, offset: 4}}>
          <div className="powered">Powered by Kamil Cebula</div>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
