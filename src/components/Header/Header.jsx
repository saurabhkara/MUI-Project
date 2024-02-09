import { useState } from "react";
import {
  Box,
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  Divider,
} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  //menu drawer

  const drawer = (
    <Box onClick={handleDrawer} sx={{ textAlign: "center" }}>
      <Typography color="goldenrod" sx={{ flexGrow: 1, my: 2 }} variant="h6">
        <FastfoodIcon />
        My Restuarant
      </Typography>
      <Divider />
      <ul className="drawerMenu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              sx={{ display: { sm: "none", mr: 2 } }}
              aria-level={"open drawer"}
              edge="start"
              onClick={handleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography color="goldenrod" sx={{ flexGrow: 1 }} variant="h6">
              <FastfoodIcon />
              My Restuarant
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="headerMenu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/menu">Menu</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={open}
            onClose={handleDrawer}
            sx={{
              display: {
                xs: "block",
                sm: "none",
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: "200px",
                },
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Toolbar />
      </Box>
    </>
  );
}
