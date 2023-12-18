import React from "react";
import styles from "../style.module.css";
import { Box, Text, Img, useMediaQuery } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import cardImg from "../../../assets/Image.png";

const ThirdSection = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Box className={styles.colorBg}>
      <Box maxW={isLargerThan800 ? "1150px" : "350px"} m={"auto"}>
        <Box
          py={"60px"}
          display={"flex"}
          flexDir={isLargerThan800 ? "row" : "column"}
          justifyContent={"space-between"}
          gap={"70px"}
          w={"100%"}
        >
          <Box my={"auto"} textAlign={isLargerThan800 ? "start" : "center"}>
            <Text fontSize={"55px"} fontWeight={"bold"}>
              More impressions, more conversions
            </Text>
            <Text fontSize={"15px"} py={"25px"}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua invidunt ut labore.
            </Text>
            <Button
              bg={"black"}
              p={"25px"}
              textColor={"white"}
              _hover={{ bg: "white", color: "black" }}
            >
              Get a Free Trial
            </Button>
          </Box>
          <Box>
            <Img src={cardImg} alt="cardImg" objectFit={"contain"} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ThirdSection;
