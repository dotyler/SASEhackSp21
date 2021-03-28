/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col, Button} from "reactstrap";
import Alerts from "./alerts.js";
import {BrowserRouter as Router,Route, Redirect,Switch} from 'react-router-dom';

const Header = () => {










  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Intro to Programming
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                        <a href={"https://mentis.uta.edu/explore/profile/fadiah-qudah"}>CSE 1310</a>
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-laptop-code" />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <div className="col">
                      <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        98.58%
                      </span>{" "}
                      <span className="text-nowrap">A</span>
                    </p>
                      </div>
                      <Col className="col-auto">
                        <div >
                        <Button color="primary" size="sm" style={{margin: "10px"}}>View Course</Button>{' '}

                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Calculus I
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0"><a href={"https://mentis.uta.edu/explore/profile/mark-krasij"}>MATH 1426</a></span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <i className="fas fa-square-root-alt" />
                        </div>
                      </Col>
                    </Row>
                    
                    <Row>
                      <div className="col">
                      <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-yellow mr-2">
                         73.48%
                      </span>{" "}
                      <span className="text-nowrap">C</span>
                    </p>
                      </div>
                      <Col className="col-auto">
                        <div >
                        <Button color="primary" size="sm" style={{margin: "10px"}}>View Course</Button>{' '}

                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Problem Solving
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0"><a href={"https://mentis.uta.edu/explore/profile/rosie+-kallie"}>ENGR 1250</a></span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <i className="fas fa-tools" />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <div className="col">
                      <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-green mr-2">
                         88.45%
                      </span>{" "}
                      <span className="text-nowrap">B</span>
                    </p>
                      </div>
                      <Col className="col-auto">
                        <div >
                        <Button color="primary" size="sm" style={{margin: "10px"}}>View Course</Button>{' '}

                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Organic Chemistry I
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0"><a href={"https://mentis.uta.edu/explore/profile/rodrigo-augusto-silva-dos-santos"}>CHEM 2321</a></span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                          <i className="ni ni-atom" />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <div className="col">
                      <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-warning mr-2">
                         65.64%
                      </span>{" "}
                      <span className="text-nowrap">D</span>
                    </p>
                      </div>
                      <Col className="col-auto">
                        <div >
                        <Button color="primary" size="sm" style={{margin: "10px"}}>View Course</Button>{' '}

                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
