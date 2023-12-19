import React from "react";
import { Box, CloseButton, Text } from "@chakra-ui/react";
import CustomButton from "../Button";
import { Link } from "react-router-dom";

const Mobile = ({ show, onClose }) => {
  return (
    <Box
      width={"100%"}
      height={"100vh"}
      position="fixed"
      top="0"
      right={show ? "0" : "-100%"}
      zIndex="10"
      transition="0.3s ease-in-out"
      overflowY="scroll"
      padding="24px"
    >
      <Box
        position="fixed"
        top="0"
        right={show ? "0" : "-100%"}
        w="300px"
        h="100vh"
        zIndex="10"
        bg="white"
        opacity={show ? "100%" : "0"}
        transition="0.3s ease-in-out"
        overflowY="scroll"
        padding="24px"
        boxShadow={show ? "-14px 0px 10px rgba(0, 0, 0, 0.1)" : "none"}
      >
        <Box
          display="flex"
          justifyContent="flex-end"
          mb="30px"
          flexDir={"column"}
        >
          <CloseButton onClick={onClose} />

          <Box w={"100%"}>
            <Box
              display={"flex"}
              flexDir={"column"}
              alignItems={"center"}
              gap={"40px"}
              mt={"auto"}
              mb={"auto"}
              fontSize={"13px"}
            >
              {/*Home link*/}
              <Link to="/">
                <Text
                  _hover={{ fontWeight: "bold", textDecoration: "underline" }}
                >
                  Home
                </Text>
              </Link>
              {/* Product link*/}
              <Link to="/product">
                <Text
                  _hover={{ fontWeight: "bold", textDecoration: "underline" }}
                >
                  Product
                </Text>
              </Link>
              {/*pricing link*/}
              <Link to="/pricing">
                <Text
                  _hover={{ fontWeight: "bold", textDecoration: "underline" }}
                >
                  Pricing
                </Text>
              </Link>
              {/*about us link*/}
              <Link to="/about">
                <Text
                  _hover={{ fontWeight: "bold", textDecoration: "underline" }}
                >
                  About
                </Text>
              </Link>
              {/*blog link*/}
              <Link to="/blog">
                <Text
                  _hover={{ fontWeight: "bold", textDecoration: "underline" }}
                >
                  Blog
                </Text>
              </Link>
              {/*contact link*/}
              <Link to="/contact">
                <Text
                  _hover={{ fontWeight: "bold", textDecoration: "underline" }}
                >
                  Contact
                </Text>
              </Link>
              <Box>
                <Link to="/pricing">
                  <CustomButton>Free Trial</CustomButton>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Mobile;
