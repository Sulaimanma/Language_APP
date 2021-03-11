import React,{useContext} from 'react'
import { QuizContext } from '../Helpers/Contexts'
import "../App.css"
export default function Menu() {
    const {setGameState}=useContext(QuizContext)
    return (
        <div className="Menu">
           <button onClick={()=>{setGameState("quiz")}}>Start quiz</button>
        </div>
    )
}