import React from "react";
import Layout from "../../layout";
import { Box, Button, Text, Img, Flex } from "@chakra-ui/react";
import styles from "./style.module.css";
import dashboardimg from "../../assets/Dashboard image.png";
import { motion } from "framer-motion";
import { Card } from "./Card";
import arrow from "../../assets/arrow.svg";
import cardImg from "../../assets/Image.png";
import Partners from "../../components/partners";

const MotionBox = motion(Box);

const Home = () => {
  return (
    <Layout>
      <Box className={styles.bg}>
        <Box>
          <Text
            textAlign={"center"}
            fontSize={"55px"}
            fontWeight={"bold"}
            pt={"120px"}
            fontFamily={"Roboto"}
          >
            The Best Software to Grow <br /> your Sales and Services
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
            w={"50%"}
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
      </Box>
      <Box maxW={"1150px"} m={"auto"}>
        <Box display={"flex"} my={"100px"}>
          <Box w={"50%"}>
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
            w={"50%"}
            display="flex"
            flexDirection="column"
            justifyContent={"space-between"}
          >
            <Box>
              <Flex>
                <Img src={arrow} />
                <Text my={"auto"} fontSize={"15px"} pl={"20px"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </Text>
              </Flex>
            </Box>
            <Box>
              <Flex>
                <Img src={arrow} />
                <Text my={"auto"} fontSize={"15px"} pl={"20px"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </Text>
              </Flex>
            </Box>
            <Box>
              <Flex>
                <Img src={arrow} />
                <Text my={"auto"} fontSize={"15px"} pl={"20px"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </Text>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.colorBg}>
        <Box maxW={"1150px"} m={"auto"}>
          <Box
            py={"60px"}
            display={"flex"}
            justifyContent={"space-between"}
            gap={"70px"}
          >
            <Box w={"50%"} my={"auto"}>
              <Text fontSize={"45px"} fontWeight={"bold"}>
                More impressions, more conversions
              </Text>
              <Text fontSize={"15px"} py={"25px"}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua invidunt ut labore.
              </Text>
              <Button
                bg={"black"}
                p={"25px"}
                textColor={"white"}
                _hover={{ bg: "white", color: "black" }}
              >
                Get a Free Trial
              </Button>
            </Box>
            <Box w={"50%"}>
              <Img src={cardImg} alt="cardImg" objectFit={"cover"} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Partners />
      </Box>
    </Layout>
  );
};

export default Home;
