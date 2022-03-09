import React from "react";
import useStyle from "../../theme";
function Time() {
  const classes = useStyle();
  return <p className={classes.timeStyle}>13-minute read</p>;
}

export default Time;
