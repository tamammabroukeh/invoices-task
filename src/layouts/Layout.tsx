import Header from "@/components/ui/Header";
import { Box, Container } from "@mui/material";
import { Outlet } from "react-router";
const Layout = () => {
  return (
    <>
      <Header />
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box component="main">
          <Outlet />
        </Box>
      </Container>
    </>
  );
};
export default Layout;
