import React from "react";
import { Box, Text, Img } from "@chakra-ui/react";
import styles from "../style.module.css";
import datadrivenImg from "../../../assets/ProductPageImages/Data-drivenImg.png";

const Fifthsection = () => {
  return (
    <Box maxW={"1100px"} m={"auto"}>
      <Box display={"flex"} justifyContent={"space-between"} gap={"50px"}>
        <Box my={"auto"} w={"100%"}>
          <Text
            className={styles.gradient}
            fontSize={"30px"}
            fontWeight={"bold"}
          >
            Lead Generation
          </Text>
          <Text fontSize={"45px"} fontWeight={"bold"} py={"15px"}>
            More leads that convert
          </Text>
          <Text fontSize={"14px"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam et
            ea rebum. Stet clita kasd gubergren.
          </Text>
        </Box>
        <Box className={styles.fifthsectionBg} w={"30%"}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="80vh"
          >
            <Img src={datadrivenImg} w={"80%"} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Fifthsection;
