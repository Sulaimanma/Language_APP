import React,{useContext} from 'react'
import { QuizContext } from '../Helpers/Contexts'
import {Questions} from '../Helpers/QuestionBank'
import "../App.css"


export default function EndScreen() {
     const {score}=useContext(QuizContext)
    return (
        <div className="endScreen">
            <h1>Quiz finshed</h1>
            
        </div>
    )
}
