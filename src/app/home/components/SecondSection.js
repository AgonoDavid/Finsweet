import React from "react";
import { Box, Text, Flex, Img, useMediaQuery } from "@chakra-ui/react";
import arrow from "../../../assets/arrow.svg";
import styles from "../style.module.css";

const SecondSection = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Box maxW={isLargerThan800 ? "1150px" : "350px"} m={"auto"}>
      <Box
        display={"flex"}
        my={"100px"}
        flexDir={isLargerThan800 ? "row" : "column"}
        justifyContent={"space-between"}
        align={isLargerThan800 ? "start" : "center"}
      >
        <Box pb={isLargerThan800 ? "0px" : "40px"}>
          <Text
            className={styles.gradient}
            fontSize={"23px"}
            fontWeight={"semibold"}
            fontFamily={"Roboto"}
            pb={"10px"}
          >
            Why should you work with us?
          </Text>
          <Text
            fontFamily={"Roboto"}
            fontSize={"38px"}
            fontWeight={"bold"}
            pb={"10px"}
          >
            To upscale your business
            <br /> to the next level
          </Text>
          <Text fontFamily={"Roboto"} fontSize={"12px"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy
            <br /> eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam
            <br /> voluptua invidunt ut labore.
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"space-between"}
          textAlign={isLargerThan800 ? null : "start"}
          gap={isLargerThan800 ? null : "20px"}
        >
          <Box>
            <Flex>
              <Img src={arrow} />
              <Text my={"auto"} fontSize={"15px"} pl={"20px"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </Text>
            </Flex>
          </Box>
          <Box>
            <Flex>
              <Img src={arrow} />
              <Text my={"auto"} fontSize={"15px"} pl={"20px"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </Text>
            </Flex>
          </Box>
          <Box>
            <Flex>
              <Img src={arrow} />
              <Text my={"auto"} fontSize={"15px"} pl={"20px"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </Text>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SecondSection;
