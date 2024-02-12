import Layout from "../../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
} from "@mui/material";

export default function Contact() {
  return (
    <Layout>
      <div>
        <Box
          sx={{
            my: 10,
            // ml: 10,
            "& h4": {
              textAlign: "center",
              fontWeight: "bold",
              mb: 2,
            },
          }}
        >
          <Typography variant="h4">Contact us</Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            quis aliquam labore officiis enim! Consectetur molestiae, commodi
            est quae voluptatum aperiam impedit sed fugiat deleniti vero optio
            laborum, ducimus, molestias nisi dolores. Cupiditate ullam cumque
            amet autem libero doloribus voluptatum qui voluptatem, hic non
            labore, ad quos quae, illo aperiam molestiae. Reiciendis doloremque
            itaque omnis architecto incidunt fuga quisquam rerum necessitatibus!
            Harum aspernatur minus consequuntur magni recusandae voluptas illum
            totam repellendus ex. Ratione debitis dignissimos eligendi
            asperiores explicabo doloremque natus illum impedit. Earum, mollitia
            molestias. Iste optio accusantium officia, magnam eius modi
            consequuntur porro perspiciatis enim, deserunt ut sapiente
            recusandae.
          </p>
        </Box>
        <Box sx={{ padding: 3 }}>
          <TableContainer component={Paper}>
            <Table aria-label="contact label">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      backgroundColor: "black",
                      color: "white",
                    }}
                  >
                    Contact Detail
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 123456789
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <EmailIcon sx={{ color: "skyblue", pt: 1 }} /> 123456789
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <CallIcon sx={{ color: "green", pt: 1 }} /> 123456789
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <CallIcon sx={{ color: "green", pt: 1 }} /> 123456789
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>
    </Layout>
  );
}
