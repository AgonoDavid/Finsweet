import React from "react";
import styles from "../style.module.css";
import { Box, Img, Text, useMediaQuery } from "@chakra-ui/react";
import performanceImg from "../../../assets/ProductPageImages/performance.png";

const Sixthsection = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isMdScreen] = useMediaQuery(" (max-width: 1024px)");
  return (
    <Box
      maxW={[isLargerThan800 ? "1100px" : "320px", isMdScreen ? "750px" : null]}
      m={"auto"}
      my={isMdScreen ? "130px" : null}
    >
      <Box
        display={"flex"}
        flexDir={isLargerThan800 ? "row" : "column-reverse"}
        justifyContent={"space-between"}
        gap={"50px"}
      >
        <Box w={isLargerThan800 ? "55%" : "100%"}>
          <Img src={performanceImg} w={isLargerThan800 ? "85%" : "100%"} />
        </Box>
        <Box
          my={"auto"}
          w={isLargerThan800 ? "45%" : "100%"}
          textAlign={isLargerThan800 ? "start" : "center"}
        >
          <Text
            className={styles.gradient}
            fontSize={isLargerThan800 ? "30px" : "20px"}
            fontWeight={"bold"}
          >
            Remote teams{" "}
          </Text>
          <Text
            fontSize={isLargerThan800 ? "40px" : "33px"}
            fontWeight={"bold"}
            py={"15px"}
          >
            Real-time collaboration{" "}
          </Text>
          <Text fontSize={"13px"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Sixthsection;
