import React, { useContext, useEffect, useState } from "react";
import classes from "./sidebar.module.scss";
import { IoIosOptions } from "react-icons/io";
import { FaSignOutAlt, FaSignInAlt, FaInfoCircle } from "react-icons/fa";
import { scaleRotate as Menu } from "react-burger-menu"; //scaleRotate
import { QuizContext } from "../../Helpers/Contexts";
import LanguageIcon from "../../components/LanuageIcon/LanguageIcon";
// import { Menulist } from "./Menulist/Menulist";
// import { Link } from "react-router-dom";
// import { Context } from "../../Context";
// import CopyRight from "../../components/CopyRight/CopyRight";
// import { getProfileImg } from "../../functions/getProfileImg";
// import { getAuth } from "../../functions/authentication";
// import { PROFILE_URL_GET } from '../../functions/apiEndpoint';

// const axios = require('axios');
export const Sidebar = props => {
  //   const { state } = useContext(Context);
  //   const { isLogin, userProfile, userImg, defaultImg, setDefaultImg } = state;
  //   const [logoURL, setURL] = useState(defaultImg);

  // const token = getAuth();

  //   const CheckImgExists = imgurl => {
  //     return new Promise(function (resolve, reject) {
  //       var ImgObj = new Image();
  //       ImgObj.src = imgurl;
  //       ImgObj.onload = function (res) {
  //         resolve(res);
  //       };
  //       ImgObj.onerror = function (err) {
  //         reject(err);
  //       };
  //     });
  //   };

  //   useEffect(() => {
  //     if (isLogin) {
  //       if (userImg) {
  //         let nextUrl = getProfileImg(userImg);
  //         CheckImgExists(nextUrl)
  //           .then(() => {
  //             setURL(nextUrl);
  //           })
  //           .catch(() => {
  //             setDefaultImg(
  //               Math.round(Math.random())
  //                 ? require("../../images/female.png")
  //                 : require("../../images/male.png")
  //             );
  //           });
  //       }
  //     }
  //   }, [userImg, isLogin, setDefaultImg]);

  // useEffect(() => {}, [userProfile])
  const { setGameState, setLanguage, language } = useContext(QuizContext);

  return (
    <Menu
      {...props}
      burgerButtonClassName={classes.burgerIcon}
      customBurgerIcon={<IoIosOptions className={classes.languageicon} />}
    >
      <div className={classes.container}>
        <div className={classes.userProfile}></div>
        <div className={classes.user}>
          <div className={classes.name}>Hi,there 💗</div>
          <p className={classes.username}>You are learning {language}</p>
        </div>

        <div className={classes.logo}></div>
        <div className={classes.menu}>{props.language}</div>
      </div>
    </Menu>
  );
};
