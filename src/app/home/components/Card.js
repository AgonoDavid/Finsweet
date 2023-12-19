import React from "react";
import { Box, Text, Img, useMediaQuery } from "@chakra-ui/react";
import support from "../../../assets/simple.svg";
import secure from "../../../assets/secure.svg";
import premium from "../../../assets/premium.svg";

export const Card = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 801px)");
  const [isMdScreen] = useMediaQuery("(max-width: 1024px)");

  return (
    <Box
      maxW={[isLargerThan800 ? "1150px" : "350px", isMdScreen ? "750px" : null]}
      m={"auto"}
    >
      <Box
        w={"100%"}
        bg={"#E0E4FC"}
        rounded={"10px"}
        display={"flex"}
        flexDir={isLargerThan800 ? "row" : "column"}
        justifyContent={"space-between"}
        gap={"30px"}
        p={"70px"}
        mt={"50px"}
        align={
          (isLargerThan800 ? "start" : "center",
          isMdScreen ? "center" : "start")
        }
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
