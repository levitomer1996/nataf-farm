import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ReviewCard from "./ReviewCard"; // ← הקומפוננטה המעוצבת
import "../Home.css";

const reviews = [
  {
    name: "גילעד פסטרנק",
    content:
      "מקום מהמם, מרגיע ושלו. רוני משקיעה בסוסים כאילו הם הילדים שלה וזה ניכר! היינו עם הילד והיה לנו מושלם",
    stars: 5,
  },
  {
    name: "דורון בר-אל",
    content:
      "חווה נפלאה שיש בה הכל. האירוע היה מושלם בזכות רוני המהממת שדאגה לכל פרט. ממליץ בחום. אנחנו בטוח נחזור שוב!",

    stars: 5,
  },
  {
    name: "מאיה מוסקטו",
    content:
      "חווה מדהימה, צוות מדהים שמתייחס אליך כמו משפחה. עזרו מאוד לבת שלי להתפתח אישית ואין עליהם בעולם!! ממליצה בחום ❤️",
    stars: 5,
  },
];

const Reviews = () => {
  return (
    <Box sx={{ py: 5, px: 2, direction: "rtl" }} className="about_parag_cont">
      <Grid display="flex" justifyContent="center" sx={{ mb: 4 }}>
        {reviews.map((review, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ReviewCard
              name={review.name}
              content={review.content}
              stars={review.stars}
              role={review.role}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Reviews;
