import React from "react";
import Layout from "../../layout";
import { Box, useMediaQuery, Text, Img } from "@chakra-ui/react";
import styles from "./style.module.css";
import Img1 from "../../assets/person-using-macbook-pro-3861964.png";
import Img2 from "../../assets/man-working-from-home-5198252.png";
import Img3 from "../../assets/people-working-in-front-of-the-computer-3184357.png";
import Card from "./components/card";
import Thirdcard from "./components/thirdcard";

const About = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 760px)");
  const [isMdScreen] = useMediaQuery(" (max-width: 1024px)");
  return (
    <Layout>
      <Box className={styles.bg}>
        <Box
          maxW={[
            isLargerThan800 ? "1150px" : "330px",
            isMdScreen ? "750px" : null,
          ]}
          m={"auto"}
        >
          <Box py={"80px"}>
            <Box textAlign={"center"}>
              <Text fontSize={"40px"} fontWeight={"bold"}>
                We are proud of our products
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor
                <br /> invidunt ut labore et dolore magna aliquyam erat, sed
                diam voluptua.
              </Text>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              gap={"30px"}
              w={"80%"}
              py={"70px"}
              mx={"auto"}
            >
              <Box w={"40%"} my={"auto"} mx={"auto"}>
                <Img src={Img1} />
              </Box>{" "}
              <Box w={"40%"} my={"auto"} mx={"auto"}>
                <Img src={Img2} />
              </Box>{" "}
              <Box w={"40%"} my={"auto"} mx={"auto"}>
                <Img src={Img3} />
              </Box>{" "}
            </Box>
          </Box>
          <Box
            textAlign={"center"}
            display={"flex"}
            flexDirection={"column"}
            gap={"15px"}
          >
            <Text
              className={styles.gradient}
              fontSize={"20px"}
              fontWeight={"bold"}
            >
              About Us
            </Text>
            <Text fontSize={"35px"} fontWeight={"bold"}>
              We’re a team of data analysts
            </Text>
            <Text fontSize={"13px"}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor
              <br /> invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam
              <br /> et justo duo dolores et ea rebum.
            </Text>
          </Box>
        </Box>
        <Card />
        <Box textAlign={"center"} pt={"100px"} pb={"30px"}>
          <Text fontWeight={"bold"} fontSize={"30px"}>
            Our corporate values
          </Text>
          <Text fontSize={"13px"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy.
          </Text>
        </Box>
        <Thirdcard />
      </Box>
    </Layout>
  );
};

export default About;
