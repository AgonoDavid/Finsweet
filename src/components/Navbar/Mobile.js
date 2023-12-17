import React from "react";
import { Box, CloseButton } from "@chakra-ui/react";

const Mobile = ({ show, onClose }) => {
  return (
    <Box
      width={"100%"}
      height={"100vh"}
      position="fixed"
      top="0"
      right={show ? "0" : "-100%"}
      zIndex="10"
      transition="0.3s ease-in-out"
      overflowY="scroll"
      padding="24px"
    >
      <Box
        position="fixed"
        top="0"
        right={show ? "0" : "-100%"}
        w="300px"
        h="100vh"
        zIndex="10"
        bg="red"
        opacity={show ? "100%" : "0"}
        transition="0.3s ease-in-out"
        overflowY="scroll"
        padding="24px"
      >
        <Box display="flex" justifyContent="flex-end" mb="30px">
          <CloseButton onClick={onClose} />
        </Box>
      </Box>
    </Box>
  );
};

export default Mobile;
