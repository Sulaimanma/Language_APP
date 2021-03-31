import React, { useContext, useEffect, useState } from "react"
import { QuizContext } from "../Helpers/Contexts"
import "../App.css"
import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col, Image, Card } from "react-bootstrap"

import { IconContext } from "react-icons"

import { BurgerMenu } from "./BurgerMenu/BurgerMenu"
import LessonCard from "./LessonCard/LessonCard"
import { WordJSON_Baradha } from "../Helpers/QuestionBank"
import Amplify, { Storage } from "aws-amplify"
import awsconfig from "../aws-exports"
import axios from "axios"
Amplify.configure(awsconfig)

export default function Mainmenu() {
  const { setGameState, setLanguage, language } = useContext(QuizContext)
  const [wordData, setWordData] = useState([])
  const [lessonData, setLessonData] = useState([])
  const handleChange = (event) => {
    setLanguage(event.target.value)
  }
  const fetchUrl = `https://amplifylanguageappgidarjil114226-dev.s3-ap-southeast-2.amazonaws.com/public/wordlist/${language}.json`
  const fetch_word = (fetchUrl) => {
    axios
      .get(fetchUrl)
      .then((res) => {
        const data = res.data
        setWordData(data)
      })
      .catch((error) => {
        // handle your errors here
        console.error(error)
      })
  }
  console.log(language)
  console.log("%%%%%%%%%%%%%")
  console.log(wordData)
  useEffect(() => {
    fetch_word(fetchUrl)

    wordData.length != 0 &&
      setLessonData([
        wordData.wordlist_greeting.length && {
          lessonTitle: "Lesson: Greetings!",
          lessonIntro: "Learning some basic greetings",
          imageUrl:
            "https://doqvf81n9htmm.cloudfront.net/data/crop_article/100385/shutterstock_1164809464.jpg_1140x855.jpg",
        },
        wordData.wordlist_body.length && {
          lessonTitle: "Lesson: Know myself!",
          lessonIntro: "Learning some words related to your body",
          imageUrl: "https://o.quizlet.com/H0HWHm6uGg7QsmYxDdMiRw_b.jpg",
        },
        wordData.wordlist_family.length && {
          lessonTitle: "Lesson: My Family!",
          lessonIntro: "Talking about your family, using possessive adjective",
          imageUrl:
            "https://www.brisbanekids.com.au/wp-content/uploads/2016/03/bigstock-Happy-Family-Standing-On-The-B-98845208.jpg",
        },
        wordData.wordlist_environment.length && {
          lessonTitle: "Lesson: Environment!",
          lessonIntro: "Learning some environmental words",
          imageUrl:
            "https://travel.mqcdn.com/mapquest/travel/wp-content/uploads/2020/06/GettyImages-676934538-e1592461667985-835x480.jpg",
        },
        wordData.wordlist_conversation.length && {
          lessonTitle: "Lesson: Conversation!",
          lessonIntro: "Learning some phrase for conversation",
          imageUrl:
            "https://shipway-consulting.co.uk/wp-content/uploads/2020/05/conversation-image-2.jpg",
        },
      ])
  }, [fetchUrl, language])
  useEffect(() => {
    wordData.length != 0 &&
      setLessonData([
        wordData.wordlist_greeting.length && {
          lessonTitle: "Lesson: Greetings!",
          lessonIntro: "Learning some basic greetings",
          imageUrl:
            "https://doqvf81n9htmm.cloudfront.net/data/crop_article/100385/shutterstock_1164809464.jpg_1140x855.jpg",
        },
        wordData.wordlist_body.length && {
          lessonTitle: "Lesson: Know myself!",
          lessonIntro: "Learning some words related to your body",
          imageUrl: "https://o.quizlet.com/H0HWHm6uGg7QsmYxDdMiRw_b.jpg",
        },
        wordData.wordlist_family.length && {
          lessonTitle: "Lesson: My Family!",
          lessonIntro: "Talking about your family, using possessive adjective",
          imageUrl:
            "https://www.brisbanekids.com.au/wp-content/uploads/2016/03/bigstock-Happy-Family-Standing-On-The-B-98845208.jpg",
        },
        wordData.wordlist_environment.length && {
          lessonTitle: "Lesson: Environment!",
          lessonIntro: "Learning some environmental words",
          imageUrl:
            "https://travel.mqcdn.com/mapquest/travel/wp-content/uploads/2020/06/GettyImages-676934538-e1592461667985-835x480.jpg",
        },
        wordData.wordlist_conversation.length && {
          lessonTitle: "Lesson: Conversation!",
          lessonIntro: "Learning some phrase for conversation",
          imageUrl:
            "https://shipway-consulting.co.uk/wp-content/uploads/2020/05/conversation-image-2.jpg",
        },
      ])
  }, [wordData])

  // console.log("!!!!!!!!!!!")
  // console.log(wordData.wordlist_greeting)
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
                {lessonData.map((lesson) => {
                  return (
                    <LessonCard
                      title={lesson.lessonTitle}
                      intro={lesson.lessonIntro}
                      imgUrl={lesson.imageUrl}
                      language={language}
                      display={lesson}
                    />
                  )
                })}
              </Col>{" "}
            </Row>
          </Container>
        </div>
      </BurgerMenu>
    </>
  )
}
