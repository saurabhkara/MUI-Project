import { Box, AppBar, Typography, Toolbar } from "@mui/material";
import "./Header.css";

export default function Header() {
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <Typography>My Restuarant</Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
