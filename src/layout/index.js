import React from "react";
import { Box } from "@chakra-ui/react";
import Footer from "../components/footers";
import BorderlessCard from "../components/borderlessCard";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Box>{children}</Box>
      <BorderlessCard />
      <Footer />
    </Box>
  );
};

export default Layout;
