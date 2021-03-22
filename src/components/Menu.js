import React, { useContext } from "react"
import { QuizContext } from "../Helpers/Contexts"
import "../App.css"
import Button from "react-bootstrap/Button"
// import "bootstrap/dist/css/bootstrap.min.css"
export default function Menu() {
  const { setGameState } = useContext(QuizContext)
  const handleSubmit = () => {}
  return (
    <div className="Menu">
      <form onSubmit={handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      <Button
        onClick={() => {
          setGameState("quiz")
        }}
        size="lg"
      >
        Start quiz{" "}
      </Button>{" "}
    </div>
  )
}
