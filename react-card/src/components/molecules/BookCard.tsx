import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import { Grid } from "@mui/material";
import BookTitle from "../atoms/BookTitle";
import AuthorName from "../atoms/AuthorName";
import TimeMolecule from "./TimeMolecule";
import useStyle from "../../theme";
import Hamburger from "../atoms/Hamburger";
import Bottom from "../atoms/Bottom";

interface imageProps {
  image: string;
}
function BookCard(cardProps: imageProps): JSX.Element {
  const classes = useStyle();
  return (
    <Grid container direction="column">
      <Grid>
        <CardMedia
          component="img"
          alt="card"
          height="282"
          width="284"
          border-radius="8 8 0 0"
          image={cardProps.image}
        />
      </Grid>

      <Grid item>
        <BookTitle />
      </Grid>

      <Grid item>
        <AuthorName />
      </Grid>

      <Grid item className={classes.grid1}>
        <TimeMolecule />
      </Grid>

      <Grid className={classes.grid2}>
        <Hamburger />
      </Grid>

      <Grid item>
        <Bottom />
      </Grid>
      
    </Grid>
  );
}

export default BookCard;
