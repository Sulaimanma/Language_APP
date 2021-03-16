import React, { useContext } from "react"
import { QuizContext } from "../Helpers/Contexts"
import "../App.css"
import Button from "react-bootstrap/Button"
// import "bootstrap/dist/css/bootstrap.min.css"
export default function Menu() {
  const { setGameState } = useContext(QuizContext)
  return (
    <div className="Menu">
      <Button
        onClick={() => {
          setGameState("quiz")
        }}
        size="lg"
      >
        Start quiz
      </Button>
    </div>
  )
}
