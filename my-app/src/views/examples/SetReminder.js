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
import { MDBDataTableV5 ,MDBCard, MDBCardBody, MDBCardHeader, MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
import Header from "components/Headers/Header";
import { Container, Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';

export default function SetReminder() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'Class',
        field: 'class',
        width: 10,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Assignment',
        field: 'assignment',
        width: 20,
      },
      {
        label: 'Due Date',
        field: 'date',
        sort: 'asc',
        width: 20,
      },
      {
        label: 'Type',
        field: 'priority',
        sort: 'asc',
        width: 20,
      },
    ],
    rows: [
      {
        class: 'MATH 1426',
        assignment: 'Homework 12',
        date: '2021/03/29',
        priority: 'Homework',
        check: <MDBInput label=" " type="checkbox" id="checkbox6" />,
      },
      {
        class: 'MATH 1426',
        assignment: 'Final Exam',
        date: '2021/05/25',
        priority: 'Exam',
        check: <MDBInput label=" " type="checkbox" id="checkbox6" />,

      },
      {
        class: 'MATH 1426',
        assignment: 'Final Exam',
        date: '2021/05/25',
        priority: 'Exam',
        check: <MDBInput label=" " type="checkbox" id="checkbox6" />,

      },

      
    ],
  });

  return (<>
  <Container style={{background:"SeaShell"}} fluid>
  {/*<MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} />*/}
  <MDBCard narrow>
  <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">

    <a href="#" className="white-text mx-3">Upcoming Asssignments</a>
  </MDBCardHeader>
  <MDBCardBody cascade>
    <MDBTable btn fixed>
      <MDBTableHead columns={datatable.columns} />
      <MDBTableBody rows={datatable.rows} />
    </MDBTable>
  </MDBCardBody>
  
</MDBCard>
<Row className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
<a class="btn btn-info" onclick="toastr.info('Hi! I am info message.');">Set Reminder</a>
<FormGroup>
        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
          <option>1 day before</option>
          <option>2 day before</option>
        </Input>
      </FormGroup>
<FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Email
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Text Message
        </Label>
      </FormGroup>
      </Row>
</Container></>);
}
