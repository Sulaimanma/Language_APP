import React, { useContext } from "react";
import classes from "./lessoncard.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, ProgressBar } from "react-bootstrap";
import { QuizContext } from "../../Helpers/Contexts";

export default function LessonCard(props) {
  const { setGameState, setLanguage, language } = useContext(QuizContext);
  return (
    <Row className={classes.CardDiv} onClick={() => setGameState("quiz")}>
      <Col md={2}>
        <Image
          className={classes.ImageDiv}
          roundedCircle
          src={props.imgUrl}
        ></Image>
      </Col>
      <Col md={6}>
        <div className={classes.TextDiv}>
          <Row>
            {" "}
            <h2> {props.title}</h2>
          </Row>
          <Row>
            <p> {props.intro}</p>
          </Row>
        </div>
      </Col>
      <Col md={4}>
        <ProgressBar
          className={classes.ProgressBar}
          variant="success"
          now={40}
        />
      </Col>
    </Row>
  );
}
