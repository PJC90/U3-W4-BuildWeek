import { useEffect, useState } from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  differenceInWeeks,
  differenceInMonths,
  differenceInYears,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds
} from "date-fns";

import { Trash } from "react-bootstrap-icons";
import { deleteComment } from "../Redux/actions/posts";

const Comment = ({ comment }) => {
  const allProfiles = useSelector((state) => state.experiences.allProfiles);
  const [user, setUser] = useState(null);

  const dispatch = useDispatch();

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
            return `${minutes} minuti`;
          } else {
            const seconds = differenceInSeconds(endDate, startDate);
            return `${seconds} secondi`;
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
                comment.author.split("@")[0].slice(1)}
            </span>
            <small className="d-flex gap-3 align-items-center">
              {formatDistance(comment.createdAt, new Date())}{" "}
              <Trash
                role="button"
                onClick={() => dispatch(deleteComment(comment._id))}
              />
            </small>
          </div>
          {comment.comment}
        </Col>
      </Row>
    </Container>
  );
};

export default Comment;
