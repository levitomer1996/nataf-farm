import React from "react";
import "../Home.css";

import { Grid, Paper } from "@mui/material";
import ContactIcons from "./ContactIcons";

const AboutParag = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      className="about_parag_cont"
      spacing={3}
    >
      <Grid item>
        <Paper elevation={3} style={{ height: 300, width: 300 }} space={1}>
          <div style={{ padding: 10 }}>
            <p className="about_parag_cont_title">בחווה שלנו</p>
            <ul>
              <li>חציר חופשי</li>
              <li>מגרש</li>
              <li>עמדות קשירה ושטיפה</li>
              <li>מקרר</li>
              <li>פינות ישיבה</li>
              <li>ניקיון פעם ביום של התאים</li>
              <li>תערובת פעמיים ביום</li>
            </ul>
          </div>
        </Paper>
      </Grid>
      <Grid item>
        <Paper elevation={3} style={{ height: 300, width: 300 }}>
          <div style={{ padding: 10 }}>
            <p className="about_parag_cont_title">רכיבה טיפולית</p>
            <ul>
              <li>חיזוק הבטחון העצמי </li>
              <li>יכולת התמודדות</li>
              <li>שיפור הערכה עצמית</li>
              <li>שיפור שיווי משקל וכושר גופני</li>
              <li>חיזוק השרירים</li>
              <li>בעיות רגשיות ועוד</li>
            </ul>
          </div>
        </Paper>
      </Grid>
      <Grid item>
        <ContactIcons />
      </Grid>
    </Grid>
  );
};

export default AboutParag;
