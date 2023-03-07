import React from "react";
import "../Home.css";

import { Grid, Paper } from "@mui/material";
import ContactIcons from "./ContactIcons";

const AboutParag = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className="about_parag_cont"
    >
      <Grid item>
        <Paper elevation={3} style={{ height: 300, width: 300, margin: 10 }}>
          <div style={{ padding: 10 }}>
            <p className="about_parag_cont_title">הפנסיון כולל:</p>
            <ul style={{ direction: "rtl", textAlign: "right" }}>
              <li>חציר חופשי</li>
              <li>מגרש</li>
              <li>עמדות קשירה ושטיפה</li>
              <li>מקרר</li>
              <li>פינות ישיבה</li>
              <li>ניקיון התאים פעם ביום</li>
              <li>האכלת תערובת </li>
            </ul>
          </div>
        </Paper>
      </Grid>
      <Grid item>
        <Paper elevation={3} style={{ height: 300, width: 300, margin: 10 }}>
          <div style={{ padding: 10 }}>
            <p className="about_parag_cont_title">מטרות הרכיבה הטיפולית:</p>
            <ul style={{ direction: "rtl", textAlign: "right" }}>
              <li>חיזוק הבטחון העצמי </li>
              <li>יכולת התמודדות</li>
              <li>שיפור הערכה עצמית</li>
              <li>שיפור שיווי משקל וכושר גופני</li>
              <li>חיזוק השרירים</li>
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
