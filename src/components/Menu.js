import React, { useContext } from "react"
import { QuizContext } from "../Helpers/Contexts"
import "../App.css"
import Button from "react-bootstrap/Button"
// import "bootstrap/dist/css/bootstrap.min.css"
export default function Menu() {
  const { setGameState, setLanguage, language } = useContext(QuizContext)
  const handleChange = (event) => {
    setLanguage(event.target.value)
  }

  return (
    <div className="Menu">
      <label>
        Pick the Language You Want to Learn:
        <select value={language} onChange={handleChange}>
          <option value="Baradha">Baradha</option>
          <option value="Bayali">Bayali</option>
          <option value="Bidjara">Bidjara</option>
          <option value="Butchulla">Butchulla</option>
          <option value="Dharumbal">Dharumbal</option>
          <option value="Gangulu">Gangulu</option>
          <option value="Gooreng Gooreng">Gooreng Gooreng</option>
          <option value="Gurang">Gurang</option>
          <option value="Meerooni">Meerooni</option>
          <option value="Taribelang">Taribelang</option>
          <option value="Tulua">Tulua</option>
          <option value="Wadjingu">Wadjingu</option>
          <option value="Wakka Wakka">Wakka Wakka</option>
          <option value="Woppaburra">Woppaburra</option>
          <option value="Yinman">Yinman</option>
        </select>
      </label>
      {console.log(language)}
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
