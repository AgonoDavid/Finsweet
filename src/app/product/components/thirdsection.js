import React from "react";
import { Box, Img, Text } from "@chakra-ui/react";
import styles from "../style.module.css";
import datadrivenImg from "../../../assets/ProductPageImages/Data-drivenImg.png";

const Thirdsection = () => {
  return (
    <Box className={styles.thirdsectionBg}>
      <Box maxW={"1100px"} m={"auto"}>
        <Box display={"flex"} justifyContent={"space-between"} gap={"50px"}>
          <Box my={"auto"} w={"55%"}>
            <Text
              className={styles.gradient}
              fontSize={"30px"}
              fontWeight={"bold"}
            >
              Marketing insights
            </Text>
            <Text fontSize={"52px"} fontWeight={"bold"} py={"20px"}>
              Data-driven client feedback
            </Text>
            <Text fontSize={"13px"}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren.
            </Text>
          </Box>
          <Box w={"45%"}>
            <Img src={datadrivenImg} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Thirdsection;
