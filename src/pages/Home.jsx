import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  const className = "btn-primary";
  return (
    <Container className="home-container d-flex align-items-center justify-content-center">
      <Row>
        <Col className="text-center text-white">
          <h1>Join the buzz</h1>
          <h2>
            Your favorite actors, best friends and neighbors are here. And so
            are the top films, series and more. Ready to watch? Enter your email
            to create or restart your membership.
          </h2>
        </Col>
      </Row>
 
    </Container>
  );
}

export default Home;
