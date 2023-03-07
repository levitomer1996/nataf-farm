import * as React from "react";
import "./header.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import Container from "@mui/material/Container";
import horseLogo from "../../Assets/horse-logo.png";
const pages = ["רכיבה טיפולית", "עלינו"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "white" }}>
      <Container maxWidth="100%">
        <Toolbar
          disableGutters
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <img src={horseLogo} className="logo" />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
