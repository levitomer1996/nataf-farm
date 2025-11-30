// ReviewCard.js
import React from "react";
import { Card, Box, Typography, Stack } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarIcon from "@mui/icons-material/Star";
import "../Home.css";
const ReviewCard = ({ name, role, content, stars = 5 }) => {
  return (
    <Card
      sx={{
        borderRadius: 4,
        p: 3,
        bgcolor: "#F5FFFB",
        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
        maxWidth: 380,
        direction: "rtl",
      }}
      className="review_card"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <FormatQuoteIcon sx={{ fontSize: 32, color: "#57C3A4" }} />

        <Stack direction="row" spacing={0.5}>
          {Array.from({ length: stars }).map((_, i) => (
            <StarIcon key={i} sx={{ fontSize: 20, color: "#FFC107" }} />
          ))}
        </Stack>
      </Box>

      <Typography
        variant="body1"
        className="review_card"
        sx={{ mb: 3, color: "#333", fontSize: 16, lineHeight: 1.6 }}
      >
        "{content}"
      </Typography>

      <Box>
        <Typography
          variant="subtitle1"
          className="review_card"
          sx={{ fontWeight: 700, color: "#222", mb: 0.5 }}
        >
          {name}
        </Typography>

        {role && (
          <Typography variant="body2" sx={{ color: "#18A07A" }}>
            {role}
          </Typography>
        )}
      </Box>
    </Card>
  );
};

export default ReviewCard;
