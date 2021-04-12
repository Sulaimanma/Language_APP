import React, { useState, useContext, useEffect, useMemo, useRef } from "react"
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
import WordTable from "./WordTable/WordTable"
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
import ReactAudioPlayer from "react-audio-player"

export default function Quiz(props) {
  const { score, setScore, wordData, language } = useContext(QuizContext)
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [optionChosen, setOptionChosen] = useState("")
  const [cont, setCont] = useState(false)
  const [module, setModule] = useState()
  const [vocabulary, setVocabulary] = useState([])
  const [show, setShow] = useState(false)
  const [target, setTarget] = useState(null)
  const ref = useRef(null)

  const handleClick = (event) => {
    setShow(!show)
    setTarget(event.target)
  }
  const nextQuestion = () => {
    if (quizQ[currentQuestion - 1].answer === optionChosen) {
      setScore(score + 1)
    }
    setCont(false)
    setCurrentQuestion(currentQuestion + 1)
  }
  const finishQuiz = () => {
    if (quizQ[currentQuestion - 1].answer === optionChosen) {
      setScore(score + 1)
    }
  }
  const handleOption = () => {
    setCont(true)
  }
  const shuffle = (array) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      // And swap it with the current element.
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array
  }
  const removeItemOnce = (arr, value) => {
    var index = arr.indexOf(value)
    if (index > -1) {
      arr.splice(index, 1)
    }
    return arr
  }

  useEffect(() => {
    props.location.param1 === "Lesson: Greetings!" &&
      setModule("wordlist_greeting")
    props.location.param1 === "Lesson: Know myself!" &&
      setModule("wordlist_body")
    props.location.param1 === "Lesson: My Family!" &&
      setModule("wordlist_family")
    props.location.param1 === "Lesson: Environment!" &&
      setModule("wordlist_environment")
    props.location.param1 === "Lesson: Conversation!" &&
      setModule("wordlist_conversation")
    module &&
      setVocabulary(
        wordData[module].map((word, id) => {
          return [word.English, word.Gidarjil]
        })
      )
  }, [props.location.param1, module, wordData])
  const quizQ = useMemo(() => {
    if (module) {
      var quiz = wordData[module].map((word, id) => {
        const randomOption = removeItemOnce(
          wordData[module].map((word, id) => {
            return word.Gidarjil
          }),
          word.Gidarjil
        )[
          Math.floor(
            Math.random() *
              removeItemOnce(
                wordData[module].map((word, id) => {
                  return word.Gidarjil
                }),
                word.Gidarjil
              ).length
          )
        ]

        return {
          exist: 1,
          prompt: `What is "${word.English}" in ${wordData.language} language?`,
          image: word.Image,
          video: word.Video,
          audio: word.Audio,
          options: shuffle([word.Gidarjil].concat(randomOption)),

          // optionC: "Na",
          // optionD: "Gira",
          answer: word.Gidarjil,
        }
      })
    }

    return quiz
  }, [module, wordData])

  // Object.keys(wordData).forEach(function(module) {
  //   arr.push(json[module]);
  // });

  useEffect(() => {
    optionChosen.length !== 0 ? setCont(true) : setCont(false)
  }, [optionChosen])
  console.log("arrrrrrrayyyyyyyyyyyyyyy")
  quizQ && console.log(quizQ)
  return (
    <>
      <div className="Quiz">
        {quizQ && console.log(quizQ[0].prompt)}
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
                  <div className="iconItem" onClick={handleClick}>
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
                  {quizQ && (
                    <ProgressBar
                      animated
                      now={(currentQuestion * 100) / quizQ.length}
                    />
                  )}
                </div>
              </Col>

              <Col xs={{ span: 1, offset: 1 }} className="closeCol">
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
                {quizQ && (
                  <h3 className="questionText">
                    {quizQ[currentQuestion - 1].prompt}
                  </h3>
                )}
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="float-left">
              {quizQ && quizQ[currentQuestion - 1].image.length != 0 && (
                <div className="QuestionDiv">
                  <Image
                    src={quizQ[currentQuestion - 1].image}
                    fluid
                    rounded
                    className="questionImg"
                  />
                </div>
              )}
              {quizQ && quizQ[currentQuestion - 1].video.length != 0 && (
                <div className="QuestionDiv">
                  <iframe
                    title="educational_content"
                    src={quizQ[currentQuestion - 1].video}
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
            {quizQ && quizQ[currentQuestion - 1].audio.length != 0 && (
              <div className="AudioDiv">
                <ReactAudioPlayer
                  autoPlay={true}
                  controls
                  src={quizQ[currentQuestion - 1].audio}
                />
              </div>
            )}
          </Row>
          <Row>
            <Col md={{ span: 4, offset: 4 }} className="text-left">
              <div className="options">
                {quizQ && quizQ[currentQuestion - 1].options.length != 0 && (
                  <Button
                    fluid
                    variant="light"
                    onClick={() => {
                      setOptionChosen(quizQ[currentQuestion - 1].options[0])
                      handleOption()
                    }}
                    className="optionButton"
                    size="lg"
                  >
                    {quizQ[currentQuestion - 1].options[0]}
                  </Button>
                )}
                {quizQ && quizQ[currentQuestion - 1].options.length != 0 && (
                  <Button
                    variant="light"
                    onClick={() => {
                      setOptionChosen(quizQ[currentQuestion - 1].options[1])
                      handleOption()
                    }}
                    className="optionButton"
                    size="lg"
                  >
                    {quizQ[currentQuestion - 1].options[1]}
                  </Button>
                )}
              </div>
            </Col>
          </Row>
        </Container>
        <Row className="nextRow">
          <div className="nextDiv">
            {cont ? (
              <Container className="feedbackContainer">
                {quizQ &&
                  quizQ[currentQuestion - 1].answer.length != 0 &&
                  (quizQ[currentQuestion - 1].answer === optionChosen ? (
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
                          <h1 className="correctAnswer1">
                            {quizQ[currentQuestion - 1].answer}
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
                  ))}
                {quizQ &&
                  quizQ[currentQuestion - 1].answer.length != 0 &&
                  (currentQuestion === quizQ.length ? (
                    quizQ[currentQuestion - 1].answer === optionChosen ? (
                      <Link
                        to={{
                          pathname: "/endscreen",
                          param1: quizQ.length,
                        }}
                      >
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
                      <Link
                        to={{
                          pathname: "/endscreen",
                          param1: quizQ.length,
                        }}
                      >
                        <Button
                          onClick={finishQuiz}
                          variant="danger"
                          className="next"
                          size="sm"
                          id="next"
                          style={{ fontsize: "17px !important" }}
                        >
                          Finish Quiz
                        </Button>
                      </Link>
                    )
                  ) : quizQ[currentQuestion - 1].answer === optionChosen ? (
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
                      id="next"
                      style={{ fontsize: "17px !important" }}
                    >
                      Continue
                    </Button>
                  ))}
              </Container>
            ) : null}
          </div>
        </Row>
      </div>
    </>
  )
}
