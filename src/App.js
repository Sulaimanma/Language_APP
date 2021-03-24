import "./App.css";
import ReactDOM from "react-dom";
import Mainmenu from "./components/Mainmenu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import BasicTable from "./components/BasicTable";
import React, { useState } from "react";
import { QuizContext } from "./Helpers/Contexts";

import Select from "./components/Select";
import { BurgerMenu } from "./components/BurgerMenu/BurgerMenu";
import LessonCard from "./components/LessonCard/LessonCard";

// ['menu', 'playing', 'finished']

const App = () => {
  const [gameState, setGameState] = useState("menu");
  // const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);
  const [language, setLanguage] = useState("Wakka Wakka");

  return (
    // <Switch>
    //   <Route exact path="/learn" component={BasicTable} />
    //   <Route path="/select">
    //     <Select />
    //   </Route>
    //   <Route path="/">
    //     <Mainmenu />
    //   </Route>
    //   <Route path="/endscreen">
    //     <EndScreen />
    //   </Route>
    //   <Route exact path="/quiz" component={Quiz} />
    //   <Route path="/test">
    //     <LessonCard />
    //   </Route>
    //    </Switch>
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
        {gameState === "select" && <Select />}
        {gameState === "learn" && <BasicTable />}{" "}
        {gameState === "menu" && <Mainmenu />}
        {gameState === "quiz" && <Quiz />}{" "}
        {gameState === "endscreen" && <EndScreen />}{" "}
      </QuizContext.Provider>{" "}
    </div>
  );
};

export default App;
