import { AppBar, Container, Toolbar } from "@mui/material";
import React from "react";
import "./BottomNav.css";
const BottomNav = () => {
  return (
    <footer>
      <nav class="bottom-nav">
        <ul>
          <li>
            <a href="tel:0509721767">רוני נטף: 050-972-1767</a>
          </li>
          <li>
            <a href="mailto:Roni97989798@gmail.com">
              אימייל: Roni97989798@gmail.com
            </a>
          </li>
          <li>בית נחמיה דרך הורד 73</li>
        </ul>
      </nav>
    </footer>
  );
};

export default BottomNav;
