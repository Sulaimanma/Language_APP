import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import "../App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, DropdownButton, Dropdown } from "react-bootstrap";
import { bubble as Menu } from "react-burger-menu";
import { IconContext } from "react-icons";
import { IoMenu } from "react-icons/io5";
import { HiOutlineLightBulb, HiDownload } from "react-icons/hi";
import { RiKeyboardFill } from "react-icons/ri";
export default function Mainmenu() {
  const { setGameState, setLanguage, language } = useContext(QuizContext);
  const handleChange = event => {
    setLanguage(event.target.value);
  };

  return (
    <>
      <div className="Menu">
        <Container fluid className="quizContainer">
          <h1>test</h1>
          <IconContext.Provider
            value={{
              className: "menu-icons",
              size: "1.7rem",
              color: "#666e7e",
            }}
          >
            <Row fluid>
              <Col md={2} xs={12}>
                <div className="iconMenu">
                  <div className="iconItem">
                    <RiKeyboardFill className="keyboard" />
                  </div>
                  <div className="iconItem">
                    <HiOutlineLightBulb className="bulb" />
                  </div>
                  <div className="iconItem">
                    <HiDownload className="download" />
                  </div>
                </div>
              </Col>
              <Col md={{ span: 6, offset: 1 }} xs={9}></Col>
              <Col auto></Col>
              <Col xs={1}></Col>
            </Row>
          </IconContext.Provider>
          <Row fluid>
            <Col>
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
            </Col>
          </Row>
          <Row fluid>
            <Col>
              <Button
                onClick={() => {
                  setGameState("quiz");
                }}
                size="lg"
              >
                Start quiz
              </Button>
            </Col>{" "}
          </Row>
        </Container>
      </div>
    </>
  );
}
