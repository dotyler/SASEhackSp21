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

import BoardContainer from "components/boardcontainer/BoardContainer.jsx";

// reactstrap components
import { Card, Container, Row } from "reactstrap";

// core components
import Header from "components/Headers/Header.js";
import DetailedAccordion from "components/accordion.js";
import SetReminder from "../examples/SetReminder.js";

const MATH1412 = () => {
  return (
    <>
      {/*<Header />*/}
      {/* Page content */}
      
      <Header />
      
      <Container >
        <Row>
          <div className="mb-5 mb-xl-0 col-xl-8">
            <DetailedAccordion />
          </div>
          <div className="col-xl-4">
            <SetReminder />
            </div>
        </Row>
      </Container>
    </>
  );
};

export default MATH1412;
