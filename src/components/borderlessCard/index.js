import React from "react";
import { Box, Text, Img, Button } from "@chakra-ui/react";
import CardBlurGradient from "../../assets/Blur Gradient-1.png";

const BorderlessCard = () => {
  return (
    <Box position={"relative"}>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex="1"
      >
        <Text fontSize={"36px"} textAlign={"center"} fontWeight={"semibold"}>
          Are you ready to grow your
          <br /> business with us?
        </Text>
        <Box textAlign={"center"} mt={"20px"}>
          <Button bg={"black"} color={"white"}>
            View Pricing
          </Button>
        </Box>
      </Box>
      <Box>
        <Img src={CardBlurGradient} alt="style" />
      </Box>
    </Box>
  );
};

export default BorderlessCard;
