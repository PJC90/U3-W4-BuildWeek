import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../Redux/actions/loading";
import { getAllPosts } from "../Redux/actions/posts";
import Post from "./Post";
import LeftSidebar from "./LeftSideHome";

const Home = function () {
  const isLoading = useSelector((state) => state.loading.isLoading);
  const allPosts = useSelector((state) => state.posts.allPosts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts()).then(() => {
      dispatch(setLoading(false));
    });
  }, []);
  return (
    <Container>
      <Row className="">
        <Col lg={2}><LeftSidebar/></Col>
        <Col lg={6}>
          {!isLoading
            ? allPosts.map((post) => <Post key={post._id} post={post} />)
            : null}
        </Col>
        <Col lg={3}>right-sidebar</Col>
      </Row>
    </Container>
  );
};

export default Home;
