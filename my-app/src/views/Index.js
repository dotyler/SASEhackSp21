import React, { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,

} from "variables/charts.js";

import Header from "components/Headers/Header.js";
import Alerts from "components/alerts.js";
import ClassAccordion from "components/accordion.js";

const Index = (props) => {
  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }


  return (
    <>
      <Header />
      <Alerts />
      {/* Page content */}
      <Container className="mt--7" fluid>

      </Container>
    </>
  );
};

export default Index;
