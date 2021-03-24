import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import "../App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Card } from "react-bootstrap";

import { IconContext } from "react-icons";
// import { IoMenu, IoIosOptions } from "react-icons/io5";
// import { HiOutlineLightBulb, HiDownload } from "react-icons/hi";
// import { RiKeyboardFill } from "react-icons/ri";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
export default function Mainmenu() {
  const { setGameState, setLanguage, language } = useContext(QuizContext);

  const handleChange = event => {
    setLanguage(event.target.value);
  };

  return (
    <>
      <BurgerMenu
        nonSticky={false}
        language={
          <label>
            <h3>Pick the Language You Want to Learn:</h3>
            <select value={language} onChange={handleChange}>
              <option value="Wakka Wakka" selected>
                Wakka Wakka
              </option>
              <option value="Baradha" disabled>
                Baradha
              </option>
              <option value="Bayali" disabled>
                Bayali
              </option>
              <option value="Bidjara" disabled>
                Bidjara
              </option>
              <option value="Butchulla" disabled>
                Butchulla
              </option>
              <option value="Dharumbal" disabled>
                Dharumbal
              </option>
              <option value="Gangulu" disabled>
                Gangulu
              </option>
              <option value="Gooreng Gooreng">Gooreng Gooreng</option>
              <option value="Gurang" disabled>
                Gurang
              </option>
              <option value="Meerooni" disabled>
                Meerooni
              </option>
              <option value="Taribelang" disabled>
                Taribelang
              </option>
              <option value="Tulua" disabled>
                Tulua
              </option>
              <option value="Wadjingu" disabled>
                Wadjingu
              </option>

              <option value="Woppaburra" disabled>
                Woppaburra
              </option>
              <option value="Yinman" disabled>
                Yinman
              </option>
            </select>
          </label>
        }
      >
        <div className="Menu">
          <Container fluid className="quizContainer">
            <IconContext.Provider
              value={{
                className: "menu-icons",
                size: "1.7rem",
                color: "#666e7e",
              }}
            >
              <div className="languagediv">
                <div className="countryicon">
                  <Image
                    src="https://www.independenceaustralia.com/uploads/images/Corporate/aboriginal.png"
                    rounded
                    className="countryiconImg"
                  />
                  <p className="languagetext">{language}</p>
                </div>
              </div>
            </IconContext.Provider>
            <Row fluid></Row>
            <Row fluid>
              <Col md={{ span: 4, offset: 4 }}>
                <Card style={{ width: "20vw" }}>
                  <Card.Img
                    variant="top"
                    src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/100385/shutterstock_1164809464.jpg_1140x855.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Greetings</Card.Title>
                    <Card.Text>
                      Let's learn some simple greeting words in Wakka Wakka
                      language!
                    </Card.Text>
                    <Button
                      size="lg"
                      variant="primary"
                      onClick={() => {
                        setGameState("quiz");
                      }}
                    >
                      Learn Now!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>{" "}
            </Row>
            <Row fluid>
              <Col></Col>{" "}
            </Row>
          </Container>
        </div>
      </BurgerMenu>
    </>
  );
}
