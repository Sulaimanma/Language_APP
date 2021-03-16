import "./App.css"
import Menu from "./components/Menu"
import Quiz from "./components/Quiz"
import EndScreen from "./components/EndScreen"
import Learn from "./components/Learn"
import BasicTable from './components/BasicTable'
import React, { useState } from "react"
import { QuizContext } from "./Helpers/Contexts"

// ['menu', 'playing', 'finished']

function App() {
  const [gameState, setGameState] = useState("menu")
  // const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0)
  return (
    <div className="App">
      {/* <h1>Quiz App</h1> */}
      <QuizContext.Provider
        value={{ gameState, setGameState, score, setScore }}
      >
        {gameState === "learn" && <BasicTable />}
        {gameState === "menu" && <Menu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endscreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  )
}

export default App
