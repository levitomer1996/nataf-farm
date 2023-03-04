import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Grid, IconButton, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import "../Home.css";
const ContactIcons = () => {
  return (
    <Paper style={{ height: 300, width: 300 }} elevation={3}>
      <Grid
        style={{ padding: 10 }}
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        {" "}
        <Grid item>
          <p className="icon_cont_title">צרו איתנו קשר</p>
        </Grid>
        <Grid item>
          <IconButton component={Link} to="tel:+972509721767">
            <PhoneIcon style={{ width: "50px", height: "50px" }} />
          </IconButton>
          <IconButton
            onClick={() =>
              (window.location.href = "mailto:Roni97989798@gmail.com")
            }
          >
            <EmailIcon style={{ width: "50px", height: "50px" }} />
          </IconButton>
        </Grid>
        <Grid item>
          <a href="https://wa.me/972509721767">
            <IconButton>
              <WhatsAppIcon style={{ width: "50px", height: "50px" }} />
            </IconButton>
          </a>
          <IconButton
            onClick={() =>
              window.open(
                "https://www.facebook.com/profile.php?id=100089281425312"
              )
            }
          >
            <FacebookIcon style={{ width: "50px", height: "50px" }} />
          </IconButton>{" "}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ContactIcons;
