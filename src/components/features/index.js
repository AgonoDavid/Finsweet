import { Box, Text, Img, Divider, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import advanced from "../../assets/advanced.svg";
import customizable from "../../assets/customizable.svg";
import simple from "../../assets/simple.svg";

const Features = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Box maxW={isLargerThan800 ? "1150px" : "350px"} m={"auto"}>
      <Box
        w={"100%"}
        bg={"#FFF0F5"}
        rounded={"10px"}
        display={"flex"}
        justifyContent={"space-between"}
        gap={"30px"}
        p={"70px"}
        mt={"50px"}
        flexDir={isLargerThan800 ? "row" : "column"}
        align={isLargerThan800 ? "start" : "center"}
      >
        <Box>
          <Img src={advanced} />
          <Box>
            <Text fontSize={"30px"} fontWeight={"bold"}>
              Advanced 256-bit encryption
            </Text>
            <Text fontSize="13px" pt={"10px"}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor.
            </Text>
          </Box>
        </Box>
        <Divider orientation="vertical" />
        <Box>
          <Img src={simple} />
          <Text fontSize={"30px"} fontWeight={"bold"}>
            Simple collaboration tools
          </Text>
          <Text fontSize="13px" pt={"10px"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor.
          </Text>
        </Box>
        <Divider orientation="vertical" />
        <Box>
          <Img src={customizable} />
          <Text fontSize={"30px"} fontWeight={"bold"}>
            Customizable AI features
          </Text>
          <Text fontSize="13px" pt={"10px"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Features;
