import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../Redux/actions/loading";
import {
  getAllComments,
  getAllPosts,
  setPostsComments
} from "../Redux/actions/posts";
import Post from "./Post";
import CreatePost from "./CreatePost";
import { getAllProfiles, getMyProfile } from "../Redux/actions";
import RightSideBar from "./RightSideBarHome";
import LeftSidebar from "./LeftSideHome";
import EventiConsigliati from "./EventiConsigliati";

const Home = function () {
  const isLoading = useSelector((state) => state.loading.isLoading);
  const allPosts = useSelector((state) => state.posts.allPosts);
  const comments = useSelector((state) => state.posts.comments);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts()).then(() => {
      dispatch(getAllComments()).then(() => {
        dispatch(getAllProfiles()).then(() => {
          dispatch(getMyProfile()).then((personalProfile) => {
            if (personalProfile) {
              dispatch(setLoading(false));
            }
          });
        });
      });
    });
  }, []);

  useEffect(() => {
    const filterComments = () => {
      const postsIds = allPosts.map((post) => post._id);
      const filteredComments = comments.filter((comment) =>
        postsIds.some((postId) => postId === comment.elementId)
      );
      dispatch(setPostsComments(filteredComments));
    };
    if (!isLoading) {
      filterComments();
    }
  }, [isLoading]);

  return (
    <Container>
      <Row className="">
        <Col lg={2}>
          <LeftSidebar />
        </Col>
        <Col lg={6}>
          <CreatePost />
          {!isLoading
            ? allPosts.map((post) => <Post key={post._id} post={post} />)
            : null}
          <EventiConsigliati />
        </Col>
        <Col lg={3} style={{ marginTop: "1rem" }}>
          <RightSideBar />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
