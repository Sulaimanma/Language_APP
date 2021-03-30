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
import { Link } from "react-router-dom"

export default function Quiz() {
  const { score, setScore, setGameState } = useContext(QuizContext)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [optionChosen, setOptionChosen] = useState("")
  const [intro, setNointro] = useState(true)

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1)
    }

    setCurrentQuestion(currentQuestion + 1)
    setNointro(false)
  }
  const finishQuiz = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1)

      console.log(score)
    }
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
              <Col md={2} xs={1}>
                <div className="iconMenu">
                  <div className="iconItem">
                    <Link to="/endscreen">
                      <HiOutlineLightBulb className="bulb" />
                    </Link>
                  </div>
                </div>
              </Col>
              <Col md={{ span: 6, offset: 1 }} xs={9}>
                <div className="progressbarDiv">
                  <ProgressBar
                    animated
                    now={(currentQuestion * 100) / (Questions.length - 1)}
                  />
                </div>
              </Col>

              <Col xs={{ span: 1, offset: 1 }}>
                <div
                  className="iconCloseDiv"
                  onClick={() => setGameState("menu")}
                >
                  <div className="iconItem">
                    <Link to="/">
                      <IoClose />
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </IconContext.Provider>
          {intro ? (
            <Row>Intro</Row>
          ) : (
            <div>
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
                        title="educational_content"
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
            </div>
          )}
        </Container>

        <Row className="nextRow">
          <Col
            md={{ span: 4, offset: 8 }}
            xs={{ span: 6, offset: 3 }}
            className="text-right"
          >
            <div className="nextDiv">
              {currentQuestion === Questions.length - 1 ? (
                <Link to="/endscreen">
                  <Button onClick={finishQuiz} className="next" size="lg">
                    Finish Quiz
                  </Button>
                </Link>
              ) : (
                <Button onClick={nextQuestion} className="next" size="lg">
                  Continue
                </Button>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
