import React from "react";
import Layout from "../../layout";
import styles from "./style.module.css";
import { Box, Img, Text, Flex, Button } from "@chakra-ui/react";
import dashboardimg from "../../assets/Dashboard image.png";
import { useMediaQuery } from "@chakra-ui/react";
import Partners from "../../components/partners";
import SecondSection from "./components/secondsection";
import Thirdsection from "./components/thirdsection";
import Fourthsection from "./components/fourthsection";
import Fifthsection from "./components/fifthsection";
import Sixthsection from "./components/sixthsection";
import Features from "../../components/features";

const Product = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
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
          display={"flex"}
          flexDir={isLargerThan800 ? "row" : "column"}
          justifyContent={"space-between"}
          w={"100%"}
          py={"50px"}
          gap={"35px"}
        >
          <Box
            w={isLargerThan800 ? "50%" : "100%%"}
            my={"auto"}
            textAlign={isLargerThan800 ? "start" : "center"}
          >
            <Text
              fontSize={[
                isLargerThan800 ? "55px" : "35px",
                isMdScreen ? "40px" : "65px",
              ]}
              fontWeight={"bold"}
            >
              Grow your Sales and Services
            </Text>
            <Text my={"20px"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Flex
              gap={"10px"}
              justifyContent={isLargerThan800 ? "start" : "center"}
            >
              <Button
                bg={"black"}
                textColor={"white"}
                _hover={{ bg: "white", textColor: "black" }}
              >
                Get Started
              </Button>
              <Button
                bg={"white"}
                textColor={"black"}
                _hover={{ bg: "black", textColor: "white" }}
                border={"1px solid black"}
              >
                Contact Us
              </Button>
            </Flex>
          </Box>
          <Box w={isLargerThan800 ? "50%" : "100%"}>
            <Img src={dashboardimg} />
          </Box>
        </Box>
        <Partners />
      </Box>
      <SecondSection />
      <Thirdsection />
      <Fourthsection />
      <Fifthsection />
      <Sixthsection />
      <Text
        fontSize={"35px"}
        fontWeight={"bold"}
        pt={"80px"}
        textAlign={"center"}
      >
        Features
      </Text>
      <Features />
    </Layout>
  );
};

export default Product;
