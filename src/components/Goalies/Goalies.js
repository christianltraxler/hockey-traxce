import { Row, Col } from "react-bootstrap";

const Goalies = () => {
  return(
    <section className="goalies-page">
      <Row>
        <div className="text">Goalies</div>
      </Row>
      <Row>
        <h1>Search</h1>
        (Similar to Stats Trax)
        (Filter by year)
      </Row>
      <Row> 
        <h1>Goalie Stats</h1>
          <h2>Forwards</h2>
          <Col sm={3} md={3} lg={3}>
            <div className="border"> 
              <h4>GAA</h4>
              <br/>
            </div>
          </Col>
          <Col sm={3} md={3} lg={3}>
            <div className="border"> 
              <h4>SV%</h4>
              <br/>
            </div>
          </Col>
          <Col sm={3} md={3} lg={3}>
            <div className="border"> 
              <h4>Sample</h4>
              <br/>
            </div>
          </Col>
          <Col sm={3} md={3} lg={3}>
            <div className="border"> 
              <h4>Sample</h4>
              <br/>
            </div>
          </Col>
        (Link to full Goalie Stats Page)
      </Row>
    </section>
  );
 
};
export default Goalies;