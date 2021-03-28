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
import { Card, Container, Row , Button} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";
import DetailedAccordion from "components/accordion.js";


const Sketchpad = () => {
  return (
    <>
    <Container className="order-xl-1 col-xl-8 center">
        <br></br>
        <Button color="primary">Save</Button>{' '}
        <Button color="primary">Upload</Button>{' '}
        <Button color="primary">Share</Button>{' '}

        <br></br>
      </Container>
      {/*<Header />
      <Container className="order-xl-1 col-xl-8">
      <DetailedAccordion />
      </Container>*/}
      <div>
    <Container fluid>
    {<BoardContainer />}
    </Container></div>
      {/*<Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow border-0">
              {<BoardContainer/>}
            </Card>
          </div>
        </Row>
      </Container>*/}
    </>
  );
};

export default Sketchpad;
