import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../Redux/actions/loading";
import { getAllPosts } from "../Redux/actions/posts";
import Post from "./Post";
import CreatePost from "./CreatePost";
import { getAllProfiles, getMyProfile } from "../Redux/actions";

const Home = function () {
  const isLoading = useSelector((state) => state.loading.isLoading);
  const allPosts = useSelector((state) => state.posts.allPosts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts()).then(() => {
      dispatch(getAllProfiles()).then(() => {
        dispatch(getMyProfile()).then((personalProfile) => {
          if (personalProfile) {
            dispatch(setLoading(false));
          }
        });
      });
    });
  }, []);
  return (
    <Container>
      <Row className="">
        <Col lg={3}>left-sidebar</Col>
        <Col lg={6}>
          <CreatePost />
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
