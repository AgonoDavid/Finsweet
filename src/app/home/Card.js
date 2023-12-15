import React from "react";
import { Box, Text, Img } from "@chakra-ui/react";
import support from "../../assets/support.svg";
import secure from "../../assets/secure.svg";
import premium from "../../assets/premium.svg";

export const Card = () => {
  return (
    <Box maxW={"1150px"} m={"auto"}>
      <Box
        w={"100%"}
        bg={"#E0E4FC"}
        rounded={"10px"}
        display={"flex"}
        justifyContent={"space-between"}
        gap={"30px"}
        p={"70px"}
        mt={"50px"}
      >
        <Box>
          <Img src={secure} pb={"5"} />
          <Box>
            <Text fontSize={"25px"} fontWeight={"bold"} fontFamily={"Roboto"}>
              High security to protect from piracy{" "}
            </Text>
            <Text fontSize="13px" pt={"10px"}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor.
            </Text>
          </Box>
        </Box>
        <Box>
          <Img src={premium} pb={"15px"} />
          <Text fontSize={"25px"} fontWeight={"bold"} fontFamily={"Roboto"}>
            Premium quality performance{" "}
          </Text>
          <Text fontSize="13px" pt={"10px"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor.
          </Text>
        </Box>
        <Box>
          <Img src={support} pb={"15px"} />
          <Text fontSize={"25px"} fontWeight={"bold"} fontFamily={"Roboto"}>
            Full time customer
            <br /> support - 24/7{" "}
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
