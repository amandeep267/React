import useStyle from "../../theme";
import React from "react";

function AuthorName() {
  const classes = useStyle();
  return (
    <>
      <p className={classes.authorName}>Jim Collins & Bill Lazier</p>
    </>
  );
}

export default AuthorName;
