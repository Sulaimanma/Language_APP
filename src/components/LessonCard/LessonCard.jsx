import React, { useContext, useEffect, useState } from "react"
import classes from "./lessoncard.module.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col, Image, ProgressBar } from "react-bootstrap"
import { QuizContext } from "../../Helpers/Contexts"
import { ImBooks } from "react-icons/im"
import { BsFillQuestionCircleFill } from "react-icons/bs"
import option from "../../img/option.png"
import ReactTooltip from "react-tooltip"
import { Link } from "react-router-dom"

export default function LessonCard(props) {
  const { setGameState, setLanguage, language } = useContext(QuizContext)
  const [expand, setExpand] = useState(false)
  const [display, setDisplay] = useState(true)
  useEffect(() => {
    props.display === 0 ? setDisplay(false) : setDisplay(true)
  }, [props.display])

  return (
    <>
      {display && (
        <Row
          className={classes.CardDiv}
          onClick={() => {
            //   setGameState("quiz");
            setExpand(!expand)
          }}
        >
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
      )}

      {expand && (
        <Row className={classes.optionDiv}>
          <Col xs={{ span: 4, offset: 1 }}>
            <Image src={option} className={classes.optionImg}></Image>
            <a data-tip data-for="learn">
              <Link to="/learn">
                <ImBooks className={classes.learn} />
              </Link>
            </a>
            <ReactTooltip id="learn" type="error">
              <span>Click to start learning</span>
            </ReactTooltip>
            <a data-tip data-for="quiz">
              <Link to="/quiz">
                <BsFillQuestionCircleFill className={classes.quiz} />
              </Link>
            </a>
            <ReactTooltip id="quiz" type="error">
              <span>Click to have a little quiz</span>
            </ReactTooltip>
          </Col>
        </Row>
      )}
    </>
  )
}
