import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./css/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Buttons from "./components/Button";
import { Button, ButtonToolbar } from "react-bootstrap";

class App extends Component {
state = { modalShow: false };
  render() {
    let modalClose = () => this.setState({ modalShow: false });
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/buttons" component={Buttons} />
          
          <ButtonToolbar>
        <Button
          variant="primary"
          onClick={() => this.setState({ modalShow: true })}
        >
          Launch modal
        </Button>

        <Login
          show={this.state.modalShow}
          onHide={modalClose}
        />
      </ButtonToolbar>
      <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
