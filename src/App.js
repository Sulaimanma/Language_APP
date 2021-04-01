import "./App.css"

import Mainmenu from "./components/Mainmenu"
import Quiz from "./components/Quiz"
import EndScreen from "./components/EndScreen"
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"

import React, { useEffect, useState } from "react"
import { QuizContext } from "./Helpers/Context"

import Select from "./components/Select"

import LessonCard from "./components/LessonCard/LessonCard"
import Learn from "./components/Learn"
import axios from "axios"

const App = () => {
  const [gameState, setGameState] = useState("menu")
  // const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0)
  const [language, setLanguage] = useState("Baradha")
  const [wordData, setWordData] = useState([])
  const [lessonData, setLessonData] = useState([])

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
  return (
    <>
      <Router>
        <div className="Home">
          <QuizContext.Provider
            value={{
              gameState,
              setGameState,
              score,
              setScore,
              language,
              setLanguage,
              wordData,
              lessonData,
            }}
          >
            <Switch>
              <Route exact path="/learn" component={Learn}></Route>
              <Route exact path="/select">
                <Select />
              </Route>
              <Route exact path="/">
                <Mainmenu lessonData={lessonData} />
              </Route>
              <Route exact path="/endscreen">
                <EndScreen />
              </Route>
              <Route exact path="/quiz">
                <Quiz wordData={wordData} />
              </Route>
              <Route path="/test">
                <LessonCard />
              </Route>
            </Switch>
            {/* {gameState === "select" && <Select />}
            {gameState === "learn" && <BasicTable />}{" "}
            {gameState === "menu" && <Mainmenu />}
            {gameState === "quiz" && <Quiz />}{" "}
            {gameState === "endscreen" && <EndScreen />}{" "} */}
          </QuizContext.Provider>{" "}
        </div>
      </Router>
    </>
  )
}

export default App
