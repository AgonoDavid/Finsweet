import React from "react";
import Layout from "../../layout";
import { Box, Button, Text, Img, useMediaQuery } from "@chakra-ui/react";
import styles from "./style.module.css";
import dashboardimg from "../../assets/Dashboard image.png";
import Partners from "../../components/partners";
import Features from "../../components/features";
import { Card } from "./components/Card";
import { MotionBox } from ".";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import FifthSection from "./components/FifthSection";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";

export const Home = () => {
  const controls = useAnimation();
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  useEffect(() => {
    controls.start({ y: 0 });
  }, [controls]);

  return (
    <Layout>
      <Box
        className={styles.bg}
        align={isLargerThan800 ? "start" : "center"}
        m={"auto"}
      >
        <motion.div
          initial={{ y: -1000 }}
          animate={controls}
          transition={{ duration: 2, type: "spring" }}
        >
          <Box>
            <Text
              textAlign={"center"}
              fontSize={isLargerThan800 ? "65px" : "35px"}
              fontWeight={"bold"}
              pt={"120px"}
              fontFamily={"Roboto"}
            >
              The Best Software{isLargerThan800 ? null : <br />} to Grow <br />{" "}
              your Sales and Services
            </Text>
          </Box>
          <Text
            textAlign={"center"}
            pt={"30px"}
            fontFamily={"Roboto"}
            fontSize={"16px"}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor <br /> invidunt ut labore et dolore magna
            aliquyam erat.
          </Text>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Box
              bg={"#ffff"}
              px={"10px"}
              py={"10px"}
              display={"flex"}
              gap={"40px"}
              w={isLargerThan800 ? "50%" : "100%"}
              m={isLargerThan800 ? "0px" : "40px"}
              justifyContent={"space-between"}
              borderTopLeftRadius={"15px"}
              borderBottomLeftRadius={"15px"}
              borderTopRightRadius={"15px"}
              borderBottomRightRadius={"15px"}
              mt={"50px"}
              mb={"45px"}
            >
              <input
                type="text"
                style={{
                  backgroundColor: "#ffff",
                  fontSize: "13px",
                }}
                placeholder="Enter your Email"
              ></input>
              <Button
                bg={"black"}
                color={"white"}
                size={"md"}
                rounded={"15px"}
                _hover={{
                  backgroundColor: "grey",
                  textColor: "white",
                }}
                fontSize={"13px"}
                p={"22px"}
              >
                Get a free trial
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Box>
      <MotionBox
        mx={"auto"}
        w={"80%"}
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 20, duration: 3 }}
      >
        <Img src={dashboardimg} />
      </MotionBox>

      <Box mt={"100px"}>
        <Text
          className={styles.gradient}
          textAlign={"center"}
          fontSize={"23px"}
          fontWeight={"bold"}
          fontFamily={"Roboto"}
        >
          High Quality
        </Text>
      </Box>
      <Box mt={"40px"}>
        <Text
          textAlign={"center"}
          fontSize={"40px"}
          fontWeight={"bold"}
          fontFamily={"Roboto"}
        >
          We have the Best Solution <br /> for your Business{" "}
        </Text>
      </Box>
      <Box>
        <Card />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <Partners />
        <Text
          fontSize={"35px"}
          fontWeight={"bold"}
          pt={"60px"}
          textAlign={"center"}
        >
          Features
        </Text>
        <Features />
        <Text
          fontSize={isLargerThan800 ? "35px" : " 24px"}
          fontWeight={"bold"}
          textAlign={"center"}
          mt={"50px"}
        >
          The stunning results our
          <br /> customers have experienced
        </Text>
        <FifthSection />
      </Box>
    </Layout>
  );
};
