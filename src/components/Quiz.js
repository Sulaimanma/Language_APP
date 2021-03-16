import React, { useState, useContext } from "react"
import { Questions } from "../Helpers/QuestionBank"
import { QuizContext } from "../Helpers/Contexts"
import "../App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Image from "react-bootstrap/Image"
import { IconContext } from "react-icons"
import { IoClose } from "react-icons/io5"
// import { FaRegKeyboard } from "react-icons/fa"
import { HiOutlineLightBulb, HiDownload } from "react-icons/hi"
import { RiKeyboardFill } from "react-icons/ri"
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap"

export default function Quiz() {
  const { score, setScore, setGameState } = useContext(QuizContext)
  const [currentQuestion, setCurrentQuestion] = useState(1)
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
console.log(Questions[0].wakkawakka[0])
  return (
    <>
      <div className="Quiz">
        <Container fluid className="quizContainer">
          <IconContext.Provider
            value={{
              className: "menu-icons",
              size: "1.7rem",
              color: "#666e7e",
            }}
          >
            <Row fluid>
              <Col md={2} xs={12}>
                <div className="iconMenu">
                  <div className="iconItem">
                    <RiKeyboardFill className="keyboard" />
                  </div>
                  <div className="iconItem">
                    <HiOutlineLightBulb className="bulb" />
                  </div>
                  <div className="iconItem">
                    <HiDownload className="download" />
                  </div>
                </div>
              </Col>
              <Col md={{ span: 6, offset: 1 }} xs={9}>
                <div className="progressbarDiv">
                  <ProgressBar
                    animated
                    now={((currentQuestion + 1) * 100) / Questions.length}
                  />
                </div>
              </Col>
              <Col auto></Col>
              <Col xs={1}>
                <div className="iconCloseDiv" onClick={finishQuiz}>
                  <div className="iconItem">
                    <IoClose />
                  </div>
                </div>
              </Col>
            </Row>
          </IconContext.Provider>

          <Row>
            <Col md={{ span: 4, offset: 4 }} xs={12} className="text-left">
              <div className="question">
                <h3>{Questions[currentQuestion].prompt}</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 4, offset: 4 }} className="text-left">
              {Questions[currentQuestion].image && (
                <div className="QuestionDiv">
                  <Image
                    src={Questions[currentQuestion].image}
                    fluid
                    rounded
                    className="questionImg"
                  />
                </div>
              )}
              {Questions[currentQuestion].video && (
                <div className="QuestionDiv">
                  <iframe
                    src={Questions[currentQuestion].video}
                    className="video"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              )}
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 4, offset: 4 }} className="text-left">
              <div className="options">
                <Button
                  fluid
                  variant="light"
                  onClick={() => setOptionChosen("A")}
                  className="optionButton"
                  size="lg"
                >
                  {Questions[currentQuestion].optionA}
                </Button>

                <Button
                  variant="light"
                  onClick={() => setOptionChosen("B")}
                  className="optionButton"
                  size="lg"
                >
                  {Questions[currentQuestion].optionB}
                </Button>
                {Questions[currentQuestion].optionC && (
                  <Button
                    variant="light"
                    onClick={() => setOptionChosen("C")}
                    className="optionButton"
                    size="lg"
                  >
                    {Questions[currentQuestion].optionC}
                  </Button>
                )}
                {Questions[currentQuestion].optionD && (
                  <Button
                    variant="light"
                    onClick={() => setOptionChosen("D")}
                    className="optionButton"
                    size="lg"
                  >
                    {Questions[currentQuestion].optionD}
                  </Button>
                )}
              </div>
            </Col>
          </Row>
        </Container>
        <Row className="nextRow">
          <Col
            md={{ span: 4, offset: 8 }}
            xs={{ span: 6, offset: 3 }}
            className="text-right"
          >
            <div className="nextDiv">
              {currentQuestion === Questions.length - 1 ? (
                <Button onClick={finishQuiz} className="next" size="lg">
                  Finish Quiz
                </Button>
              ) : (
                <Button onClick={nextQuestion} className="next" size="lg">
                  Next Question
                </Button>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
