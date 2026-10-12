
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#ffffff",
      }}
    >
      <Header />

      <Sidebar />

      <Box
        component="main"
        sx={{
          flex: 1,
          width: "100%",
          maxWidth: 1440,
          mx: "auto",
          p: { xs: 2, md: 4 },
          boxSizing: "border-box",
        }}
      >
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
}
