import { Row, Col } from "react-bootstrap";

const Games = () => {
  const games = {};
  return(
    <section className="games-page">
      <Row>
        <div className="text">Games</div>
      </Row>
      <Row> 
        <Col sm={9} md={9} lg={9}>
          <Row>
            <Col sm={3} md={3} lg={3}/>
            <Col sm={3} md={3} lg={3}>
              <div className="dates-picker"> 
                Dates
              </div>
            </Col>
            <Col sm={3} md={3} lg={3}>
              <div className="teams-picker"> 
                Teams
              </div>
            </Col>
            <Col sm={3} md={3} lg={3}/>
          </Row>
          <div className="day-card justify-content-center"> 
            <h5>October 13, 2021</h5>
            <Row> 
              <Col className="away-team text-center" sm={4} md={4} lg={4}>
                <img src="logo.svg" alt="Away Logo"/>
                <h4>Away Team</h4>
                <p>0-0-0</p>
              </Col>
              <Col sm={4} md={4} lg={4}>
                <div className="center-area justify-content-center text-center">
                    <p>at</p>
                    <p>7:00PM EST</p>
                    <p>Location</p>
                </div>
              </Col>
              <Col className="home-team text-center" sm={4} md={4} lg={4}>
                <img src="logo.svg" alt="Home Logo"/>
                <h4>Home Team</h4>
                <p>0-0-0</p>
              </Col>
              <div>
                <div className="dropdown-divider"></div>
              </div>
            </Row>
          </div>
        </Col>
        <Col className="standings" sm={3} md={3} lg={3}>
          <div className="border">
            <div className="text-center">
              <h3>Standings</h3>
            </div>
            <div className="dropdown-divider"></div>
            <h4>Atlantic</h4>
            <Row className="align-items-center">
              <Col sm={2} md={2} lg={2}>
                <img src="logo.svg" alt="Logo"/>
              </Col>
              <Col sm={6} md={6} lg={6}>
                <p>Toronto Maple Leafs</p>
              </Col>
              <Col sm={4} md={4} lg={4}>
                <p>82GP | 100PTS </p>
              </Col>
            </Row>
            <br/>
            <h4>East</h4>
            <br/>

            <h4>Central</h4>
            <br/>

            <h4>Pacific</h4>
            <br/>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Games;