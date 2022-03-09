import React from 'react';
import BookCard from "./components/molecules/BookCard";
import useStyle from"./theme";
import { Card, Grid } from "@mui/material";
 //import Grid from '@mui/material';
import './App.css';
import card from './images/card.png';
function App() {
  const classStyle=useStyle();
  return (
    <div className="App">
      <Card className={classStyle.cardStyle}>
     <Grid container direction="column"  >
       <Grid item>
      <BookCard  image={card}/> 
      </Grid>
      </Grid>
      </Card>
    </div>
  );
}

export default App;
