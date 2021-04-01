import React, { useContext } from "react"
import { QuizContext } from "../Helpers/Context"
import "../App.css"
import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col, Image } from "react-bootstrap"

import { IconContext } from "react-icons"

import { BurgerMenu } from "./BurgerMenu/BurgerMenu"
import LessonCard from "./LessonCard/LessonCard"

// import Amplify, { Storage } from "aws-amplify"
// import awsconfig from "../aws-exports"

// Amplify.configure(awsconfig)

export default function Mainmenu(props) {
  const { setGameState, setLanguage, language, lessonData } = useContext(
    QuizContext
  )

  const handleComplete = () => {
    return props.location.now === 100 ? true : false
  }
  const handleChange = (event) => {
    setLanguage(event.target.value)
  }

  return (
    <>
      <BurgerMenu
        nonSticky={false}
        language={
          <div>
            <label>
              <h3>Pick the Language You Want to Learn:</h3>
              <select value={language} onChange={handleChange}>
                <option value="Wakka Wakka">Wakka Wakka</option>
                <option value="Baradha">Baradha</option>
                <option value="Bayali" disabled>
                  Bayali
                </option>
                <option value="Bidjara" disabled>
                  Bidjara
                </option>
                <option value="Butchulla" disabled>
                  Butchulla
                </option>
                <option value="Dharumbal" disabled>
                  Dharumbal
                </option>
                <option value="Gangulu" disabled>
                  Gangulu
                </option>
                <option value="Gooreng Gooreng">Gooreng Gooreng</option>
                <option value="Gurang" disabled>
                  Gurang
                </option>
                <option value="Meerooni" disabled>
                  Meerooni
                </option>
                <option value="Taribelang" disabled>
                  Taribelang
                </option>
                <option value="Tulua" disabled>
                  Tulua
                </option>
                <option value="Wadjingu" disabled>
                  Wadjingu
                </option>

                <option value="Woppaburra" disabled>
                  Woppaburra
                </option>
                <option value="Yinman" disabled>
                  Yinman
                </option>
              </select>
            </label>
            <Button variant="primary" onClick={() => setGameState("quiz")}>
              Learn Now!
            </Button>
          </div>
        }
      >
        <div className="Menu">
          <Container fluid className="lessonContainer">
            <IconContext.Provider
              value={{
                className: "menu-icons",
                size: "1.7rem",
                color: "#666e7e",
              }}
            >
              <div className="languagediv">
                <div className="countryicon">
                  <Image
                    src="https://www.independenceaustralia.com/uploads/images/Corporate/aboriginal.png"
                    rounded
                    className="countryiconImg"
                  />
                  <p className="languagetext">{language}</p>
                </div>
              </div>
            </IconContext.Provider>

            <Row fluid className="cardRow">
              <Col md={{ span: 4, offset: 4 }}>
                {lessonData.map((lesson, id) => {
                  if (
                    props.location.module === lesson.lessonTitle &&
                    handleComplete() === true
                  ) {
                    return (
                      <LessonCard
                        title={lesson.lessonTitle}
                        intro={lesson.lessonIntro}
                        imgUrl={lesson.imageUrl}
                        language={language}
                        display={lesson}
                        now={100}
                      />
                    )
                  } else if (
                    props.location.module === lesson.lessonTitle &&
                    handleComplete() !== true
                  ) {
                    return (
                      <LessonCard
                        title={lesson.lessonTitle}
                        intro={lesson.lessonIntro}
                        imgUrl={lesson.imageUrl}
                        language={language}
                        display={lesson}
                        now={props.location.now}
                      />
                    )
                  } else {
                    return (
                      <LessonCard
                        title={lesson.lessonTitle}
                        intro={lesson.lessonIntro}
                        imgUrl={lesson.imageUrl}
                        language={language}
                        display={lesson}
                        now={0}
                      />
                    )
                  }
                })}
              </Col>{" "}
            </Row>
          </Container>
        </div>
      </BurgerMenu>
    </>
  )
}
