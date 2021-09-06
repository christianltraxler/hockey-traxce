import React, {useState} from 'react';
import { Row, Col } from "react-bootstrap";

const Skaters = () => {
  const [isActive, setActive] = useState("A");



  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var letterLinks = alphabet.map(letter => { 
    return(<>
      <input className={`btn btn-primary ${isActive === letter ? "active" : ""}`} 
              key={letter.charCodeAt()} value={letter} id={letter} 
              onClick={e => setActive(e.target.value)} 
              type="Button" readOnly={true}/>
      </>);
  });

  return(
    <section className="skaters-page">
      <Row>
        <div className="text">Skaters</div>
      </Row>
      <Row className="justify-content-center text-center">
        <h3>Skater Directory</h3>
        <Row>
          <div className="text-center" role="toolbar" aria-label="Letter Links Toolbar">
            {letterLinks}
          </div>
        </Row>
        <Row className="player-links">
          <Col sm={3} md={3} lg={3}>
            <table className="table-sm table-dark table-hover center">
              <tbody>
                
              </tbody>
            </table>
          </Col>
          <Col sm={3} md={3} lg={3}>
            <table className="table-sm table-dark table-hover center">
              <tbody>
                
              </tbody>
            </table>
          </Col>
          <Col sm={3} md={3} lg={3}>
            <table className="table-sm table-dark table-hover center">
              <tbody>
                
              </tbody>
            </table>
          </Col>
          <Col sm={3} md={3} lg={3}>
            <table className="table-sm table-dark table-hover center">
              <tbody>
                
              </tbody>
            </table>
          </Col>
        </Row>
        <Row>
          <div className="text-center" role="toolbar" aria-label="Letter Links Toolbar">
            {letterLinks}
          </div>
        </Row>
      </Row>
      <Row className="top-skaters"> 
        <Col className="text-center" sm={6} md={6} lg={6}>
          <h2>Top Forwards</h2>
        </Col>
        <Col className="text-center" sm={6} md={6} lg={6}>
          <h2>Top Defensemen</h2>
        </Col>
        <br/>
        (Link to full Player Stats Page)
      </Row>
    </section>
  );
 
};
export default Skaters;