import React, { useContext } from "react";
import classes from "./lessoncard.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, ProgressBar } from "react-bootstrap";
import { QuizContext } from "../../Helpers/Contexts";

export default function LessonCard() {
  const { setGameState, setLanguage, language } = useContext(QuizContext);
  return (
    <Row className={classes.CardDiv} onClick={() => setGameState("quiz")}>
      <Col md={2}>
        <Image
          className={classes.ImageDiv}
          roundedCircle
          src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/100385/shutterstock_1164809464.jpg_1140x855.jpg"
        ></Image>
      </Col>
      <Col md={6}>
        <div className={classes.TextDiv}>
          <h2>Lesson 1: Greetings!</h2>
          <p>Learning some basic reetings</p>
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
