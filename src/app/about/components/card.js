import { Box, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../style.module.css";

const Card = () => {
  return (
    <Box bg={"#F0F2FE"}>
      <Box
        maxW={"1100px"}
        m={"auto"}
        display={"flex"}
        justifyContent={"space-between"}
        gap={"60px"}
        py={"30px"}
        mt={"60px"}
      >
        <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
          <Text
            className={styles.gradient}
            fontWeight={"bold"}
            fontSize={"20px"}
          >
            Our Goals
          </Text>
          <Text fontSize={"35px"} fontWeight={"bold"}>
            To upscale your business <br />
            to the next level
          </Text>
          <Text fontSize={"13px"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
          <Text
            className={styles.gradient}
            fontWeight={"bold"}
            fontSize={"20px"}
          >
            Our Vision{" "}
          </Text>
          <Text fontSize={"35px"} fontWeight={"bold"}>
            To provide solutions for growing companies
          </Text>
          <Text fontSize={"13px"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
