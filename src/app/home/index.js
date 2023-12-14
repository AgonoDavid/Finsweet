import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footers";
import BorderlessCard from "../../components/borderlessCard";
import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Box>
        <BorderlessCard />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
