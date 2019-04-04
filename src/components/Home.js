import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Home = () => {
  return (
    //Start Container
    <Container>
      <Row>
        {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}

        {/*Start First Section*/}

        {/*Start left column*/}
        <Col xs={3}>
          <img
            src="https://images.unsplash.com/photo-1533568054771-545f702b89eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt=""
          />
          <h3>How to Train your Dragon</h3>
          <span className="author">John Doe</span>
          <br />
          <span className="meta">17 Mar 2019 . 3 minutes Read</span>
        </Col>

        {/*End left column*/}

        {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}

        {/*Start middle column*/}
        <Col xs={{ offset: 1 }}>
          <Row>
            <Col>
              <img
                src="https://images.unsplash.com/photo-1446660262078-bb365cb9fb18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                alt=""
              />
            </Col>
            <Col>
              <h3>War of the Worlds</h3>
              <span className="author">Stephanie</span>
              <br />
              <span className="meta">11 Mar 2019 . 4 minutes Read</span>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <img
                src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                alt=""
              />
            </Col>
            <Col>
              <h3>Programming made Easy</h3>
              <span className="author">Carol Peters</span>
              <br />
              <span className="meta">11 Mar 2019 . 4 minutes Read</span>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <img
                src="https://images.unsplash.com/photo-1455165814004-1126a7199f9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                alt=""
              />
            </Col>
            <Col>
              <h3>Engineering</h3>
              <span className="author">Peterson</span>
              <br />
              <span className="meta">11 Mar 2019 . 4 minutes Read</span>
            </Col>
          </Row>
        </Col>
        {/*End middle column*/}

        {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}

        {/*Start right column*/}
        <Col xs={{ offset: 1 }}>
          <img
            src="https://images.unsplash.com/photo-1506574723610-7fe0f0c7f9ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt=""
          />
          <h3>The Secret Life of Walter Mitty</h3>
          <span className="author">John Snow</span>
          <br />
          <span className="meta">14 Mar 2019 . 2 minutes Read</span>
        </Col>
      </Row>
      <hr />
      {/*End middle column*/}
      {/*End First Section*/}

      {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}

      {/*Start Second Section*/}
      <Row>
        <Col>
          <Card className="welcome-card">
            <Card.Body>
              <Row>
                <Col>
                  <h2>Welcome to Author's Haven</h2>
                  <br />
                  <span className="author">
                    We are community of like minded authors to foster
                    inspiration and innovation by leveraging the modern web.
                    Whatever your interest, you can always find fresh thinking
                    and unique perspectives.
                  </span>
                  <br />
                </Col>
                <Col xs={3}>
                  <img
                    src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
                    alt=""
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/*End Second Section*/}

      {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}

      {/*Start Third Section*/}

      <Row>
        {/*Start LeftSection*/}
        <Col xs={7}>
          <Row>
            <Col>
              <h3>War of the Worlds</h3>
              <span className="description">
                How can employers best encourage better health among their
                employees.
              </span>
              <br />
              <br />
              <span className="author">Mary jane</span>
              <br />
              <span className="meta">11 Mar 2019 . 4 minutes Read</span>
            </Col>
            <Col xs={3}>
              <img
                src="https://images.unsplash.com/photo-1446660262078-bb365cb9fb18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                alt=""
              />
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col>
              <h3>The fashion industry and models</h3>
              <span className="description">
                The fashion industry use models that look more like regular
                people.
              </span>
              <br />
              <br />
              <span className="author">walter Mitty</span>
              <br />
              <span className="meta">11 Mar 2019 . 4 minutes Read</span>
            </Col>
            <Col xs={3}>
              <img
                src="https://images.unsplash.com/photo-1500047987328-911599186837?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
                alt=""
              />
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col>
              <h3>
                How employers can best encourage better health among their
                employees
              </h3>
              <span className="description">
                How can employers best encourage better health among their
                employees.
              </span>
              <br />
              <br />
              <span className="author">Alice</span>
              <br />
              <span className="meta">11 Mar 2019 . 4 minutes Read</span>
            </Col>
            <Col xs={3}>
              <img
                src="https://images.unsplash.com/photo-1445384763658-0400939829cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                alt=""
              />
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col>
              <h3>Does legalization of marijuana reduce crime?</h3>
              <span className="description">
                In states that have legalized marijuana for either medical or
                recreational use, any adverse effects of such increased demand.
              </span>
              <br />
              <br />
              <span className="author">Stephanie</span>
              <br />
              <span className="meta">11 Mar 2019 . 4 minutes Read</span>
            </Col>
            <Col xs={3}>
              <img
                src="https://images.unsplash.com/photo-1519181236443-b175d4c3ca1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                alt=""
              />
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col>
              <h3>Does eating gluten-free really make people healthier?</h3>
              <span className="description">
                A gluten-free diet is a diet that excludes the protein gluten.
                Gluten is found in grains such as wheat, barley, rye.
              </span>
              <br />
              <br />
              <span className="author">Peter</span>
              <br />
              <span className="meta">11 Mar 2019 . 3 minutes Read</span>
            </Col>
            <Col xs={3}>
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                alt=""
              />
            </Col>
          </Row>
        </Col>

        {/*End Left Section*/}

        {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}

        {/*Start Right Section*/}
        <Col xs={{ span: 3, offset: 1 }}>
          <Row>
            <Col>
              <h3>Popular on Author's haven</h3>
              <hr />
              <br />
              <br />
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <span className="number">01</span>
            </Col>
            <Col>
              <h3>
                Should the fashion industry use models that look more like
                regular people?
              </h3>
              <span className="description">
                The fashion industry use models that look more like regular
                people.
              </span>
              <br />
              <br />
              <span className="author">Stephanie</span>
              <br />
              <span className="meta">11 Mar 2019 . 4 minutes Read</span>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col xs={3}>
              <span className="number">02</span>
            </Col>
            <Col>
              <h3>How people can concentrate better when studying.</h3>
              <span className="description">
                How people can concentrate better when studying.
              </span>
              <br />
              <br />
              <span className="author">John Terry</span>
              <br />
              <span className="meta">11 Mar 2019 . 4 minutes Read</span>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col xs={3}>
              <span className="number">03</span>
            </Col>
            <Col>
              <h3>What makes a successful dating relationship.</h3>
              <span className="description">
                HWhat makes a successful dating relationship.
              </span>
              <br />
              <br />
              <span className="author">Crystal</span>
              <br />
              <span className="meta">11 Mar 2019 . 4 minutes Read</span>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col xs={3}>
              <span className="number">04</span>
            </Col>
            <Col>
              <h3>War of the Worlds</h3>
              <span className="author">Stephanie</span>
              <br />
              <span className="meta">11 Mar 2019 . 4 minutes Read</span>
            </Col>
          </Row>
        </Col>
        {/*End Right Section*/}

        {/*End Third Section*/}
        <br />
      </Row>
    </Container>
    //End Container
  );
};

export default Home;
