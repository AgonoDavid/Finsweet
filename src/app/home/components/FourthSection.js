import React from "react";
import { Box, Text, Img, Flex, useMediaQuery } from "@chakra-ui/react";
import styles from "../style.module.css";
import featureicon1 from "../../../assets/Feature Icon with circle.png";
import featureicon2 from "../../../assets/Feature Icon with circle (1).png";
import featureicon3 from "../../../assets/Feature Icon with circle (2).png";

const FourthSection = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isMdScreen] = useMediaQuery(" (max-width: 1024px)");

  return (
    <Box
      maxW={[isLargerThan800 ? "1150px" : "330px", isMdScreen ? "750px" : null]}
      m={"auto"}
    >
      <Box
        display={"flex"}
        my={"80px"}
        flexDir={isLargerThan800 ? "row" : "column"}
        justifyContent={"space-between"}
        align={isLargerThan800 ? "start" : "center"}
        gap={(isLargerThan800 ? null : "30px", isMdScreen ? "40px" : null)}
      >
        <Box>
          <Text
            className={styles.gradient}
            fontSize={"23px"}
            fontWeight={"semibold"}
            fontFamily={"Roboto"}
            pb={"10px"}
          >
            Discover More{" "}
          </Text>
          <Text
            fontFamily={"Roboto"}
            fontSize={isMdScreen ? "25px" : "38px"}
            fontWeight={"bold"}
            pb={"10px"}
          >
            Analyze Your Sales And
            <br /> Marketing Leads
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
              <Img src={featureicon1} w={"7%"} objectFit={"contain"} />
              <Flex flexDir={"column"}>
                <Text pl={"20px"} fontSize={"18px"} fontWeight={"semibold"}>
                  Sales Tracking
                </Text>
                <Text my={"auto"} fontSize={"13px"} pl={"20px"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </Text>
              </Flex>
            </Flex>
          </Box>
          <Box>
            <Flex>
              <Img src={featureicon2} w={"7%"} objectFit={"contain"} />
              <Flex flexDir={"column"}>
                <Text pl={"20px"} fontSize={"18px"} fontWeight={"semibold"}>
                  Project Management{" "}
                </Text>
                <Text my={"auto"} fontSize={"13px"} pl={"20px"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </Text>
              </Flex>
            </Flex>
          </Box>
          <Box>
            <Flex>
              <Img src={featureicon3} w={"7%"} objectFit={"contain"} />
              <Flex flexDir={"column"}>
                <Text pl={"20px"} fontSize={"18px"} fontWeight={"semibold"}>
                  Activity Report{" "}
                </Text>
                <Text my={"auto"} fontSize={"13px"} pl={"20px"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FourthSection;
