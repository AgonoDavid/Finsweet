import React from "react";
import Layout from "../../layout";
import { Box, Button, Text, useMediaQuery } from "@chakra-ui/react";
import styles from "./style.module.css";
import Secondsection from "./components/secondsection";

const Pricing = () => {
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
          textAlign={"center"}
          pt={"70px"}
        >
          <Text
            fontSize={[
              isLargerThan800 ? "55px" : "35px",
              isMdScreen ? "40px" : "65px",
            ]}
            fontWeight={"bold"}
          >
            Pricing plans that
            <br /> suit you
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur
            <br /> adipiscing elit, sed do eiusmod tempor.
          </Text>
          <Box
            mt={"30px"}
            bg={"#E0E4FC"}
            w={"fit-content"}
            mx={"auto"}
            py={"10px"}
            px={"10px"}
            rounded={"15px"}
            justifyContent={"space-between"}
            gap={"18px"}
            display={"flex"}
          >
            <Button bg={"black"} textColor={"white"}>
              Monthly
            </Button>
            <Button bg={"#E0E4FC"}>Yearly</Button>
          </Box>
          <Secondsection />
        </Box>
      </Box>
    </Layout>
  );
};

export default Pricing;
