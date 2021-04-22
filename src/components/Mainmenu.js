import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import "../App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";

import { IconContext } from "react-icons";

import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import LessonCard from "./LessonCard/LessonCard";
import { Link } from "react-router-dom";
import { IoIosOptions } from "react-icons/io";

// import Amplify, { Storage } from "aws-amplify"
// import awsconfig from "../aws-exports"

// Amplify.configure(awsconfig)

export default function Mainmenu(props) {
  const { setGameState, setLanguage, language, lessonData } = useContext(
    QuizContext
  );

  const handleComplete = () => {
    return props.location.now === 100 ? true : false;
  };
  const handleChange = event => {
    setLanguage(event.target.value);
  };

  return (
    <>
      {/* <BurgerMenu
        nonSticky={false}
        language={
          <div>
            <label className="pick">
              <h4>Pick the Language You Want to Learn:</h4>
              <select value={language} onChange={handleChange}>
                <option value="Baradha">Baradha</option>
                <option value="Bayali">Bayali</option>
                <option value="Bidjara">Bidjara</option>
                <option value="Butchulla">Butchulla</option>
                <option value="Dharumbal">Dharumbal</option>
                <option value="Gangulu">Gangulu</option>
                <option value="Gooreng Gooreng">Gooreng Gooreng</option>
                <option value="Gurang">Gurang</option>
                <option value="Meerooni" disabled>
                  Meerooni
                </option>
                <option value="Taribelang">Taribelang</option>
                <option value="Tulua">Tulua</option>
                <option value="Wadjingu">Wadjingu</option>
                <option value="Wakka Wakka">Wakka Wakka</option>
                <option value="Woppaburra">Woppaburra</option>
                <option value="Yinman">Yinman</option>
              </select>
            </label>
          </div>
        }
      > */}
      <div className="Menu">
        <Container fluid className="lessonContainer">
          <IconContext.Provider
            value={{
              className: "menu-icons",
              size: "1.7rem",
              color: "#666e7e",
            }}
          >
            <div className="languagediv">
              <div className="select">
                <Link to="/">
                  <IoIosOptions />
                </Link>
              </div>

              <div className="countryicon">
                <Link to="/">
                  <Image
                    src="https://amplifylanguageappgidarjil114226-dev.s3-ap-southeast-2.amazonaws.com/public/img/icon/aboriginal.png"
                    rounded
                    className="countryiconImg"
                  />
                </Link>

                <Link to="/">
                  <p className="languagetext">{language}</p>
                </Link>
              </div>
            </div>
          </IconContext.Provider>

          <Row fluid className="cardRow">
            <Col md={{ span: 4, offset: 4 }} className="cardCol">
              {lessonData.map((lesson, id) => {
                if (
                  props.location.module === lesson.lessonTitle &&
                  handleComplete() === true
                ) {
                  return (
                    <LessonCard
                      title={lesson.lessonTitle}
                      intro={lesson.lessonIntro}
                      imgUrl={lesson.imageUrl}
                      language={language}
                      display={lesson}
                      now={100}
                      complete={handleComplete()}
                    />
                  );
                } else if (
                  props.location.module === lesson.lessonTitle &&
                  handleComplete() !== true
                ) {
                  return (
                    <LessonCard
                      title={lesson.lessonTitle}
                      intro={lesson.lessonIntro}
                      imgUrl={lesson.imageUrl}
                      language={language}
                      display={lesson}
                      now={props.location.now}
                      complete={handleComplete()}
                    />
                  );
                } else {
                  return (
                    <LessonCard
                      title={lesson.lessonTitle}
                      intro={lesson.lessonIntro}
                      imgUrl={lesson.imageUrl}
                      language={language}
                      display={lesson}
                      now={0}
                      complete={handleComplete()}
                    />
                  );
                }
              })}
            </Col>{" "}
          </Row>
        </Container>
      </div>
      {/* </BurgerMenu> */}
    </>
  );
}
