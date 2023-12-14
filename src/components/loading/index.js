import { Box, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/Logo.png";

const Loading = () => {
  return (
    <Box display="grid" placeItems={"center"} w="100%" h="100vh">
      <Image src={logo} alt="logo" objectFit="cover" />
    </Box>
  );
};

export default Loading;
