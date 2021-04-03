import React, { useState, useContext, useEffect } from "react"
import { Questions } from "../Helpers/QuestionBank"
import { QuizContext } from "../Helpers/Context"
import "../App.css"
import "./quiz.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Image from "react-bootstrap/Image"
import { IconContext } from "react-icons"
import { IoClose } from "react-icons/io5"
// import { FaRegKeyboard } from "react-icons/fa"
import { HiOutlineLightBulb } from "react-icons/hi"
import { TiTick } from "react-icons/ti"
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Quiz(props) {
  const { score, setScore, wordData } = useContext(QuizContext)
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [optionChosen, setOptionChosen] = useState("")
  const [cont, setCont] = useState(false)

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1)
    }
    setCont(false)
    setCurrentQuestion(currentQuestion + 1)
  }
  const finishQuiz = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1)

      console.log(score)
    }
  }
  const handleOption = () => {
    setCont(true)
  }
  useEffect(() => {
    optionChosen.length !== 0 ? setCont(true) : setCont(false)
    console.log("^^^^^^^^^^^^^^^^^^")
    console.log(optionChosen)
    console.log(optionChosen.length !== 0)
  }, [optionChosen])

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
            <Row className="d-flex justify-content-center">
              <Col md={2} xs={1} className="mx-auto">
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

              <Col xs={{ span: 1, offset: 1 }} className="mx-auto-right">
                <div className="iconCloseDiv">
                  <div id="iconItem" className="mx-auto">
                    <Link to="/">
                      <IoClose />
                    </Link>
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
            <Col md={4} className="float-left">
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
                  onClick={() => {
                    setOptionChosen("A")
                    handleOption()
                  }}
                  className="optionButton"
                  size="lg"
                >
                  {Questions[currentQuestion].optionA}
                </Button>

                <Button
                  variant="light"
                  onClick={(e) => {
                    setOptionChosen("B")
                    handleOption(e)
                  }}
                  className="optionButton"
                  size="lg"
                >
                  {Questions[currentQuestion].optionB}
                </Button>
                {Questions[currentQuestion].optionC && (
                  <Button
                    variant="light"
                    onClick={(e) => {
                      setOptionChosen("C")
                      handleOption(e)
                    }}
                    className="optionButton"
                    size="lg"
                  >
                    {Questions[currentQuestion].optionC}
                  </Button>
                )}
                {Questions[currentQuestion].optionD && (
                  <Button
                    variant="light"
                    onClick={(e) => {
                      setOptionChosen("D")
                      handleOption(e)
                    }}
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
          <div className="nextDiv">
            {cont ? (
              <Container fluid>
                {Questions[currentQuestion].answer === optionChosen ? (
                  <Row className="trueFeedback">
                    <Col xs={1} className="correctLabel">
                      <div className="tickContainer1">
                        <TiTick style={{ color: "#4CAF50" }} />
                      </div>
                    </Col>
                    <Col xs={1} className="correctText">
                      <div className="result">
                        <h1 className="resultCorrect">Correct</h1>
                      </div>
                    </Col>
                  </Row>
                ) : (
                  <>
                    <Row>
                      <Col xs={1} style={{ whitespace: "nowrap" }}>
                        <h1 className="correctAnswer">Correct Answer:</h1>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={1}>
                        <h1
                          style={{
                            fontsize: "1.125rem",
                            lineheight: "1.7",
                            fontweight: "500",
                            color: " #50545c",
                          }}
                        >
                          {Questions[currentQuestion].answer}
                        </h1>
                      </Col>
                    </Row>

                    <Row className="falseFeedback">
                      <Col xs={2} className="correctLabel">
                        <div className="tickContainer">
                          <IoClose style={{ color: "#e2222e" }} />
                        </div>
                      </Col>
                      <div className="result">
                        <h1 className="resultCorrect1">Incorrect</h1>
                      </div>
                    </Row>
                  </>
                )}

                {currentQuestion === Questions.length - 1 ? (
                  Questions[currentQuestion].answer === optionChosen ? (
                    <Link to="/endscreen">
                      <Button
                        onClick={finishQuiz}
                        className="next"
                        variant="success"
                        size="sm"
                        style={{ fontsize: "17px !important" }}
                      >
                        Finish Quiz
                      </Button>
                    </Link>
                  ) : (
                    <Link to="/endscreen">
                      <Button
                        onClick={finishQuiz}
                        variant="danger"
                        className="next"
                        size="sm"
                        style={{ fontsize: "17px !important" }}
                      >
                        Finish Quiz
                      </Button>
                    </Link>
                  )
                ) : Questions[currentQuestion].answer === optionChosen ? (
                  <Button
                    onClick={nextQuestion}
                    className="next"
                    variant="success"
                    size="sm"
                    style={{ fontsize: "17px !important" }}
                  >
                    Continue
                  </Button>
                ) : (
                  <Button
                    onClick={nextQuestion}
                    variant="danger"
                    className="next"
                    size="sm"
                    style={{ fontsize: "17px !important" }}
                  >
                    Continue
                  </Button>
                )}
              </Container>
            ) : null}
          </div>
        </Row>
      </div>
    </>
  )
}
