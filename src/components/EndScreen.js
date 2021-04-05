import React, { useContext } from "react"
import { QuizContext } from "../Helpers/Context"
import { Questions } from "../Helpers/QuestionBank"
import "bootstrap/dist/css/bootstrap.min.css"
import { Button } from "react-bootstrap"
import "../App.css"
import { Link } from "react-router-dom"

export default function EndScreen(props) {
  const { score, setScore } = useContext(QuizContext)
  const restartQuiz = () => {
    setScore(0)
  }

  return (
    <div className="EndScreen">
      <h1>Congrats!You finished the quiz!</h1>

      <h1>
        Your score:{score}/{props.location.param1}
      </h1>
      <Link to="/">
        <Button onClick={restartQuiz} size="lg">
          Continue
        </Button>
      </Link>
    </div>
  )
}
