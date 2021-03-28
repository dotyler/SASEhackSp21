import React from 'react';
// reactstrap components
import {Container,Button} from "reactstrap";
import './App.css';
import BoardContainer from './components/container/BoardContainer';

function App() {
  return (
    <>
      <Container className="order-xl-1 col-xl-8 center">
        <br></br>
        <Button color="primary">Sav</Button>{' '}
        <Button color="primary">Upload</Button>{' '}
        <Button color="primary">Share</Button>{' '}

        <br></br>
      </Container>
      <div>
        <Container fluid>
          {<BoardContainer />}
        </Container>
      </div>
      
    </>
  );
}

export default App;
