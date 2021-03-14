import React, { useState, useContext } from "react"
import { Questions } from "../Helpers/QuestionBank"
import { QuizContext } from "../Helpers/Contexts"
import "../App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Image from "react-bootstrap/Image"
import { IconContext } from "react-icons"
import { IoClose } from "react-icons/io5"
import { FaRegKeyboard } from "react-icons/fa"
import { HiOutlineLightBulb, HiDownload } from "react-icons/hi"
import { RiKeyboardFill } from "react-icons/ri"
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap"
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
              <Col md={{ span: 5, offset: 2 }} xs={12}>
                <ProgressBar animated now={45} />
              </Col>
              <Col auto>
                <div className="iconCloseDiv">
                  <div className="iconClose">
                    <IoClose />
                  </div>
                </div>
              </Col>
            </Row>
          </IconContext.Provider>
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
