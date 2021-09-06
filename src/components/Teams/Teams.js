import "./Teams.css";

import { Row, Col } from "react-bootstrap";

const Teams = () => {
  return(
    <section className="teams-page">
      <Row>
        <div className="text">Teams</div>
      </Row>
      <Row> 
        <Row> 
          <Col sm={9} md={9} lg={9}>
            <h3>Standings</h3>
          </Col>
          <Col sm={3} md={3} lg={3}>
            <div className="standings-type-selector">
              Standings Toggle
            </div> 
          </Col>
        </Row>
        <Col sm={3} md={3} lg={3}>
          <div className="division text-center border"> 
            <h4>Atlantic</h4>
            <div className="dropdown-divider"></div>
          </div>
        </Col>
        <Col sm={3} md={3} lg={3}>
          <div className="division text-center border"> 
            <h4>East</h4>
            <div className="dropdown-divider"></div>
          </div>
        </Col>
        <Col sm={3} md={3} lg={3}>
          <div className="division text-center border"> 
            <h4>Central</h4>
            <div className="dropdown-divider"></div>
          </div>
        </Col>
        <Col sm={3} md={3} lg={3}>
          <div className="division text-center border"> 
            <h4>Pacific</h4>
            <div className="dropdown-divider"></div>
          </div>
        </Col>
      </Row>
      <Row>
        <h1>Today's Games</h1>
      </Row>
      <Row>
        <h1>Team Stats</h1>
        (Link to full Team Stats Page)
      </Row>
    </section>
  );
 
};

export default Teams;