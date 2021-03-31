import "./App.css"
import ReactDOM from "react-dom"
import Mainmenu from "./components/Mainmenu"
import Quiz from "./components/Quiz"
import EndScreen from "./components/EndScreen"
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"

import React, { useState } from "react"
import { QuizContext } from "./Helpers/Contexts"

import Select from "./components/Select"
import { BurgerMenu } from "./components/BurgerMenu/BurgerMenu"
import LessonCard from "./components/LessonCard/LessonCard"
import Learn from "./components/Learn"

const App = () => {
  const [gameState, setGameState] = useState("menu")
  // const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0)
  const [language, setLanguage] = useState("Wakka Wakka")
  const [url, setUrl] = useState("111")

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
            }}
          >
            <Switch>
              <Route exact path="/learn" component={Learn} />
              <Route exact path="/select">
                <Select />
              </Route>
              <Route exact path="/" component={Mainmenu} />

              <Route exact path="/endscreen">
                <EndScreen />
              </Route>
              <Route exact path="/quiz" component={Quiz} />
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
