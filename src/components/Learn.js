import React, { useState, useContext, useEffect, useRef } from "react"
import { Questions } from "../Helpers/QuestionBank"
import { QuizContext } from "../Helpers/Context"
import "./learn.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Image from "react-bootstrap/Image"
import { IconContext } from "react-icons"
import { IoClose } from "react-icons/io5"
// import { FaRegKeyboard } from "react-icons/fa"
import { HiOutlineLightBulb, HiDownload } from "react-icons/hi"
import { RiKeyboardFill } from "react-icons/ri"
import {
  Container,
  Row,
  Col,
  Button,
  ProgressBar,
  Popover,
  Overlay,
} from "react-bootstrap"
import { Link } from "react-router-dom"
import WordTable from "./WordTable/WordTable"

export default function Learn(props) {
  const {
    score,
    setScore,
    setGameState,
    wordData,
    lessonData,
    language,
  } = useContext(QuizContext)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [optionChosen, setOptionChosen] = useState("")
  const [intro, setNointro] = useState(true)
  const [module, setModule] = useState([])
  const [vocabulary, setVocabulary] = useState([])
  const [vocabularyGi, setVocabularyGi] = useState([])
  const [show, setShow] = useState(false)
  const [target, setTarget] = useState(null)
  const ref = useRef(null)

  const handleClick = (event) => {
    setShow(!show)
    setTarget(event.target)
  }
  useEffect(() => {
    props.location.param1 === "Lesson: Greetings!" &&
      setModule("wordlist_greeting")
    module.length != 0 &&
      setVocabulary(
        wordData[module].map((word, id) => {
          return [word.English, word.Gidarjil]
        })
      )
    // module.length != 0 &&
    //   setVocabularyGi(
    //     wordData[module].map((word, id) => {
    //       return word.Gidarjil
    //     })
    //   )
    // Object.keys(wordData).forEach(function(module) {
    //   arr.push(json[module]);
    // });
  }, [props.location.param1, wordData, module])
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
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~n")
  console.log(vocabulary)

  // console.log(vocabulary)

  // console.log(props.location.param1)

  return (
    <div ref={ref}>
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
                  <div id="iconItem" className="mx-auto" onClick={handleClick}>
                    <HiOutlineLightBulb className="bulb" />
                    <Overlay
                      show={show}
                      target={target}
                      placement="bottom"
                      container={ref.current}
                      containerPadding={20}
                    >
                      <Popover id="popover-contained">
                        <Popover.Title as="h3" style={{ color: "#007bff" }}>
                          Vocabulary
                        </Popover.Title>
                        <Popover.Content>
                          <WordTable
                            vocabulary={vocabulary}
                            language={language}
                          />
                        </Popover.Content>
                      </Popover>
                    </Overlay>
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
                  <div id="iconItem" className="mx-auto">
                    <Link to="/">
                      <IoClose />
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </IconContext.Provider>
          {intro ? (
            <div>
              <Row className="Introduction">
                <HiOutlineLightBulb className="bulbIntro" />
              </Row>
              <Row>
                <p className="introText">
                  Welcome to the Language Course! <br />
                </p>
              </Row>
              <Row>
                <p className="introText1">
                  Let's start by learning some words!
                </p>
              </Row>

              <Row fluid>
                <WordTable vocabulary={vocabulary} language={language} />
              </Row>
            </div>
          ) : (
            <div>
              <Row>
                <Col md={{ span: 4, offset: 4 }} xs={12} className="text-left">
                  <p className="introText">Memorise the words.</p>
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
                  <div className="wordLearn">
                    <p>{Questions[currentQuestion].optionA}</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={{ span: 4, offset: 4 }} className="text-left">
                  <div className="wordEnglish">
                    <p>{Questions[currentQuestion].optionA}</p>
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
    </div>
  )
}
