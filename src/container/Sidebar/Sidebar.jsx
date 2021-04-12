import React, { useContext } from "react"
import classes from "./sidebar.module.scss"
import { IoIosOptions } from "react-icons/io"

import { scaleRotate as Menu } from "react-burger-menu" //scaleRotate
import { QuizContext } from "../../Helpers/Context"

export const Sidebar = (props) => {
  const { language } = useContext(QuizContext)

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
  )
}
