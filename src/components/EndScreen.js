import React, { useContext } from "react"
import { QuizContext } from "../Helpers/Contexts"
import { Questions } from "../Helpers/QuestionBank"
import "bootstrap/dist/css/bootstrap.min.css"
import { Button } from "react-bootstrap"
import "../App.css"

export default function EndScreen() {
  const { score, setScore, setGameState } = useContext(QuizContext)
  const restartQuiz = () => {
    setScore(0)
    setGameState("menu")
  }
  return (
    <div className="EndScreen">
      <h1>Quiz finshed</h1>
      <h1>
        {score}/{Questions.length}
      </h1>
      <Button onClick={restartQuiz} size="lg">
        Restart Quiz
      </Button>
    </div>
  )
}
