import "./App.css";
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen.js";
import React, { useState,useContext } from "react";
import { QuizContext } from "./Helpers/Contexts";
// ['menu', 'playing', 'finished']

function App() {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{gameState,setGameState}}>
        {gameState == "menu" && <Menu />}
        {gameState == "quiz" && <Quiz />}
        {gameState=="endscreen"&&<EndScreen/>}
      </QuizContext.Provider>
     
      {/* <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,
        }}
      >
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quiz />}
        {gameState === "finished" && <EndScreen />}
      </GameStateContext.Provider> */}
    </div>
  );
}

export default App;
