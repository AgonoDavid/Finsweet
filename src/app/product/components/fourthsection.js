import React from "react";
import styles from "../style.module.css";
import { Box, Img, Text } from "@chakra-ui/react";
import performanceImg from "../../../assets/ProductPageImages/performance.png";

const Fourthsection = () => {
  return (
    <Box maxW={"1100px"} m={"auto"}>
      <Box display={"flex"} justifyContent={"space-between"} gap={"50px"}>
        <Box w={"55%"}>
          <Img src={performanceImg} w={"85%"} />
        </Box>
        <Box my={"auto"} w={"45%"}>
          <Text
            className={styles.gradient}
            fontSize={"30px"}
            fontWeight={"bold"}
          >
            Time Tracker
          </Text>
          <Text fontSize={"40px"} fontWeight={"bold"} py={"15px"}>
            Track your project performance{" "}
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

export default Fourthsection;
