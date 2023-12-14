import React from "react";
import { Box, Text, Img, Button } from "@chakra-ui/react";
import CardBlurGradient from "../../assets/Blur Gradient-1.png";
import { Link } from "react-router-dom";

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
        <Text textAlign={"center"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy.
        </Text>
        <Box textAlign={"center"} mt={"20px"}>
          <Link to="/pricing">
            <Button
              bg={"black"}
              color={"white"}
              _hover={{ textColor: "black", backgroundColor: "white" }}
            >
              View Pricing
            </Button>
          </Link>
        </Box>
      </Box>
      <Box>
        <Img src={CardBlurGradient} alt="style" />
      </Box>
    </Box>
  );
};

export default BorderlessCard;
