import { Box, Typography } from "@mui/material";
export default function Footer() {
  return (
    <>
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "gray",
          display: "flex",
        }}
      >
        <Typography variant="h6">
          All Rights Reservred &copy; Saurabh
        </Typography>
      </Box>
    </>
  );
}
