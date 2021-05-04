import "./App.css";
import "./components/style.css";

import Mainmenu from "./components/Mainmenu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import React, { useEffect, useState } from "react";
import { QuizContext } from "./Helpers/Context";

// import LessonCard from "./components/LessonCard/LessonCard";
import Learn from "./components/Learn";
import axios from "axios";
import Start from "./components/Start";

const App = () => {
  const [gameState, setGameState] = useState("menu");
  // const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);
  const [language, setLanguage] = useState("Gooreng Gooreng");
  const [wordData, setWordData] = useState([]);
  const [lessonData, setLessonData] = useState([]);

  const fetchUrl = `https://amplifylanguageappgidarjil114226-dev.s3-ap-southeast-2.amazonaws.com/public/wordlist/${language}.json`;
  const fetch_word = fetchUrl => {
    axios
      .get(fetchUrl)
      .then(res => {
        const data = res.data;
        setWordData(data);
      })
      .catch(error => {
        // handle your errors here
        console.error(error);
      });
  };
 
  useEffect(() => {
    fetch_word(fetchUrl);
    wordData.length !== 0 &&
      setLessonData([
        wordData.wordlist_greeting.length && {
          lessonTitle: "Lesson: Greetings!",
          lessonIntro: "Learning some basic greetings",
          imageUrl:
            "https://amplifylanguageappgidarjil114226-dev.s3-ap-southeast-2.amazonaws.com/public/img/icon/greeting.jpg",
          now: 0,
        },
        wordData.wordlist_body.length && {
          lessonTitle: "Lesson: Know myself!",
          lessonIntro: "Learning some words related to your body",
          imageUrl:
            "https://amplifylanguageappgidarjil114226-dev.s3-ap-southeast-2.amazonaws.com/public/img/icon/body.jpg",
          now: 0,
        },
        wordData.wordlist_family.length && {
          lessonTitle: "Lesson: My Family!",
          lessonIntro: "Talking about your family, using possessive adjective",
          imageUrl:
            "https://amplifylanguageappgidarjil114226-dev.s3-ap-southeast-2.amazonaws.com/public/img/icon/family.jpg",
          now: 0,
        },
        wordData.wordlist_environment.length && {
          lessonTitle: "Lesson: Environment!",
          lessonIntro: "Learning some environmental words",
          imageUrl:
            "https://amplifylanguageappgidarjil114226-dev.s3-ap-southeast-2.amazonaws.com/public/img/icon/environment.jpg",
          now: 0,
        },
        wordData.wordlist_conversation.length && {
          lessonTitle: "Lesson: Conversation!",
          lessonIntro: "Learning some phrase for conversation",
          imageUrl:
            "https://amplifylanguageappgidarjil114226-dev.s3-ap-southeast-2.amazonaws.com/public/img/icon/conversation.jpg",
          now: 0,
        },
      ]);
  }, [fetchUrl, language]);
  useEffect(() => {
    wordData.length !== 0 &&
      setLessonData([
        wordData.wordlist_greeting.length && {
          lessonTitle: "Lesson: Greetings!",
          lessonIntro: "Learning some basic greetings",
          imageUrl:
            "https://amplifylanguageappgidarjil114226-dev.s3-ap-southeast-2.amazonaws.com/public/img/icon/greeting.jpg",
          now: 0,
        },
        wordData.wordlist_body.length && {
          lessonTitle: "Lesson: Know myself!",
          lessonIntro: "Learning some words related to your body",
          imageUrl:
            "https://amplifylanguageappgidarjil114226-dev.s3-ap-southeast-2.amazonaws.com/public/img/icon/body.jpg",
          now: 0,
        },
        wordData.wordlist_family.length && {
          lessonTitle: "Lesson: My Family!",
          lessonIntro: "Talking about your family, using possessive adjective",
          imageUrl:
            "https://amplifylanguageappgidarjil114226-dev.s3-ap-southeast-2.amazonaws.com/public/img/icon/family.jpg",
          now: 0,
        },
        wordData.wordlist_environment.length && {
          lessonTitle: "Lesson: Environment!",
          lessonIntro: "Learning some environmental words",
          imageUrl:
            "https://amplifylanguageappgidarjil114226-dev.s3-ap-southeast-2.amazonaws.com/public/img/icon/environment.jpg",
          now: 0,
        },
        wordData.wordlist_conversation.length && {
          lessonTitle: "Lesson: Conversation!",
          lessonIntro: "Learning some phrase for conversation",
          imageUrl:
            "https://amplifylanguageappgidarjil114226-dev.s3-ap-southeast-2.amazonaws.com/public/img/icon/conversation.jpg",
          now: 0,
        },
      ]);
  }, [wordData]);
  let location = useLocation();
  const timeout = {};
  return (
    <>
      <div className="Home">
        <QuizContext.Provider
          value={{
            gameState,
            setGameState,
            score,
            setScore,
            language,
            setLanguage,
            wordData,
            lessonData,
            setLessonData,
          }}
        >
          <TransitionGroup>
            {/*
            This is no different than other usage of
            <CSSTransition>, just make sure to pass
            `location` to `Switch` so it can match
            the old location as it animates out.
          */}
            <CSSTransition key={location.key} classNames="swipe" timeout={600}>
              <Switch location={location}>
                <Route exact path="/learn" component={Learn}></Route>
                <Route exact path="/" component={Start}></Route>

                <Route exact path="/mainmenu" component={Mainmenu}></Route>
                <Route exact path="/endscreen" component={EndScreen}></Route>
                <Route exact path="/quiz" component={Quiz}></Route>
                <Route path="/test"></Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          {/* {gameState === "select" && <Select />}
            {gameState === "learn" && <BasicTable />}{" "}
            {gameState === "menu" && <Mainmenu />}
            {gameState === "quiz" && <Quiz />}{" "}
            {gameState === "endscreen" && <EndScreen />}{" "} */}
        </QuizContext.Provider>{" "}
      </div>
    </>
  );
};

export default App;
