import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Cards(props) {
    const speciality = 'Web-Developer'
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.content}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{props.age}</ListGroup.Item>
        <ListGroup.Item>{props.gender}</ListGroup.Item>
        <ListGroup.Item>{speciality}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">{props.link}</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Cards;