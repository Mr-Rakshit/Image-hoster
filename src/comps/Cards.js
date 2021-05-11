import React from "react";
import { Card , Button ,Container ,Row ,Col} from 'react-bootstrap'
function Cards ({url}) {
    const link = url
    return (
<div className="p-3 mb-2 bg-primary text-white App-component" >
      <h1 class="text-center">
       Photo
        <span class="badge bg-secondary r">Viewer</span>
        </h1>
    <Container>
      <Row className="justify-content-center row-cols-3">
      <Col>
     <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={link} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      1
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>

    </Row>
    </Container>
    </div>
    )
    }


export default Cards;