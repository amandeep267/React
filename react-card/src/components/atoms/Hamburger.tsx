import useStyle from "../../theme";
import React from "react";
import hamburgerImg from "../../images/hamburgerImg.png";

function Hamburger() {
  const classes = useStyle();
  return (
    <img src={hamburgerImg} alt="hamburger" className={classes.hamburger} />
  );
}

export default Hamburger;
