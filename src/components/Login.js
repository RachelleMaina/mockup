import React from "react";
import { Container, Row, Col, Modal, Button, ButtonToolbar } from "react-bootstrap";
/*
const Login = () => {
  return (

      <Modal.Dialog closeButton>
  <Modal.Body className="signup-modal"  >
  <div className="main-container">


<Container>
    <Row>
      <Col>
      <h2>Sign up</h2>
      <p>
      Sign in to follow authors and topics you love, and interact with stories.
      </p>
      
  
      <Button variant="outline-secondary" className="btn-lg btn-block btn-auth">
        <i className="fab fa-google"/>&nbsp;
        Sign up with Google
      </Button>
      <Button variant="outline-secondary" className="btn-lg btn-block btn-auth">
        <i className="fab fa-facebook"/>&nbsp;
        Sign up with Facebook
      </Button>
      <Button variant="outline-secondary" className="btn-lg btn-block btn-auth">
        <i className="fab fa-twitter"/>&nbsp;
        Sign up with Twitter
      </Button>
      <br />
      <p>No account? Create one</p>
 <p>Click “Sign in” above to accept Medium’s Terms of Service & Privacy Policy.</p>
    
    </Col>
    </Row>
    </Container>

    </div>
    </Modal.Body>
</Modal.Dialog>

  );
};
export default Login;
class MyVerticallyCenteredModal extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}*/
export default class  Login extends React.Component {
  render() {
    return (
      <div className="signup-modal-wrapper">
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="signup-modal"
      >
        <Modal.Header className="signup-modal-header" closeButton>
  
        </Modal.Header>
        <Modal.Body className="signup-modal-body">
        <Container>
    <Row>
      <Col xs={{span:10, offset:1}}>
      <h2>Sign up</h2>
      <br />
        <p>
      Sign up to follow authors and topics you love, and interact with stories.
      </p>
      
  
      <Button variant="outline-secondary" className="btn-lg btn-block btn-auth">
        <i className="fab fa-google"/>&nbsp;
        Sign up with Google
      </Button>
      <Button variant="outline-secondary" className="btn-lg btn-block btn-auth">
        <i className="fab fa-facebook"/>&nbsp;
        Sign up with Facebook
      </Button>
      <Button variant="outline-secondary" className="btn-lg btn-block btn-auth">
        <i className="fab fa-twitter"/>&nbsp;
        Sign up with Twitter
      </Button>
      <br />
      <p>No account? Create one</p>
 <p>Click “Sign in” above to accept Medium’s Terms of Service & Privacy Policy.</p>
 </Col>
    </Row>
    </Container>
        </Modal.Body>
      </Modal>
      </div>

    );
  }
}

