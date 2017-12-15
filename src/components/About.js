import React from 'react'
import {Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap'
import img1 from '../images/image1.png'
import img2 from '../images/image2.png'
import img3 from '../images/image3.png'

const styles = {
  container: {
    backgroundColor: "#F8F8F8",
    height: "100%",
    padding: "14%",
    paddingTop: 40,
    paddingBottom: 150
  },
  column: {
    boxShadow: "0 0 10px #fff",
    marginTop: "5%"
  },
  cardBody: {
    fontSize: 12
  },
  cardTitle: {
    fontSize: 16
  }
} // I used this method, to show that I know her

const About = () => {
  return (
    <Container fluid style={styles.container}>
      <Row>
        <Col xs={12} sm={{size:12}} md={{size:4}} lg={{size:4}}>
          <Card style={styles.column}>
            <CardImg top width="100%" src={img1} alt="Image" />
            <CardBody style={styles.cardBody}>
              <CardTitle style={styles.cardTitle}>Lorem ipsum</CardTitle>
              <CardText>Etiam iaculis turpis vitae lacus placerat vulputate. Sed laoreet ornare laoreet. Nullam in ipsum velit.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} sm={{size:12}} md={4} lg={{size:4}}>
          <Card style={styles.column}>
            <CardImg top width="100%" src={img2} alt="Image" />
            <CardBody style={styles.cardBody}>
              <CardTitle style={styles.cardTitle}>Lorem ipsum</CardTitle>
              <CardText>Etiam iaculis turpis vitae lacus placerat vulputate. Sed laoreet ornare laoreet. Nullam in ipsum velit.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} sm={{size:12}} md={4} lg={{size:4}}>
          <Card style={styles.column}>
            <CardImg top width="100%" src={img3} alt="Image" />
            <CardBody style={styles.cardBody}>
              <CardTitle style={styles.cardTitle}>Lorem ipsum</CardTitle>
              <CardText>Etiam iaculis turpis vitae lacus placerat vulputate. Sed laoreet ornare laoreet. Nullam in ipsum velit.</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  ) //return
} //About

export default About
