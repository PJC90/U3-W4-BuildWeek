import { Container, Row, Col } from "react-bootstrap";

const ExperienceCard = function ({ experience }) {
  return (
    <Container fluid>
      <Row className="">
        <Col lg={1} className="px-0">
          <img
            src={experience.image}
            alt={experience.description}
            className="img-fluid"
          />
        </Col>
        <Col className="d-flex flex-column">
          <p className="m-0 fw-semibold">{experience.role}</p>
          <p className="m-0">{experience.company}</p>
          <small className="opacity-75">
            {/* IMPORTA DATE FNS PER GESTIRE MEGLIO LE DATE. */}
            {new Date(experience.startDate).toDateString()}
          </small>
          <small className="opacity-75">Roma, Italia</small>
        </Col>
      </Row>
    </Container>
  );
};

export default ExperienceCard;
