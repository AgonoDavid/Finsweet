import React from "react";
import { Box, Text, Img, Grid, useMediaQuery } from "@chakra-ui/react";
import styles from "../style.module.css";
import privacy from "../../../assets/ProductPageImages/Privacy.svg";
import feat from "../../../assets/ProductPageImages/Feat.svg";
import built from "../../../assets/ProductPageImages/Built-in.svg";
import easy from "../../../assets/ProductPageImages/Easy.svg";
import collab from "../../../assets/ProductPageImages/Collaborate.svg";
import sync from "../../../assets/ProductPageImages/Sync.svg";

const SecondSection = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isMdScreen] = useMediaQuery(" (max-width: 1024px)");
  return (
    <Box className={styles.colorBg}>
      <Box>
        <Box>
          <Text
            fontSize={isLargerThan800 ? "30px" : "25px"}
            fontWeight={"bold"}
            py={"70px"}
            textAlign={"center"}
            mt={"40px"}
          >
            Get the best out of your company
            {isLargerThan800 ? <br /> : null} with our service
          </Text>
        </Box>
        <Box
          bg={"rgba(255, 255, 255, 0.69)"}
          w={"97%"}
          borderTopRightRadius={"50px"}
        >
          <Box
            maxW={isLargerThan800 ? "1100px" : "320px"}
            m={"auto"}
            py={"80px"}
          >
            <Grid
              templateColumns={
                isLargerThan800 ? "repeat(3,2fr)" : "repeat(2,1fr)"
              }
              gap={isLargerThan800 ? "120px" : "60px"}
            >
              <Box my={"auto"}>
                <Img src={privacy} />
                <Text
                  fontSize={isLargerThan800 ? "20px" : "17px"}
                  fontWeight={"bold"}
                  fontFamily={"Roboto"}
                  py={"10px"}
                >
                  Security and privacy
                </Text>
                <Text fontSize={isLargerThan800 ? "13px" : "11px"}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor.
                </Text>
              </Box>
              <Box my={"auto"}>
                <Img src={built} />
                <Text
                  fontSize={isLargerThan800 ? "20px" : "17px"}
                  fontWeight={"bold"}
                  fontFamily={"Roboto"}
                  py={"10px"}
                >
                  Built-in AI features
                </Text>
                <Text fontSize={isLargerThan800 ? "13px" : "11px"}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor.
                </Text>
              </Box>
              <Box my={"auto"}>
                <Img src={collab} />
                <Text
                  fontSize={isLargerThan800 ? "20px" : "17px"}
                  fontWeight={"bold"}
                  fontFamily={"Roboto"}
                  py={"10px"}
                >
                  Collaborate with others{" "}
                </Text>
                <Text fontSize={isLargerThan800 ? "13px" : "11px"}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor.
                </Text>
              </Box>
              <Box my={"auto"}>
                <Img src={sync} />
                <Text
                  fontSize={isLargerThan800 ? "20px" : "17px"}
                  fontWeight={"bold"}
                  fontFamily={"Roboto"}
                  py={"10px"}
                >
                  Real time sync
                </Text>
                <Text fontSize={isLargerThan800 ? "13px" : "11px"}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor.
                </Text>
              </Box>
              <Box my={"auto"}>
                <Img src={feat} />
                <Text
                  fontSize={isLargerThan800 ? "20px" : "17px"}
                  fontWeight={"bold"}
                  fontFamily={"Roboto"}
                  py={"10px"}
                >
                  Built-in AI features{" "}
                </Text>
                <Text fontSize={isLargerThan800 ? "13px" : "11px"}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor.
                </Text>
              </Box>
              <Box my={"auto"}>
                <Img src={easy} />
                <Text
                  fontSize={isLargerThan800 ? "20px" : "17px"}
                  fontWeight={"bold"}
                  fontFamily={"Roboto"}
                  py={"10px"}
                >
                  Easy notes organization{" "}
                </Text>
                <Text fontSize={isLargerThan800 ? "13px" : "11px"}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor.
                </Text>
              </Box>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SecondSection;
