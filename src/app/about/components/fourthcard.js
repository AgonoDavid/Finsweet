import React from "react";
import { Box, Text, Grid, Img, useMediaQuery } from "@chakra-ui/react";
import team1 from "../../../assets/team1.png";
import team2 from "../../../assets/team2.png";
import team3 from "../../../assets/team3.png";
import team4 from "../../../assets/team4.png";
import team5 from "../../../assets/team5.png";
import team6 from "../../../assets/team6.png";

const Fourthcard = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 760px)");
  const [isMdScreen] = useMediaQuery(" (max-width: 1024px)");
  return (
    <Box
      maxW={[isLargerThan800 ? "1150px" : "330px", isMdScreen ? "750px" : null]}
      m={"auto"}
    >
      <Box
        display={"flex"}
        mt={"90px"}
        justifyContent={"space-between"}
        flexDirection={isLargerThan800 ? "row" : "column"}
      >
        <Box
          w={isLargerThan800 ? "35%" : "100%"}
          textAlign={isLargerThan800 ? "start" : "center"}
          pb={isLargerThan800 ? null : "30px"}
        >
          <Text fontSize={"38px"} fontWeight={"bold"} pb={"10px"}>
            Our talented Team
          </Text>
          <Text fontSize={"12px"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore.
          </Text>
        </Box>
        <Box w={isLargerThan800 ? "65%" : "100%"}>
          <Grid templateColumns={"repeat(3,1fr)"} gap={"25px"}>
            <Box bg={"#E0E4FC"} rounded={"10px"}>
              <Box>
                <Img src={team1} />
              </Box>
              <Box p={"15px"}>
                <Text
                  fontSize={isLargerThan800 ? "17px" : "13px"}
                  fontWeight={"bold"}
                >
                  Blake Matthews
                </Text>
                <Text fontSize={isLargerThan800 ? "12px" : "10px"}>
                  CEO & Co-Founder
                </Text>
              </Box>
            </Box>
            <Box bg={"#E0E4FC"} rounded={"10px"}>
              <Box>
                <Img src={team6} />
              </Box>
              <Box p={"15px"}>
                <Text
                  fontSize={isLargerThan800 ? "17px" : "13px"}
                  fontWeight={"bold"}
                >
                  Jack Newman{" "}
                </Text>
                <Text fontSize={isLargerThan800 ? "12px" : "10px"}>CTO</Text>
              </Box>
            </Box>
            <Box bg={"#E0E4FC"} rounded={"10px"}>
              <Box>
                <Img src={team2} />
              </Box>
              <Box p={"15px"}>
                <Text
                  fontSize={isLargerThan800 ? "17px" : "13px"}
                  fontWeight={"bold"}
                >
                  Sarinia Martins{" "}
                </Text>
                <Text fontSize={isLargerThan800 ? "12px" : "10px"}>
                  Marketing
                </Text>
              </Box>
            </Box>
            <Box bg={"#E0E4FC"} rounded={"10px"}>
              <Box>
                <Img src={team5} />
              </Box>
              <Box p={"15px"}>
                <Text
                  fontSize={isLargerThan800 ? "17px" : "13px"}
                  fontWeight={"bold"}
                >
                  Spencer Wright{" "}
                </Text>
                <Text fontSize={isLargerThan800 ? "12px" : "10px"}>
                  Project management
                </Text>
              </Box>
            </Box>
            <Box bg={"#E0E4FC"} rounded={"10px"}>
              <Box>
                <Img src={team3} />
              </Box>
              <Box p={"15px"}>
                <Text
                  fontSize={isLargerThan800 ? "17px" : "13px"}
                  fontWeight={"bold"}
                >
                  Caroline Ming{" "}
                </Text>
                <Text fontSize={isLargerThan800 ? "12px" : "10px"}>Sales</Text>
              </Box>
            </Box>
            <Box bg={"#E0E4FC"} rounded={"10px"}>
              <Box>
                <Img src={team4} />
              </Box>
              <Box p={"15px"}>
                <Text
                  fontSize={isLargerThan800 ? "17px" : "13px"}
                  fontWeight={"bold"}
                >
                  Anna Mills{" "}
                </Text>
                <Text fontSize={isLargerThan800 ? "12px" : "10px"}>
                  Design lead
                </Text>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Fourthcard;
