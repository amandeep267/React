import React from "react";
import { Grid } from "@mui/material";
import Vectorclock from "../../images/Vectorclock.png";
import Time from "../atoms/Time";
function TimeMolecule() {
  return (
    <Grid container spacing={1}>
     
      <Grid item>
        <img src={Vectorclock} alt="clock"></img>
      </Grid>
     
      <Grid item>
        <Time />
     
      </Grid>
    </Grid>
  );
}
export default TimeMolecule;
