import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../App.css";
import { Link } from "react-router-dom";
import "./endscreen.css";
import { TiTick } from "react-icons/ti";

export default function EndScreen(props) {
  const { score, setScore } = useContext(QuizContext);
  const restartQuiz = () => {
    setScore(0);
  };

  return (
    <div className="EndScreen">
      <Row style={{ marginTop: "20px", background: "black" }}></Row>
      <h1>
        Your score:{score}/{props.location.param1}
      </h1>

      <Row className="continueDiv">
        <Col xs={{ span: 2 }}>
          <div
            style={{
              borderRadius: "50px",
              background: "white",
              width: "50px",
              height: "50px",
              marginTop: "19px",
              paddingTop: "7px",
              marginLeft: "10px",
            }}
          >
            <TiTick style={{ fontSize: "35px", color: "#116eee" }}></TiTick>
          </div>
        </Col>
        <Col xs={{ span: 5 }} text-left>
          <h2
            style={{
              marginTop: "11px",
              fontSize: "23px",
              fontFamily: "Helvetica Neue",
              color: "white",
              marginLeft: "20px",
            }}
          >
            Congratulations!
          </h2>
          <p
            style={{
              marginTop: "4px",
              fontSize: "16px",
              fontFamily: "Helvetica Neue",
              color: "white",
              width: "157px",
              marginLeft: "20px",
              whiteSpace: "nowrap",
            }}
          >
            You completed this lesson!
          </p>
        </Col>
        <Link to="/">
          <Button variant="light" onClick={restartQuiz} size="lg">
            Continue
          </Button>
        </Link>
      </Row>
    </div>
  );
}
