import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ReviewCard from "./ReviewCard";
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
    <Box
      sx={{
        py: 5,
        px: { xs: 2, sm: 4, md: 6 },
        direction: "rtl",
        width: "100%",
      }}
      className="about_parag_cont"
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        className="image_div_title"
      >
        ביקורות
      </Typography>

      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
        {reviews.map((review, index) => (
          <Grid
            item
            key={index}
            xs={12} // 1 על כל השורה במובייל
            sm={6} // 2 בשורה במסכים בינוניים
            md={4} // 3 בשורה בדסקטופ
          >
            <ReviewCard
              name={review.name}
              content={review.content}
              stars={review.stars}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Reviews;
