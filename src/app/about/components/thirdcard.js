import { Box, Grid, Img, Text } from "@chakra-ui/react";
import React from "react";
import img1 from "../../../assets/about-icon1.png";
import img2 from "../../../assets/about-icon-2.svg";
import img3 from "../../../assets/about-icon3.png";
import img4 from "../../../assets/about-icon-4.png";
import img5 from "../../../assets/about-icon5.png";
import img6 from "../../../assets/about-icon-6.png";

const Thirdcard = () => {
  return (
    <Box maxW={"1100px"} m={"auto"}>
      <Box bg={"#F9F0FB"} rounded={"15px"}>
        <Grid templateColumns={"repeat(3,1fr)"} p={"50px"} gap={"60px"}>
          <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
            <Img src={img1} w={"15%"} />
            <Text fontSize={"17px"} fontWeight={"bold"}>
              Best in Class
            </Text>
            <Text fontSize={"13px"}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </Text>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
            <Img src={img2} w={"15%"} />
            <Text fontSize={"17px"} fontWeight={"bold"}>
              Authenticity{" "}
            </Text>
            <Text fontSize={"13px"}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </Text>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
            <Img src={img3} w={"15%"} />
            <Text fontSize={"17px"} fontWeight={"bold"}>
              Email Support{" "}
            </Text>
            <Text fontSize={"13px"}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </Text>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
            <Img src={img4} w={"15%"} />
            <Text fontSize={"17px"} fontWeight={"bold"}>
              Discounts Available{" "}
            </Text>
            <Text fontSize={"13px"}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </Text>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
            <Img src={img5} w={"15%"} />
            <Text fontSize={"17px"} fontWeight={"bold"}>
              Powerful Marketing{" "}
            </Text>
            <Text fontSize={"13px"}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </Text>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
            <Img src={img6} w={"15%"} />
            <Text fontSize={"17px"} fontWeight={"bold"}>
              Inventory management
            </Text>
            <Text fontSize={"13px"}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </Text>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Thirdcard;
