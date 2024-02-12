import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "#1A1A19",
          color: "white",
          padding: 3,
        }}
      >
        <Box
          sx={{
            "& svg": {
              fontSize: "60px",
              marginRight: 2,
              cursor: "pointer",
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          <InstagramIcon />
          <TwitterIcon />
          <GitHubIcon />
          <YouTubeIcon />
        </Box>
        <Typography
          variant="h6"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1 rem",
            },
          }}
        >
          All Rights Reservred &copy; Saurabh
        </Typography>
      </Box>
    </>
  );
}
