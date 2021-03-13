import React, { useState, useContext } from "react"
import { Questions } from "../Helpers/QuestionBank"
import { QuizContext } from "../Helpers/Contexts"
import "../App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Image from "react-bootstrap/Image"
import {
  Container,
  Row,
  Col,
  ButtonGroup,
  Button,
  ProgressBar,
} from "react-bootstrap"
export default function Quiz() {
  const { score, setScore, setGameState } = useContext(QuizContext)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [optionChosen, setOptionChosen] = useState("")

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1)
    }

    setCurrentQuestion(currentQuestion + 1)
  }
  const finishQuiz = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1)

      console.log(score)
    }
    setGameState("endscreen")
  }

  return (
    <>
      <div className="Quiz">
        <Container fluid className="quizContainer">
          <Row fluid>
            <Col md={1}>
              <ButtonGroup aria-label="Basic example" size="sm">
                <Button variant="secondary" size="sm">
                  Left
                </Button>
                <Button variant="secondary" size="sm">
                  Middle
                </Button>
                <Button variant="secondary" size="sm">
                  Right
                </Button>
              </ButtonGroup>
            </Col>
            <Col md={{ span: 4, offset: 3 }}>
              <ProgressBar animated now={45} />
            </Col>
            <Col md="auto"></Col>
          </Row>
          <Row>
            <Col
              md={{ span: 3, offset: 3 }}
            >{`md={{ span: 3, offset: 3 }}`}</Col>
            <Col
              md={{ span: 3, offset: 3 }}
            >{`md={{ span: 3, offset: 3 }}`}</Col>
          </Row>
          <Row>
            <Col
              md={{ span: 6, offset: 3 }}
            >{`md={{ span: 6, offset: 3 }}`}</Col>
          </Row>
          <Row>
            <Col md={4}>md=4</Col>
            <Col
              md={{ span: 4, offset: 4 }}
            >{`md={{ span: 4, offset: 4 }}`}</Col>
          </Row>
          <Row>
            <h1>{Questions[currentQuestion].prompt}</h1>
            <Col lg={{ span: 4, offset: 4 }}>
              {Questions[currentQuestion].image && (
                <Image src={Questions[currentQuestion].image} fluid />
              )}
            </Col>

            <div className="options">
              <button onClick={() => setOptionChosen("A")}>
                {Questions[currentQuestion].optionA}
              </button>
              <button onClick={() => setOptionChosen("B")}>
                {Questions[currentQuestion].optionB}
              </button>
              <button onClick={() => setOptionChosen("C")}>
                {Questions[currentQuestion].optionC}
              </button>
              <button onClick={() => setOptionChosen("D")}>
                {Questions[currentQuestion].optionD}
              </button>
            </div>
            {currentQuestion === Questions.length - 1 ? (
              <button onClick={finishQuiz}>Finish Quiz</button>
            ) : (
              <button onClick={nextQuestion}>Next Question</button>
            )}
          </Row>
        </Container>
      </div>
    </>
  )
}
