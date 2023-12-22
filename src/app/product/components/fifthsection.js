import React from "react";
import { Box, Text, Img, useMediaQuery } from "@chakra-ui/react";
import styles from "../style.module.css";
import datadrivenImg from "../../../assets/ProductPageImages/Data-drivenImg.png";

const Fifthsection = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isMdScreen] = useMediaQuery(" (max-width: 1024px)");
  return (
    <Box
      maxW={isLargerThan800 ? "1100px" : "320px"}
      m={"auto"}
      mt={isLargerThan800 ? null : "130px"}
    >
      <Box
        display={"flex"}
        flexDir={isLargerThan800 ? "row" : "column"}
        justifyContent={"space-between"}
        gap={isLargerThan800 ? "50px" : "0px"}
      >
        <Box
          my={"auto"}
          w={"100%"}
          textAlign={isLargerThan800 ? "start" : "center"}
        >
          <Text
            className={styles.gradient}
            fontSize={isLargerThan800 ? "30px" : "20px"}
            fontWeight={"bold"}
          >
            Lead Generation
          </Text>
          <Text
            fontSize={isLargerThan800 ? "45px" : "33px"}
            fontWeight={"bold"}
            py={"15px"}
          >
            More leads that convert
          </Text>
          <Text fontSize={"14px"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam et
            ea rebum. Stet clita kasd gubergren.
          </Text>
        </Box>
        <Box
          className={styles.fifthsectionBg}
          w={isLargerThan800 ? "30%" : "100%"}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height={isLargerThan800 ? "80vh" : "20vh"}
          >
            <Img src={datadrivenImg} w={isLargerThan800 ? "80%" : "100%"} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Fifthsection;
