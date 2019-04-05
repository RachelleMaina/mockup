import React from "react";
import {
    Form, Button, Col, Row, Container,
  } from 'react-bootstrap';

const Buttons = () =>(
    <Container>
    <Row>
      <Col>
      <div>
    <Button className="btn-one">Button</Button><br /><br /><br />
    <Button className="btn-two">Button</Button><br /><br /><br />
    <Button className="btn-three">Button</Button><br /><br /><br />
    <Button className="btn-four">Button</Button><br /><br /><br />
    <i class="fa fa-trash" aria-hidden="true"></i>
    </div>
    </Col>
        </Row>
      </Container>
);
export default Buttons;