import React from "react";
import Layout from "../../layout";
import styles from "./style.module.css";
import { Box, Img, Text, Center, Flex, Button } from "@chakra-ui/react";
import dashboardimg from "../../assets/Dashboard image.png";
import CustomButton from "../../components/Button";
import { useMediaQuery } from "@chakra-ui/react";

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
          justifyContent={"space-between"}
          w={"100%"}
          py={"50px"}
          gap={"35px"}
        >
          <Box w={"50%"} my={"auto"}>
            <Text fontSize={"55px"} fontWeight={"bold"}>
              Grow your Sales and Services
            </Text>
            <Text my={"20px"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Flex gap={"10px"}>
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
          <Box w={"50%"}>
            <Img src={dashboardimg} />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Product;
