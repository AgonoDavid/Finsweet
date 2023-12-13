import React from "react";
import { Box, Button } from "@chakra-ui/react";

const CustomButton = ({ children }) => {
  return (
    <Box>
      <Button bg={"black"} color={"white"} rounded={"10px"}>
        {children}
      </Button>
    </Box>
  );
};

export default CustomButton;
