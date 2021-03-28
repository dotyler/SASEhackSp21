import React, { useRef, useEffect, useState } from 'react';
import WebViewer from '@pdftron/webviewer';
import './pdftron.css';
import { Button , Alert} from 'react-bootstrap';
import Header from "components/Headers/Header.js";


const PDFTRONExample = () => {
  const viewer = useRef(null);
  const [show, setShow] = useState(true);
  // if using a class, equivalent of componentDidMount 
  useEffect(() => {
    WebViewer(
      {
        path: 'lib',
        initialDoc: 'public/files/2013fa121final_exam_sample.pdf',
      },
      viewer.current,
    ).then((instance) => {
      const { docViewer, Annotations } = instance;
      const annotManager = docViewer.getAnnotationManager();

      docViewer.on('documentLoaded', () => {
        const rectangleAnnot = new Annotations.RectangleAnnotation();
        rectangleAnnot.PageNumber = 1;
        // values are in page coordinates with (0, 0) in the top left
        rectangleAnnot.X = 100;
        rectangleAnnot.Y = 150;
        rectangleAnnot.Width = 200;
        rectangleAnnot.Height = 50;
        rectangleAnnot.Author = annotManager.getCurrentUser();

        annotManager.addAnnotation(rectangleAnnot);
        // need to draw the annotation otherwise it won't show up until the page is refreshed
        annotManager.redrawAnnotation(rectangleAnnot);
      });
    });
  }, []);

  return (
<>
<Header />
    <div className="pdftron">
      <div className="header">
      
      
      <Alert show={show} variant="success">
      <Button variant="primary" onClick={() => setShow(false)} variant="outline-success">
            Submit Now
          </Button>{' '}
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Assignment Submitted</Button>}
      
      
      
      </div>
      
      <div className="webviewer" ref={viewer}></div>
    </div>
</>

  );
};

export default PDFTRONExample;
