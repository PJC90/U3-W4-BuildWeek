import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Button,
  Image,
  Container,
  Row,
  Col,
  ButtonGroup
} from "react-bootstrap";
import {
  HandThumbsUp,
  Chat,
  ArrowRepeat,
  Cursor,
  GlobeAmericas
} from "react-bootstrap-icons";

import {
  differenceInWeeks,
  differenceInMonths,
  differenceInYears,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds
} from "date-fns";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFetchedUsers } from "../Redux/actions/posts";
import { fetchUserByID } from "../Redux/actions/fetchUser";

const Post = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [isPostValid, setIsPostValid] = useState(true);
  // const userProfile = useRef();

  const fetchedUsers = useSelector((state) => state.posts.fetchedUsers);
  const allProfiles = useSelector((state) => state.experiences.allProfiles);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const formatDistance = (startDate, endDate) => {
    startDate = new Date(startDate);
    endDate = new Date(endDate);
    const days = differenceInDays(endDate, startDate);
    const weeks = differenceInWeeks(endDate, startDate);
    const months = differenceInMonths(endDate, startDate);
    const years = differenceInYears(endDate, startDate);
    // console.log(days, weeks, months, years, endDate, startDate);
    if (days < 7) {
      if (days === 0) {
        const hours = differenceInHours(endDate, startDate);
        if (hours !== 0) {
          return `${hours}h`;
        } else {
          const minutes = differenceInMinutes(endDate, startDate);
          if (minutes !== 0) {
            return `${minutes}minuti`;
          } else {
            const seconds = differenceInSeconds(endDate, startDate);
            return `${seconds}secondi`;
          }
        }
      }
      return `${days}d`;
    } else if (weeks >= 1 && weeks <= 3) {
      return `${weeks}s`;
    } else if (months >= 1 && months <= 11) {
      return `${months}m`;
    } else {
      return `${years}y`;
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const openProfile = () => {
    navigate("/profile/" + post.user._id);
  };

  useEffect(() => {
    if (allProfiles) {
      const foundUser = allProfiles.find(
        (user) => Object.values(user)[0] === post.user._id
      );
      if (foundUser) {
        // userProfile.current = foundUser;
        setUserProfile(foundUser);
        console.log(foundUser);
        console.info(
          "FOUNDUSER TRUE: ",
          Object.values(foundUser)[0],
          post.user._id,
          post.user.username,
          post
        );
        setIsPostValid(true);
      } else {
        console.log("FOUNDUSER FALSE: ", post._id, post);
        setIsPostValid(false);
      }
      console.log("POSTUSERID: ", post.user._id);
    }
    // const fetchUserByID = async (userId) => {
    //   if (!fetchedUsers.includes(post.user._id)) {
    //     const ENDPOINT = `https://striveschool-api.herokuapp.com/api/profile/${userId}`;
    //     try {
    //       let response = await fetch(ENDPOINT, {
    //         headers: {
    //           Authorization:
    //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUyMjc5MWM1NWU3ZTAwMThmODNjNDciLCJpYXQiOjE2OTk4ODI4OTcsImV4cCI6MTcwMTA5MjQ5N30.kOr7iDAngb-ynvpkBFXSJFA4dTCuVin-ZGRTDWNQLGk"
    //         }
    //       });
    //       if (response.ok) {
    //         const data = await response.json();
    //         //   console.log("dati ricevuti", data);
    //         console.log(data.name);
    //         dispatch(setFetchedUsers(data._id));
    //         // setUserProfile(data);
    //       } else {
    //         throw new Error("errore recupero dati");
    //       }
    //     } catch (error) {
    //       console.log(error);
    //       // dispatch(fetchUserFailure());
    //     }
    //   }
    // };
    // fetchUserByID(post.user._id);
  }, [allProfiles, userProfile]);

  return (
    <>
      {isPostValid ? (
        <Card className="my-3">
          <Card.Header className="bg-white border-0">
            <Row className="align-items-center">
              <Col xs="auto">
                <Image
                  src={
                    userProfile
                      ? userProfile.image
                        ? userProfile.image
                        : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                      : null
                  }
                  className="border-0"
                  roundedCircle
                  thumbnail
                  width={50}
                  height={50}
                  onClick={openProfile}
                />
              </Col>
              <Col className="ps-0">
                <Card.Title
                  className="fs-6 fw-semibold"
                  role="button"
                  onClick={openProfile}
                >
                  {userProfile
                    ? userProfile.name !== undefined
                      ? userProfile.name
                      : post.user.username.split("@")[0]
                    : post.user.username.split("@")[0]}
                </Card.Title>
                <Card.Subtitle className="text-muted d-flex flex-column small">
                  {Math.floor(
                    Math.random() * (60000000 - 0) + 1
                  ).toLocaleString()}{" "}
                  followers{" "}
                  <span>
                    {" "}
                    {formatDistance(post.createdAt, new Date())} ·{" "}
                    <GlobeAmericas />
                  </span>
                </Card.Subtitle>
              </Col>
              <Col xs="auto"></Col>
            </Row>
          </Card.Header>
          <Card.Body className="pt-1">
            <Card.Text>
              {post.text.length > 100 && !isExpanded ? (
                <>
                  <small className="lh-sm d-block">
                    {post.text.slice(0, 200)}
                  </small>
                  <Button variant="link" className="p-0" onClick={toggleExpand}>
                    See more
                  </Button>
                </>
              ) : (
                <>
                  <small className="lh-sm d-block">{post.text}</small>
                  {post.text.length > 200 && (
                    <Button
                      variant="link"
                      className="p-0"
                      onClick={toggleExpand}
                    >
                      See less
                    </Button>
                  )}
                </>
              )}
            </Card.Text>
            {post.image ? (
              <Container fluid>
                <Row>
                  <Col className="px-0 border-0">
                    <Image src={post.image} className="img-fluid w-100" />
                  </Col>
                </Row>
              </Container>
            ) : null}
          </Card.Body>
          <Card.Footer className="bg-white">
            <ButtonGroup
              aria-label="Social media actions"
              className="w-100 text-center"
            >
              <Button variant="" className="flex-grow-1">
                <HandThumbsUp /> Consiglia{" "}
                <span className="badge bg-secondary">1,847</span>
              </Button>
              <Button variant="" className="flex-grow-1">
                <Chat /> Commenta <span className="badge">66</span>
              </Button>
              <Button variant="" className="flex-grow-1">
                <ArrowRepeat /> Diffondi il post{" "}
                <span className="badge">66</span>
              </Button>
              <Button variant="" className="flex-grow-1">
                <Cursor /> Invia
              </Button>
            </ButtonGroup>
          </Card.Footer>
        </Card>
      ) : null}
    </>
  );
};

export default Post;
