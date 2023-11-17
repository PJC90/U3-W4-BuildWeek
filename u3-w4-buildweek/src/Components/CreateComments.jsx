import { useState } from "react";
import {
  InputGroup,
  FormControl,
  Button,
  Container,
  Row,
  Col
} from "react-bootstrap";
import { EmojiSmile, CardImage } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { postComment } from "../Redux/actions/posts";

const CreateComments = ({ postId }) => {
  const [inputValue, setInputValue] = useState(null);

  const isLoading = useSelector((state) => state.loading.isLoading);
  const personalProfile = useSelector(
    (state) => state.experiences.personalProfile
  );

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      dispatch(postComment(inputValue, "5", postId)).then(() => {
        setInputValue("");
      });
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <Container fluid className="mb-2 mt-3">
      <Row>
        <Col
          xs={1}
          className="px-0 d-flex justify-content-center align-items-center"
        >
          {" "}
          <div
            className="rounded-circle text-white d-flex justify-content-center align-items-center"
            style={{
              width: "40px",
              aspectRatio: "1/1",
              backgroundColor: "#78909c"
            }}
          >
            {!isLoading ? personalProfile.name.split("")[0].toUpperCase() : "!"}
          </div>
        </Col>
        <Col xs={11}>
          <InputGroup className="rounded-pill">
            <FormControl
              placeholder="Aggiungi un commento"
              aria-label="Aggiungi un commento"
              value={inputValue}
              onChange={handleInputChange}
              className="rounded-start-pill"
              style={{ borderRight: "none" }}
            />
            <InputGroup.Text
              style={{ backgroundColor: "transparent" }}
              className="rounded-end-pill"
            >
              <button
                className="border-0 rounded-3 px-2 py-2"
                style={{
                  backgroundColor: "transparent",
                  cursor: "not-allowed"
                }}
              >
                <EmojiSmile />
              </button>
              <button
                className="border-0 rounded-3 px-2 py-2"
                style={{
                  backgroundColor: "transparent",
                  cursor: "not-allowed"
                }}
              >
                <CardImage />
              </button>
            </InputGroup.Text>
          </InputGroup>
        </Col>
        <Col className="offset-1 mt-1">
          {" "}
          {inputValue ? (
            <Button
              variant="primary"
              className="rounded-pill py-1 small"
              onClick={handleSubmit}
            >
              Pubblica
            </Button>
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default CreateComments;
