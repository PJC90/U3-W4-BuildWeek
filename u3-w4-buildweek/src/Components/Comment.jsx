import { useEffect, useState } from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import { useSelector } from "react-redux";

const Comment = ({ comment }) => {
  const allProfiles = useSelector((state) => state.experiences.allProfiles);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const tryGetUser = () => {
      const userFound = allProfiles.filter(
        (profile) => profile.email === comment.author
      );
      if (userFound.length > 0) {
        setUser(userFound);
      }
    };
    tryGetUser();
  }, [allProfiles]);
  return (
    <Container fluid>
      <Row>
        <Col xs={1} className="px-0">
          {user ? (
            user.image
          ) : (
            <div
              className="bg-secondary rounded-circle text-white d-flex justify-content-center align-items-center"
              style={{ width: "40px", aspectRatio: "1/1" }}
            >
              {comment.author.split("")[0].toUpperCase()}
            </div>
          )}
        </Col>
        <Col className="bg-light rounded-bottom-3 rounded-end-3 border d-flex flex-column py-2 gap-2">
          <div className="d-flex justify-content-between">
            <span className="fw-semibold">
              {comment.author.split("@")[0].charAt(0).toUpperCase() +
                comment.author.slice(1)}
            </span>
            <small>5 Giorni</small>
          </div>
          {comment.comment}
        </Col>
      </Row>
    </Container>
  );
};

export default Comment;
