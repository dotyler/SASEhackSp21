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
import { MDBDataTableV5 } from 'mdbreact';
import Header from "components/Headers/Header";
import { Container } from "reactstrap";

export default function AllAssignments() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'Class',
        field: 'class',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Assignment',
        field: 'assignment',
        width: 270,
      },
      {
        label: 'Due Date',
        field: 'date',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Type',
        field: 'priority',
        sort: 'asc',
        width: 100,
      },
    ],
    rows: [
      {
        class: 'MATH 1426',
        assignment: 'Homework 12',
        date: '2021/03/29',
        priority: 'Homework',
      },
      {
        class: 'CHEM 2321',
        assignment: 'Lab Report 8',
        date: '2021/04/20',
        priority: 'Lab',
      },
      {
              
        class: 'CSE 1310',
        assignment: 'System Architect',
        date: '2021/04/25',
        priority: 'Project',
      },
      {
        class: 'MATH 1426',
        assignment: 'Final Exam',
        date: '2021/05/25',
        priority: 'Exam',
      },
      {
        class: 'ENGR 1250',
        assignment: 'Final Exam',
        date: '2021/05/25',
        priority: 'Exam',
      },

      {
        class: 'MATH 1426',
        assignment: 'Final Exam',
        date: '2021/05/25',
        priority: 'Exam',
      },

      
    ],
  });

  return (<><Header />
  <Container style={{background:"SeaShell"}} fluid>
  <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} /></Container></>);
}
