import React from "react";
import {
  Button,
  TextField,
  Typography,
  Box,
  Grid,
  Paper,
  Container,
} from "@mui/material";
import { Map, Phone, Email } from "@mui/icons-material";
import "./Contact.css"; // Importing the CSS file

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <section id="contact" className="contact-section">
      <Container sx={{ py: 5 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Grid container spacing={4}>
            {/* Contact Details Section */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#2e7d32",
                color: "white",
                p: 3,
                borderRadius: "8px",
                textAlign: "center", // Ensure titles are centered
              }}
            >
              <Typography
                variant="h3"
                gutterBottom
                classname="make_contact"
                id="font"
              >
                צור קשר / בוא לבקר
              </Typography>
              <Typography variant="body1" gutterBottom id="font">
                נשמח לשמוע מכם, לענות על כל שאלה ולהזמין אתכם לסיור היכרות
                בחווה.
              </Typography>

              <Box mt={3}>
                <Box display="flex" alignItems="center" mb={2}>
                  <Map sx={{ mr: 2 }} />
                  <Box>
                    <Typography
                      variant="h5"
                      id="font"
                      sx={{ textAlign: "center" }}
                    >
                      כתובת
                    </Typography>
                    <Typography variant="body2" id="font">
                      דרך הורד 73, מושב בית נחמיה
                    </Typography>
                  </Box>
                </Box>

                <Box display="flex" alignItems="center" mb={2}>
                  <Phone sx={{ mr: 2 }} />
                  <Box>
                    <Typography
                      variant="h5"
                      id="font"
                      sx={{ textAlign: "center" }}
                    >
                      טלפון
                    </Typography>
                    <Typography variant="body2" id="font">
                      <a href="tel:050-972-1767" style={{ color: "inherit" }}>
                        050-972-1767
                      </a>
                    </Typography>
                  </Box>
                </Box>

                <Box display="flex" alignItems="center">
                  <Email sx={{ mr: 2 }} />
                  <Box>
                    <Typography
                      variant="h5"
                      id="font"
                      sx={{ textAlign: "center" }}
                    >
                      אימייל
                    </Typography>
                    <Typography variant="body2" id="font">
                      <a
                        href="mailto:Roni97989798@gmail.com"
                        style={{ color: "inherit" }}
                      >
                        Roni97989798@gmail.com
                      </a>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Map Section */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.426392462563!2d34.95293773761031!3d31.979519381231135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d3f9c7b8c7b8b%3A0x0!2zMzHCsDU4JzQ2LjMiTiAzNMKwNTcnMDkuNiJF!5e0!3m2!1sen!2sil!4v1635000000000!5m2!1sen!2sil"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "8px" }}
                allowFullScreen=""
                loading="lazy"
                title="Map to farm"
              ></iframe>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </section>
  );
}
