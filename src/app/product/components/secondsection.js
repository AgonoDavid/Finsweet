import React from "react";
import { Box, Text, Img } from "@chakra-ui/react";
import styles from "../style.module.css";
import privacy from "../../../assets/ProductPageImages/Privacy.svg";
import feat from "../../../assets/ProductPageImages/Feat.svg";
import built from "../../../assets/ProductPageImages/Built-in.svg";
import easy from "../../../assets/ProductPageImages/Easy.svg";
import collab from "../../../assets/ProductPageImages/Collaborate.svg";
import sync from "../../../assets/ProductPageImages/Sync.svg";

const SecondSection = () => {
  return (
    <Box className={styles.colorBg}>
      <Box>
        <Box>
          <Text
            fontSize={"30px"}
            fontWeight={"bold"}
            py={"70px"}
            textAlign={"center"}
            mt={"60px"}
          >
            Get the best out of your company
            <br /> with our service
          </Text>
        </Box>
        <Box
          bg={"rgba(255, 255, 255, 0.69)"}
          w={"97%"}
          borderTopRightRadius={"50px"}
        >
          <Box maxW={"1100px"} m={"auto"} py={"80px"}>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              gap={"120px"}
            >
              <Box my={"auto"}>
                <Img src={privacy} />
                <Text
                  fontSize={"20px"}
                  fontWeight={"bold"}
                  fontFamily={"Roboto"}
                  py={"10px"}
                >
                  Security and privacy
                </Text>
                <Text fontSize="13px">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor.
                </Text>
              </Box>
              <Box my={"auto"}>
                <Img src={built} />
                <Text
                  fontSize={"20px"}
                  fontWeight={"bold"}
                  fontFamily={"Roboto"}
                  py={"10px"}
                >
                  Built-in AI features
                </Text>
                <Text fontSize="13px">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor.
                </Text>
              </Box>
              <Box my={"auto"}>
                <Img src={collab} />
                <Text
                  fontSize={"20px"}
                  fontWeight={"bold"}
                  fontFamily={"Roboto"}
                  py={"10px"}
                >
                  Collaborate with others{" "}
                </Text>
                <Text fontSize="13px">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor.
                </Text>
              </Box>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              gap={"120px"}
              pt={"60px"}
            >
              <Box my={"auto"}>
                <Img src={sync} />
                <Text
                  fontSize={"20px"}
                  fontWeight={"bold"}
                  fontFamily={"Roboto"}
                  py={"10px"}
                >
                  Real time sync
                </Text>
                <Text fontSize="13px">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor.
                </Text>
              </Box>
              <Box my={"auto"}>
                <Img src={feat} />
                <Text
                  fontSize={"20px"}
                  fontWeight={"bold"}
                  fontFamily={"Roboto"}
                  py={"10px"}
                >
                  Built-in AI features{" "}
                </Text>
                <Text fontSize="13px">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor.
                </Text>
              </Box>
              <Box my={"auto"}>
                <Img src={easy} />
                <Text
                  fontSize={"20px"}
                  fontWeight={"bold"}
                  fontFamily={"Roboto"}
                  py={"10px"}
                >
                  Easy notes organization{" "}
                </Text>
                <Text fontSize="13px">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor.
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SecondSection;
