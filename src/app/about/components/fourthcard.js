import React from "react";
import { Box, Text, Grid, Img } from "@chakra-ui/react";
import team1 from "../../../assets/team1.png";
import team2 from "../../../assets/team2.png";
import team3 from "../../../assets/team3.png";
import team4 from "../../../assets/team4.png";
import team5 from "../../../assets/team5.png";
import team6 from "../../../assets/team6.png";

const Fourthcard = () => {
  return (
    <Box maxW={"1100px"} m={"auto"}>
      <Box display={"flex"} mt={"90px"} justifyContent={"space-between"}>
        <Box w={"35%"}>
          <Text fontSize={"38px"} fontWeight={"bold"} pb={"10px"}>
            Our talented Team
          </Text>
          <Text fontSize={"12px"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore.
          </Text>
        </Box>
        <Box w={"65%"}>
          <Grid templateColumns={"repeat(3,1fr)"} gap={"25px"}>
            <Box bg={"#E0E4FC"} rounded={"10px"}>
              <Box>
                <Img src={team1} />
              </Box>
              <Box p={"15px"}>
                <Text fontSize={"17px"} fontWeight={"bold"}>
                  Blake Matthews
                </Text>
                <Text fontSize={"12px"}>CEO & Co-Founder</Text>
              </Box>
            </Box>
            <Box bg={"#E0E4FC"} rounded={"10px"}>
              <Box>
                <Img src={team6} />
              </Box>
              <Box p={"15px"}>
                <Text fontSize={"17px"} fontWeight={"bold"}>
                  Jack Newman{" "}
                </Text>
                <Text fontSize={"12px"}>CTO</Text>
              </Box>
            </Box>
            <Box bg={"#E0E4FC"} rounded={"10px"}>
              <Box>
                <Img src={team2} />
              </Box>
              <Box p={"15px"}>
                <Text fontSize={"17px"} fontWeight={"bold"}>
                  Sarinia Martins{" "}
                </Text>
                <Text fontSize={"12px"}>Marketing</Text>
              </Box>
            </Box>
            <Box bg={"#E0E4FC"} rounded={"10px"}>
              <Box>
                <Img src={team5} />
              </Box>
              <Box p={"15px"}>
                <Text fontSize={"17px"} fontWeight={"bold"}>
                  Spencer Wright{" "}
                </Text>
                <Text fontSize={"12px"}>Project management</Text>
              </Box>
            </Box>
            <Box bg={"#E0E4FC"} rounded={"10px"}>
              <Box>
                <Img src={team3} />
              </Box>
              <Box p={"15px"}>
                <Text fontSize={"17px"} fontWeight={"bold"}>
                  Caroline Ming{" "}
                </Text>
                <Text fontSize={"12px"}>Sales</Text>
              </Box>
            </Box>
            <Box bg={"#E0E4FC"} rounded={"10px"}>
              <Box>
                <Img src={team4} />
              </Box>
              <Box p={"15px"}>
                <Text fontSize={"17px"} fontWeight={"bold"}>
                  Anna Mills{" "}
                </Text>
                <Text fontSize={"12px"}>Design lead</Text>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Fourthcard;
